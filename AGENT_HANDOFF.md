# Nomad — Agent Handoff Document

> **Read this first.** This file is the complete working knowledge for the Nomad
> project as of 2026-10-02. It covers what the project is, how it is built and
> shipped, every feature that exists, the exact state machine of the app, and the
> commands to verify changes. A fresh agent should be able to continue work from
> this file alone.
>
> Also read `/home/aman/nomad/AGENTS.md` (project rules / aesthetic directives)
> — this file does **not** repeat those rules, it only documents the current
> implementation state.

---

## 1. What the project is

**Nomad** = a hyper-minimalist, black-and-white study guide for JEE
Main/Advanced. It is:

1. A **website** (Astro + React, static, served/built from `dist/`), and
2. An **Android APK** (Capacitor wrapper around the same `dist/`).

Both share one single-page React component: `src/components/NomadApp.tsx`
(~2390 lines — this is essentially the whole app).

Aesthetic (non-negotiable, see `AGENTS.md`): pure black/white, lowercase
branding, thin weights, no sidebars/headers/footers, `Ctrl+K`/search-driven
navigation, no icon clutter, no default blue tap highlights, subtle motion that
plays only once on load.

---

## 2. Tech stack & key files

| Path | Role |
|---|---|
| `src/components/NomadApp.tsx` | **The entire SPA.** Eye graphic, search, browse, practice, stats, settings, intro, gaze, paranoia, audio, footer, countdown. ~2390 lines. |
| `src/components/NomadApp.tsx.backup*` | Stale backups (3 of them). Ignore, do not edit. |
| `src/pages/index.astro` | Mounts `<NomadApp />`. |
| `src/layouts/Base.astro` | viewport / theme-color metas. |
| `src/data/all-concepts.json` (in `public/`) + `src/data/*.ts` | Concept content. Concepts fetched at runtime from `/all-concepts.json`; search via Fuse.js. |
| `public/` | Served assets: audio (`.mp3`/`.wav`), `media/` (WebP images), `all-concepts.json`. |
| `android/` | Capacitor Android project. |
| `android/app/src/main/java/com/nomad/app/MainActivity.java` | Hardware back → dispatches `Escape` keydown to WebView (back never exits the app). |
| `android/app/src/main/res/values/styles.xml` | Black theme, black status/nav bars, `windowLayoutInDisplayCutoutMode=shortEdges`. |
| `android/app/build/outputs/apk/debug/app-debug.apk` | Build output (~27 MB). |

Dependencies (`package.json`): astro 5, @astrojs/react 4, react 19,
framer-motion 13, fuse.js 7, katex 0.16, marked 18, @capacitor/\* 8.
**No Tailwind, no Docusaurus** (Tailwind-merge/clsx are deps but styling is raw
CSS + inline React styles; the style object `S` near the top of NomadApp.tsx is
the design system).

---

## 3. Build / run / ship commands

```bash
# Web dev server
cd /home/aman/nomad && npm run dev

# Web production build → dist/
cd /home/aman/nomad && npm run build

# Sync dist/ into the Android project
cd /home/aman/nomad && npx cap copy android

# Build the debug APK
cd /home/aman/nomad/android && \
  JAVA_HOME=/usr/lib/jvm/java-21-openjdk \
  ANDROID_HOME=/home/aman/android-sdk \
  ./gradlew assembleDebug

# Install on a connected device
adb install -r /home/aman/nomad/android/app/build/outputs/apk/debug/app-debug.apk
```

- JDK **21** (`/usr/lib/jvm/java-21-openjdk`), SDK at `/home/aman/android-sdk`,
  `android/local.properties` has `sdk.dir`.
- **There is no git repo** in `/home/aman/nomad`. No commits, no branches —
  be careful with edits; keep `.backup` files untouched as the only rollback.
- `npx tsc --noEmit` reports pre-existing errors (esModuleInterop, framer-motion
  `ease` typing). **These are expected and harmless** — Astro does not typecheck
  at build time. Don't "fix" them unless asked.
