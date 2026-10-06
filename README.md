# Nomad — AI-Powered Concept Vault

Nomad is an ultra-minimalist, ambient React/Astro web application designed as a highly optimized study companion for JEE preparation. It serves as a unified interface to search, read, and visualize complex physics, chemistry, and math concepts using a pure black-and-white, character-driven design language.

## 🏗️ Architecture & Data Flow

The application is fully static and runs strictly on the client side, powered by a pre-computed JSON database to ensure zero-latency fuzzy searching.

1. **Source of Truth (`src/data/context/`)**: Contains raw, cleanly formatted Markdown files representing individual chapters (e.g., *Sets and Relations*, *Current Electricity*).
2. **Build Pipeline (`scripts/build-concepts.cjs`)**: A Node.js build script that recursively scans the markdown directory, strips messy formatting (like "Chapter XX —"), parses YAML frontmatter, and compiles everything into a single optimized payload.
3. **The Database (`public/all-concepts.json`)**: The output of the build script. This is loaded asynchronously when the React app mounts, feeding the `Fuse.js` search index.
4. **Static Assets (`public/media/`)**: Stores all generated pure-B&W technical diagrams and illustrations embedded in the markdown files.
5. **The Application (`src/components/NomadApp.tsx`)**: The monolithic React SPA handling rendering, search, typography, and the ambient AI state machine.

## ⚙️ Core Stack

- **Framework**: Astro (configured for React SSR/SSG).
- **UI/Interactivity**: React 19 + Framer Motion (for all complex spring/morph animations).
- **Search Engine**: Fuse.js (fuzzy search across `title`, `section`, and `content` with weighted priorities).
- **Markdown & Math**: `marked` (for robust markdown parsing) + `katex` (for server-grade LaTeX rendering).

## 👁️ The "Eye" (Ambient UI)

The center of the interface features a dynamic, interactive "Eye" that acts as the application's mascot and state indicator.
- **SVG Morphing**: The eye is drawn using pure SVG paths (`d` attributes) morphed via Framer Motion. **Important**: It does not use SVG `stroke`. The eyelid thickness is encoded directly into the physical path coordinates to simulate a true 3D clipping mask over a black void.
- **Mouse Tracking**: The pupil perfectly tracks the user's cursor using React's `onMouseMove` mapped to Framer `useSpring`.
- **Organic Loop**: A background `useEffect` loop triggers random micro-saccades and double-blinks to feel alive.
- **The "Paranoia" Event**: If the user clicks the eye 4 times rapidly, it triggers a 10-second Paranoia Event. The main eye locks open, ignoring the cursor, while 6 eerie, slowly blinking background eyes (`MINI_EYES`) fade in from the void. The footer UI glows brightly.

## 🎨 Design System & Typography

- **Strictly Monochromatic**: Pure black (`#000000`) background, pure white (`#ffffff`) text. Grey variations are exclusively achieved via opacity (e.g., `rgba(255, 255, 255, 0.7)`).
- **Markdown Typography**: Handled globally via `.nomad-prose` in `NomadApp.tsx`. 
  - `h1`: 1.8rem, tightly spaced.
  - `h2`, `h3`: Clearly hierarchal, uppercase for h3.
  - `ul`, `li`: Square bullets (`list-style-type: square`).
  - `img`: Force-scaled to `100%` width with `8px` border radius and a subtle `0.1` opacity white border. *Do not apply CSS inversion to images, as generated diagrams are already pure black and white.*

## 🛠️ Important Commands

- `npm run dev` — Start the local Astro dev server at `localhost:3000`.
- `node scripts/build-concepts.cjs` — **CRITICAL**: Run this anytime you modify, add, or rename markdown files in `src/data/context/`. It rebuilds the JSON database.
- `npm run build` — Compiles the Astro static site into `/dist`.

## ✋ Gesture Mode (optional, off by default)

Hand-gesture navigation via Google MediaPipe GestureRecognizer, fully on-device (no cloud calls, frames never recorded or uploaded). Toggle in Settings → `Gesture Mode (camera access needed)`; shows a small mirrored grayscale camera preview (or a 6 px white dot when the preview is off) in the top-left corner. An open palm swept sideways fires an arrow key (right → next, left → previous — works in practice mode). Showing N fingers for ~0.7 s selects that answer option in practice; a closed fist conceals a solution; a held thumbs-up goes back (synthetic Escape). Two fingers dragged vertically scroll the page, touch-style. On the concept graph, pinching with both hands zooms (apart → in, closer → out) and a right-fist drag pans. A green landmark/pose debug overlay sits on the preview. Desktop (Tauri) app not supported yet — the toggle fails safe there.

## 🤖 AI Agent Workflow & Skills

If you are an AI agent working on this repository, please note:
1. **Diagram Generation Skill**: A custom agent skill exists at `~/.agents/skills/diagram-generator/SKILL.md`. If a markdown file contains missing images but has a `Description:` tag, trigger this skill to spawn a subagent that generates pure black-and-white diagrams, moves them to `public/media/`, and embeds them into the markdown.
2. **Adding New Chapters**: Drop the `.md` file into `src/data/context/`. Ensure headings use standard markdown (`#`, `##`) and remove manual chapter numbering. Run the build script immediately after.
3. **Modifying the UI**: All UI states (Paranoia, typing, searching, prose styling, footer) are centrally located in `NomadApp.tsx`. Keep transitions bound to `framer-motion` instead of CSS transitions to avoid conflicting animation bugs.

---

## Recent Features Added

### To-Do Widget (localStorage)
- Fixed `top-left` corner, always visible. Click `[ tasks ]` to expand.
- Tasks stored in `localStorage` key `nomad-todos` — persists across page reloads.
- `□` / `■` toggle for pending/done. `×` to delete. Enter to add.
- Glows white in Paranoia mode matching the footer HUD.

### Practice Mode
- Fixed `top-right` corner button `[ practice ]` — mirrors the todo widget symmetrically.
- Full-screen black overlay with fade-in via `AnimatePresence`.
- Header: `[ exit ]` · `practice mode` label · live score `X / Y`.
- MCQ format: 5 placeholder questions. After answering: `✓` / `✗` feedback, correct answer always lit solid white.
- `[ next → ]` to advance. Final screen shows total score + `[ restart ]`.
- Glows white in Paranoia mode.
- **To extend**: Replace `PLACEHOLDER_QUESTIONS` array inside `PracticeOverlay` component in `NomadApp.tsx` with real questions from the vault.

### Mobile Responsiveness
- `isMobile` boolean state (triggers at `window.innerWidth < 600`) drives conditional inline styles.
- Eye SVG scales down on mobile. Search box set to `90vw`. Dropdown constrained to screen.
- Prose padding reduced to `1rem`, headings scaled down via `@media (max-width: 600px)` in the global `<style>` block.
- Footer stacks vertically on mobile. Todo panel expands to `calc(100vw - 3rem)`.

### UI Polish Pass
- Search: `caret-color: white`, dimmed placeholder, subtle `border-bottom` on focus.
- Dropdown: `border-left` accent on active result, dimmed section labels right-aligned.
- Prose: hidden scrollbar, `code`/`pre` styled with monospace + subtle bg, `blockquote` left border.
- Footer: thin `border-top` separator, consistent `letter-spacing: 0.1em`.
- Title: faint etched text-shadow glow.
- Global: clean `::selection` highlight, smooth opacity transitions.