- Preview for testing: `npx vite preview --port 4326 --host 127.0.0.1`
  (serves `dist/`).

### Browser automation used for verification

`agent-browser` CLI is installed (`/usr/bin/agent-browser`).

```bash
agent-browser open "http://127.0.0.1:4326/"
agent-browser set viewport 1280 640      # desktop
agent-browser set viewport 390 844       # mobile emulation
agent-browser eval "<js expression>"
agent-browser screenshot /tmp/opencode/x.png
```

Note: `viewport` is a subcommand of `set`, not a top-level command.
Screenshots can be analyzed pixel-wise (e.g. with PIL) to detect faint 1px
lines — this is how decorative lines were hunted.

---

## 4. App state machine (NomadApp.tsx)

Primary state:

| State | Meaning |
|---|---|
| `selected: Concept \| null` | Concept detail ("content") view open. |
| `selectedQuestion` + `isPractice` | Practice mode open (question overlay / practice session). |
| `isBrowsingConcepts` | Infinite-scroll grid of all concepts (entered from DATABASE button). `browseLimit` grows +24 on scroll near bottom. |
| `isSettingsOpen` / `isStatsOpen` | Settings overlay / Stats overlay (Stats **replaced** the old Tasks button). |
| `isTargetMode` | Target mode — search switches to questions (`search questions...`). |
| `isTyping` | Input focused; drives pupil-look-down. |
| `searching` (= `query.trim().length > 0`) | Any typed query. |
| `isMultiEye` | **Paranoia mode** (multi-eye background event). |
| `eyeShape` (`open`/`closed`/`wide`/`reptile`) | Eye state; `wide` while searching, `reptile` in target mode. |
| `gazingAt: string \| null` | Which UI element the eye is currently staring at (drives glow). |
| `introStage: number \| null` | First-boot intro (see §7). `null` = intro finished/absent. |

Derived helpers (declared right after `introStage`):

```ts
const introActive  = introStage !== null;
const introShow    = (min: number) => !introActive || (introStage as number) >= min;
const searching    = query.trim().length > 0;
```

`introShow(n)` is the **per-stage UI reveal gate** used all over the JSX.

### Rendering gates (home/search view)

- Title `The Nomad Project` (id `nomad-title`): `introShow(1) && !settings.disableEye`.
- Search input (id `nomad-search-input`): wrapper `display: introShow(2) ? 'block' : 'none'`,
  `pointerEvents: introActive ? 'none' : 'auto'`.
- Practice button (`nomad-practice-btn`): `introShow(3) && !searching && !selected && !selectedQuestion && !isBrowsingConcepts && !isPractice`.
- Stats button (`nomad-stats-btn`): `introShow(4) && !searching && …`.
- DATABASE/footer: desktop-inline copy gated `!isMobile && introShow(5) && !searching`;
  mobile pinned copy gated `isMobile && introShow(5) && !searching && !selected && …` (see §6).
- Target, Settings, Countdown: `introShow(6) && …`.
- All fixed buttons have `pointerEvents: introActive ? 'none' : 'auto'`.

### Back / Escape behavior

- `MainActivity.onBackPressed()` dispatches `KeyboardEvent('keydown',{key:'Escape'})`
  into the WebView. The app never exits on back; a global Escape handler closes
  settings → stats → practice → content (`handleBack()`), returning to home.

---

## 5. localStorage contract (persisted keys)

| Key | Shape / value |
|---|---|
| `nomad-settings` | `Settings` object: `{ enableAnimations, enableParanoia, enableBlinking, enableEyeMovement, enableGaze, disableEye, enableVoice, enableBuzz }` (all default `true` except `disableEye: false`). Loaded with merge: `{ ...DEFAULT_SETTINGS, ...saved }`. Written on every `setSettings`. |
| `nomad-intro-done` | `'1'` once the first-boot intro completes. Presence = skip intro. |
| `nomad-practice-stats` | `{ attempted: number, correct: number }` — practice accuracy. |
| `nomad-visited-notes` | array of visited concept ids. |
| `nomad-reading-time` | reading-time map (seconds per note). Written when a note is closed, accumulating from the in-memory `readingStartRef` (set with `Date.now()` on note open, cleared on write). |

Stats overlay shows: visited notes, practice accuracy (`correct/attempted`),
reading time.

---

## 6. Features — current implementation details

### 6.1 Eye & gaze
- `EyeGraphic` component with `pupilX`/`pupilY` framer springs (stiffness 300,
  damping 25). Eye center element id: `nomad-eye-center`.
- `gazeAtElement(el)` computes vector from eye center to element center, clamps
  pupil travel to **18 px**, sets the springs. Eye **resets pupil to (0,0) when
  gaze ends** (`releaseGaze()` / organic loop).
- **UI Gazing loop** (`settings.enableGaze`): re-triggers every **8–15 s**
  (`scheduleGaze()`), picks a random target among
  `stats / settings / practice / target / countdown / concepts` (ids:
  `nomad-stats-btn`, `nomad-settings-btn`, `nomad-practice-btn`,
  `nomad-target-btn`, `nomad-countdown`, `nomad-concepts`), holds ~2.2 s, sets
  `gazingAt` → target element gets white glow (`textShadow: 0 0 14px rgba(255,255,255,0.95)`,
  color `#fff`).
- The loop and pupil mouse-tracking are **suppressed during the intro**
  (`introStage !== null` early-returns; `introStage` is in their dep arrays).
- Settings toggles: `enableGaze`, `enableEyeMovement`, `enableBlinking`,
  `enableParanoia`, `disableEye`.

### 6.2 Paranoia mode (`isMultiEye`)
- Trigger: **tap the main eye 4 times** within rapid taps (`handleEyeClick`,
  tap window 500 ms), or the rare organic 1 % event in the idle loop.
- `handleEyeClick` returns immediately while `introStageRef.current !== null`.
- **Minimum duration 8 s** (`PARANOIA_MIN_DURATION = 8000`,
  `paranoiaStartedAtRef`): both the automatic 10 s timer and the manual
  4-tap-to-close go through `requestParanoiaEnd()` which waits out the remaining
  time before `closeParanoia()`. So paranoia can never be instantly disabled.
- `closeParanoia()` clears the timer, sets `isMultiEye=false`, `eyeShape='open'`,
  resets pupils.
- In paranoia: multi-eye background (`MiniEye`s), reptile pupils, JEE countdown
  **and all buttons glow** (`isMultiEye` OR-ed into every glow condition).
- Paranoia voice `paranoia_activated.mp3` plays on entering `isMultiEye`, unless
  suppressed by intro (§7) or `enableVoice=false`.

### 6.3 Practice
- Options list is **scrollable**, no visible scrollbar (`.nomad-practice-scroll::-webkit-scrollbar { display:none }`, `scrollbarWidth:'none'`), no `question x of y` overlay, and the practice eye is
  wrapped in a static `scale(0.6)` outer wrapper so it **never changes size**
  (inner `motion.div` only shakes on wrong answer: `x: [0,-12,12,-10,10,-6,6,0]`).
- Wrong answer → `buzz_wrong.wav` played **twice, 50 ms apart**, gated by
  `settings.enableBuzz` (read directly from `localStorage['nomad-settings']` at
  play time, not from React state).
- Each answer updates `nomad-practice-stats`.

### 6.4 Audio assets (all in `public/`, root-relative URLs)

| File | Use | ~Duration |
|---|---|---|
| `welcome_to_nomad.mp3` | intro stage 1 (and standalone welcome if intro done) | 2.24 s |
| `intro_search.mp3` | intro stage 2 | 3.87 s |
| `intro_practice.mp3` | intro stage 3 | 2.8 s |
| `intro_stats.mp3` | intro stage 4 | 2.96 s |
| `intro_database.mp3` | intro stage 5 | 2.96 s |
| `intro_reminder.mp3` | intro stage 6 | 3.76 s |
| `paranoia_activated.mp3` | paranoia trigger | — |
| `buzz_wrong.wav` | wrong practice answer (played ×2) | — |

Preloaded via `<audio preload="auto">` refs for welcome/paranoia; intro voices
are constructed as `new Audio(src)` inside the sequencer.
Capacitor's `Bridge.java` sets `setMediaPlaybackRequiresUserGesture(false)`, so
**autoplay works on Android without a user gesture** (confirmed at
`Bridge.java:592`). No MainActivity change needed for audio.

Settings toggle: `enableVoice` ("Enable Voices (Welcome / Paranoia)").
The intro reads this **live from localStorage** (`voiceOn()` helper) so a
settings load can never cancel a running intro; if voices are off it still waits
the fallback duration so pacing is preserved.

### 6.5 Search / browse
- Fuse.js fuzzy search over fetched concepts. Dropdown results
  (`S.dropdown`) appear under the input while `query.trim()` non-empty.
- **While searching (`searching === true`): the bottom buttons
  (practice, target, stats, settings) and the DATABASE footer disappear from the
  DOM** (thus disabled). They return when the query is cleared. The JEE
  countdown (top-right) stays visible.
- Selecting a result clears the query (`setQuery('')`), so buttons come back.
- Browse view: infinite scroll grid, `browseLimit += 24` near bottom,
  scrollbar hidden.

### 6.6 Footer / DATABASE button — placement (latest change)
- `Footer` component takes a new **`inline` prop**:
  - **Desktop web (`!isMobile`)**: rendered *inline inside the search
    container, directly below the search bar* — `position: relative`,
    centered, `marginTop: 3rem`, `width: 100%`, text centered.
  - **Mobile / Android (`isMobile` = width < 600)**: unchanged — pinned
    `position: absolute; bottom: 7rem; left/right: 1.5rem`.
- Exactly one `#nomad-concepts` element exists at any breakpoint (verified:
  1 element at 1280 px with `position: relative`, 1 element at 390 px with
  `position: absolute`).
- Clicking DATABASE → `setIsBrowsingConcepts(true)` (guarded: no-op during intro).
- **Decorative line removed**: the Footer's `borderTop: '1px solid
  rgba(255,255,255,0.06)'` (and its `paddingTop`) — the horizontal hairline
  spanning the bottom section below the search bar — is **gone**. The only 1px
  line remaining near the search bar is the input's own `borderBottom`
  (`rgba(255,255,255,0.1)`, brightens to `0.85` + white glow while
  `gazingAt === 'search'`). Verified by pixel-scanning screenshots: single line
  at input bottom, nothing else.

---

## 7. First-boot guided intro (the big feature)

**Gated by `localStorage['nomad-intro-done']`.** On load:
`introStage = localStorage['nomad-intro-done'] ? null : 0`.
Runs **exactly once**; guarded by `introRunRef` (never re-enters).

State: `introStage: 0|1|2|3|4|5|6|null` + `introStageRef` (synced by effect) +
`introActive` + `introShow(min)`.

### Stage table

| Stage | What shows | Eye gazes at | Voice (fallback ms) |
|---|---|---|---|
| 0 | **only the eye** (nothing else rendered) | — | (waits 2600 ms for boot eye-open) |
| 1 | Title `The Nomad Project` fades in | `nomad-title` (`gazingAt='title'`, title gets bright text-shadow) | `/welcome_to_nomad.mp3` (2600) |
| 2 | Search bar fades in (`inputControls`) | `nomad-search-input` (`gazingAt='search'`, input border+glow) | `/intro_search.mp3` (4200) |
| 3 | `⟨ practice ⟩` appears + glows | `nomad-practice-btn` | `/intro_practice.mp3` (3100) |
| 4 | `⟨ STATS ⟩` appears + glows | `nomad-stats-btn` | `/intro_stats.mp3` (3300) |
| 5 | DATABASE footer appears + glows | `nomad-concepts` | `/intro_database.mp3` (3300) |
| 6 | Target/Settings/Countdown appear; **paranoia starts** (`paranoiaStartedAtRef`, `setIsMultiEye(true)`) | pupils centered | `/intro_reminder.mp3` (4100); **paranoia auto-ends when the voice ends** (`closeParanoia()`) |
| → `null` | everything visible, normal mode resumes | — | writes `nomad-intro-done='1'`, focuses input |

Stage 4 (target button) was intentionally **skipped** by design decision —
target only appears at stage 6.

### Implementation (the driver)
Single `useEffect` placed immediately after the Boot effect (~line 1587):

```ts
useEffect(() => {
  if (introStageRef.current === null || introRunRef.current) return;
  introRunRef.current = true;
  // helpers: wait(), voiceOn() (reads localStorage live),
  //          playVoice(src, fallbackMs) — resolves on 'ended'/'error',
  //                      or fallback+8000 safety timeout;
  //          gaze(id, key) — setGazingAt + gazeAtElement;
  //          releaseGaze() — clears gazingAt, resets pupils;
  //          advance(stage, preDelay, settle) — wait, setIntroStage, wait for DOM.
  (async () => { /* stage sequence, see table */ })();
  return () => { cancelled = true; };
}, [inputControls, gazeAtElement, pupilX, pupilY]);
```

Key facts:
- Stage order/timing: `advance(1, 2600, 800)` → voice → `advance(2, 400, …)` →
  voice → `advance(3/4/5, 400–500, 500)` → voice each → `advance(6, 500, 600)` →
  paranoia + voice → `closeParanoia()` → write flag → `setIntroStage(null)`.
- Stage 2 does `inputControls.set({opacity:0,y:10})` **before** advancing, then
  `inputControls.start({opacity:1,y:0})` after, so the search bar fades in.
- Voice files: paths in §6.4. Fallback waits used when `enableVoice=false`.

### Guards that must stay in place
1. **Welcome auto-play effect** — early-returns and marks
   `hasPlayedWelcomeRef=true` while `introStageRef.current !== null` (intro owns
   the welcome line).
2. **Paranoia voice effect** — early-returns while intro active (stage 6 plays
   its own reminder instead).
3. **Organic idle loop** — `if (… || introStage !== null) return;` and
   `introStage` is in its deps (loop restarts when intro ends).
4. **Pupil mouse-tracking effect** — `if (introStage !== null) return;` +
   dep added.
5. **`handleEyeClick`** — `if (introStageRef.current !== null) return;`
   (eye taps can't trigger/kill paranoia mid-intro).
6. **Boot focus** — `inputRef.current?.focus()` and the input fade-in only run
   when `introStageRef.current === null` (otherwise the Android keyboard would
   pop up mid-tour).
7. **`pointerEvents: introActive ? 'none' : 'auto'`** on the input wrapper and
   all fixed buttons; footer click guarded with `if (introActive) return;`.

### Verified intro timings (browser run from wiped localStorage)
`2 s eye-only → 4 s title → 8 s search → 12 s practice → 17 s stats →
~25 s database → ~30 s paranoia+countdown → ~33 s done`, flag written,
reload skips intro and focuses input. Re-verified after the Footer move.

---

## 8. Settings overlay (parity website ⇄ Android)

Toggles rendered from a list in `SettingsOverlay` (~line 1347):
`enableParanoia`, `enableEyeMovement`, `enableBlinking`, `enableGaze`,
`disableEye`, `enableVoice`, `enableBuzz` (plus `enableAnimations` in the type,
not in the visible list).
Stats overlay (`isStatsOpen`) replaces the old Tasks button and shows visited
notes / practice accuracy / reading time.

---

## 9. Android specifics

- Package `com.nomad.app`, Capacitor 8, debug APK only (no signing config for
  release mentioned; `assembleDebug` is the pipeline).
- Black theme + cutout shortEdges in `styles.xml`; `Base.astro` sets
  viewport/theme-color.
- Hardware back → `Escape` → app-level handler (never exits app).
- Media autoplay allowed (Capacitor bridge default, no gesture needed).
- `local.properties`: `sdk.dir=/home/aman/android-sdk`.

---

## 10. Gotchas / do-not-break list

- **No git.** Back up before large edits (there are `.backup`, `.backup2`,
  `.backup3` files — don't overwrite them; make a new one if needed).
- Intro animations must play **once** and never replay when returning from a
  concept to search state (core rule from `AGENTS.md`).
- The intro driver's effect deps are deliberately minimal; adding
  `settings.enableVoice` to that dep array would **cancel a running intro** on
  settings load — that's why `voiceOn()` reads localStorage directly.
- `introRunRef` means the sequencer starts only once per page load; if you add
  new deps to that effect, verify the cleanup `cancelled` flag can't kill the
  run prematurely.
- Decorative-line rule: the only legitimate hairline near the search bar is the
  input's own `borderBottom`. Don't re-add Footer borders.
- Bottom buttons must vanish while `searching` (query non-empty).
- Practice eye must keep its `scale(0.6)` outer wrapper (no size jump).
- Paranoia's 8 s minimum duration and the double buzz (50 ms) are deliberate.
- tsc errors are pre-existing; the gate is `npm run build` + visual check.
- Vite warns `NomadApp.*.js` > 500 kB — cosmetic only.

---

## 11. Verification checklist for the next agent

```bash
cd /home/aman/nomad && npm run build
npx vite preview --port 4326 --host 127.0.0.1 &   # serves dist/
agent-browser open "http://127.0.0.1:4326/"
# wipe intro:
agent-browser eval "localStorage.clear(); location.reload(); 'ok'"
# then poll state:
agent-browser eval "JSON.stringify({sec:Math.round(performance.now()/1000), done:localStorage.getItem('nomad-intro-done'), title:!!document.getElementById('nomad-title'), concepts:!!document.getElementById('nomad-concepts')})"
agent-browser screenshot /tmp/opencode/check.png
```

Then ship:
```bash
npm run build && npx cap copy android
cd android && JAVA_HOME=/usr/lib/jvm/java-21-openjdk ANDROID_HOME=/home/aman/android-sdk ./gradlew assembleDebug
adb install -r app/build/outputs/apk/debug/app-debug.apk
```

---

## 12. Recent change log (2026-10-02 session)

1. APK pipeline established and working (WebP media, deferred search,
   infinite-scroll browse, black/cutout theme, eye icon).
2. Stats overlay replaced Tasks; visited-notes / reading-time / practice-accuracy
   tracking added.
3. Settings merged with defaults on load.
4. Escape/hardware-back navigation.
5. Gaze feature (8–15 s loop, glow, pupil reset, countdown glow in paranoia).
6. Audio: welcome + paranoia voices with `enableBuzz`/`enableVoice` toggles;
   buzz ×2 at 50 ms.
7. Paranoia 8 s minimum duration; 4-tap close.
8. Practice eye static scale fix.
9. **First-boot intro sequence implemented end-to-end** (§7) with per-stage
   gating, glows, voice pacing, and all interaction guards.
10. Footer `borderTop` decorative line **removed** (pixel-verified).
11. Bottom buttons (practice/target/stats/settings) + DATABASE footer
    **disappear while searching** (query non-empty), verified both directions.
12. **DATABASE button moved below the search bar on desktop web** via new
    `Footer inline` variant; mobile/Android keeps the pinned bottom placement;
    single `#nomad-concepts` verified at both breakpoints; intro re-verified;
    APK rebuilt (27.6 MB, 11:34).

### Session 2 & 3 Update (2026-10-02)

13. **Deep Content Cleanup**: `deep-clean.cjs` created to fix LaTeX spacing (`$ x $` → `$x$`), strip metadata bleed, and remove empty H2 orphans. Concept count condensed from 583 to 469 clean chunks.
14. **Full-Chapter Search**: `build-concepts.cjs` now emits `isFullChapter: true` entries. Sorted to the top of search results, labeled with `· FULL CHAPTER`.
15. **Todo Widget**: Added `TodoWidget` pinned to top-left for desktop only (`!isMobile`), persists to `nomad-todos`.
16. **Light Mode & Always Glow**: `alwaysGlow` toggle OR'd into every UI glow. `lightMode` uses a root `filter: invert(1)` and explicitly preserves the Eye and images (via double invert) so they render correctly.
17. **Universal Panic Button**: `Escape` key handler made completely global — clears search, closes Target/Practice, overlays, and the Todo widget, bringing user to pristine landing page.
18. **Dual-Bank Question Architecture**: `PRACTICE_QUESTIONS` separated into `MICRO_QUESTIONS` (atomic checks) and `TARGET_QUESTIONS` (heavy JEE problems).
19. **Metadata Search Tagging**: All questions manually tagged with `chapter` and `topic`. `questionFuse` weights `chapter` highest (3) so typing a chapter name ("ray optics") brings up all relevant questions.
20. **Question Browsing Page**: A pseudo-item `VIEW ALL MATCHES` added to the top of Target search. Clicking it triggers `isBrowsingQuestions = true`, rendering a full-screen grid of all matched questions (similar to the concept browser).
21. **Skill System - JEE Question Hunter**: `jee-question-hunter` skill formalized to autonomously extract verified PYQs, format them to Nomad's strict TS schema, extract diagram descriptions, and chain to `diagram-generator`.
22. **Vault Bank Integration**: The hunter agent imported batches of Physics and Maths PYQs directly from `/home/aman/jee-workspace/vault/sources/scraped/bank/`. 
23. **Automated Background Scheduling (current)**: The `opencode-scheduler` plugin was tried and **did not work** (its dependencies did not persist; no `crontab` binary exists on this machine). Replaced with a **systemd user timer**: `~/.config/systemd/user/jee-nomad-agent.{service,timer}` firing every **15 min** (`OnUnitActiveSec=15min`, `Persistent=true`). Each run executes `/home/aman/nomad/scripts/jee-nomad-agent.sh` → `opencode run "$(cat scripts/scheduled-agent-prompt.md)"` with a 600 s timeout, appending to `/home/aman/nomad/agent-cron.log`. Prompt covers an expanded NOTE HYGIENE scan/fix of `src/data/context/**` + `public/all-concepts.json` (basic + advanced: unsupported `\( \)`/`\[ \]` delimiters, unbalanced braces, TikZ/figure residue, broken `.webp` media paths, raw HTML entities, stray `<img>/<table>` blobs, CRLF/double-blank/tab cleanup, schema-type validation per concept, broken internal links, orphan notes, chapter numbering glitches), QUESTION BANK GROWTH per `jee-question-hunter` skill, and `npm run build` verification. **Current blocker**: OpenRouter credits error from `opencode run` — add credits/login to a key before agent runs can produce questions; the schedule/pipeline itself is verified working.
24. **Image Rendering Fix**: `vaults/context/media/` imported to `public/media/` and all 60 `.md` files regex-patched from `.png` to `.webp` ensuring in-note diagrams render beautifully.

---

## 13. Gesture Mode (added 2026-10-05)

Optional, **off by default**, fully on-device hand-gesture navigation. Google
MediaPipe `@mediapipe/tasks-vision` 1.0.1 (pinned exact) loaded via dynamic
`import()` only when the setting is on. Model + SIMD wasm self-hosted under
`public/gesture/` (`gesture_recognizer.task` 8.4 MB, `vision_wasm_internal`
wasm 11.8 MB; non-SIMD variants intentionally not shipped).

### Files

| Path | Role |
|---|---|
| `src/lib/gesture/handShape.ts` | Pure landmark → pose classifier (victory / open_palm / closed_fist / other). No imports. |
| `src/lib/gesture/swipe.ts` | Pure swipe + hold detector over `{t, x, y, gesture}` samples. No imports, no DOM. |
| `src/lib/gesture/engine.ts` | Camera + GestureRecognizer lifecycle (start/stop), 15 fps throttle, GPU→CPU fallback, error mapping. |
| `src/components/GestureLayer.tsx` | Mounted once at app root (outside overlays, so it tracks in practice too). Owns engine, maps actions to keydown/CustomEvent/scroll, renders preview + indicator dot. |
| `src/components/NomadApp.tsx` | `enableGesture`/`showGesturePreview` settings rows, status line, `nomad:gesture` listener in PracticeOverlay (reveal/conceal only — never selects answers). |
| `scripts/gesture/swipe.test.ts` | Synthetic-stream unit tests (23 checks), bundled with the Vite-shipped esbuild, no new deps. |

### Gesture map (all require a two-finger "victory" hand shape, ≥70% of
window frames, except palm/fist holds)

| Gesture | Effect |
|---|---|
| Victory swipe left (raw dx > 0) | `ArrowRight` keydown → next question |
| Victory swipe right (raw dx < 0) | `ArrowLeft` keydown → previous |
| Victory swipe up | `window.scrollBy(+0.7·vh)` when a note is open |
| Victory swipe down | `window.scrollBy(-0.7·vh)` when a note is open |
| Open palm held ~700 ms, still | `nomad:gesture {action:'reveal'}` |
| Closed fist held ~700 ms, still | `nomad:gesture {action:'conceal'}` |

Tunables (swipe.ts): `SWIPE_MIN_DISTANCE=0.22`, `SWIPE_WINDOW_MS=350`,
`DOMINANT_AXIS_RATIO=1.6`, `GLOBAL_COOLDOWN_MS=900`, `HOLD_MS=700`,
`HOLD_STILL_RADIUS=0.05`, `MIN_TRACKED_FRAMES=3`, `MIN_VICTORY_RATIO=0.7`.

### Semantics & guards

- Ignores all gestures while the intro runs, while an input/textarea/
  contentEditable is focused, and while the document is hidden. Camera is
  stopped on tab-hide and restarted on return (streams are never left on).
- One action per gesture: swipes re-arm only after a non-victory frame; held
  palm/fist fires once per pose presence; 1 s global cooldown.
- Preview: grayscale, ~96×72, mirrored, low opacity, top-left corner, no
  border, no icon. With preview off, a ~6 px slowly fading white dot sits in
  the same corner and the `<video>` stays mounted 1×1 (never `display:none`)
  so frames keep decoding.
- Live status lines (settings, wisdom-note style): "runs on your device.
  nothing is recorded." / lowercase error (`permission denied`,
  `no camera found`, `camera busy`, `camera not available in this build`,
  `model failed to load`); any failure flips `enableGesture` back to `false`.
- Dev-only hook `window.__nomadGesture.inject(action)`
  (`next|previous|scroll-up|scroll-down|reveal|conceal`), guarded by
  `import.meta.env.DEV` — confirmed absent from production `dist`.

### Platform status

- **Web (GitHub Pages)**: works (https secure context).
- **Android (Capacitor)**: `CAMERA` permission + `uses-feature camera
  required=false` added to the manifest. `BridgeWebChromeClient` already
  forwards WebView camera permission requests through the Android runtime
  prompt, and Capacitor serves `https://localhost` (secure context), so no
  MainActivity change was needed. **Untested on a physical device.**
- **Desktop (Tauri)**: **not done / fails safe.** No Tauri code touched;
  the shared web code runs there but if camera acquisition fails the toggle
  flips off and shows "camera not available in this build". Verify on a real
  machine before enabling for users.

### Size cost

`public/gesture/` adds ~20.5 MB raw (model 8.4 MB + wasm 11.8 MB + js 0.3 MB);
the same bytes land inside the APK (debug `app-debug.apk` 177 MB, dominated by
150 MB of note diagrams in `dist/media`).
