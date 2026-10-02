# Nomad — Product Vision

This document captures the long-term product direction for Nomad. These features are **not yet built** but define the roadmap.

---

## Vision: Nomad as an Offline Android App

### The Goal

Package Nomad as a native Android APK that works **fully offline** after initial setup. The app should contain the complete concept database, practice questions, and all diagrams locally on the device — so it works without internet, in flight, in a bus, anywhere.

### The Problem with the Current Architecture

Right now, Nomad is a static Astro site that serves `all-concepts.json` (concepts) and `PRACTICE_QUESTIONS` (hardcoded in JS bundle) from a local dev machine. This works on a browser on the same network, but:

- It cannot be packaged into an APK without a backend.
- Adding new notes/questions requires a rebuild and redeployment.
- There is no way to update content on an already-installed app.

---

## The Sync Architecture (To Be Built)

### Core Idea: "Sync Once, Use Forever"

Add a **`[ sync ]` button** on the app's home screen. When tapped:

1. The app connects to a **home server** (Aman's machine running a small sync API).
2. It downloads the latest `all-concepts.json` and `practice-questions.json` from the server.
3. Both files are stored in the device's **local storage / IndexedDB** (web) or **SQLite / filesystem** (native).
4. All future reads (search, practice, target mode) pull from the locally cached data — **zero network dependency**.

### What "Sync" Downloads

| Resource | Format | Destination |
|---|---|---|
| Concept notes | `all-concepts.json` | IndexedDB / local file |
| Practice questions + solutions | `practice-questions.json` | IndexedDB / local file |
| Diagrams / images | Individual `.jpg/.png` files | Device filesystem / blob cache |
| App version manifest | `manifest.json` | Checked on each sync to know what's new |

### The Home Server

A minimal Node.js or Python HTTP server running on Aman's machine that:
- Serves the latest JSON files over local network (or optionally via a tunnel like Tailscale/Cloudflare for remote sync)
- Exposes a `/manifest` endpoint: `{ version: "2026-10-02", concepts: 55, questions: 55 }`
- Exposes `/concepts`, `/questions`, `/media/:filename` endpoints

The sync button hits `/manifest` first. If the version is newer than what's cached locally, it downloads the updated files. Otherwise it says "Already up to date".

### Incremental Sync (Future)

Instead of downloading the full JSON every time, the server can expose a diff endpoint:
- `/concepts/since/:timestamp` — returns only concepts modified after a given date
- This keeps sync fast even with a large database

---

## Android Packaging Strategy

### Option A: WebView APK (Fastest path)
Wrap the existing Astro/React app in a **Capacitor** shell (`@capacitor/android`). Capacitor lets you take a web app and package it as a native Android APK with access to native APIs (filesystem, network, etc.).

- The React app runs in a native WebView
- Capacitor plugins handle local file storage, push notifications, etc.
- Sync button uses `@capacitor/filesystem` to write JSON to device storage
- Estimated effort: **1-2 days** once the sync server is built

### Option B: React Native (Full native, later)
Rewrite the UI in React Native for truly native performance. Not recommended as first step — the Capacitor path gets to APK much faster with near-native feel.

---

## UI Concept for the Sync Button

```
[ sync ]
```

- Small text button, same style as `[ practice ]` and `[ target ]`
- Positioned somewhere in the footer or as a standalone page/settings screen
- On tap: shows a progress indicator (`syncing... 42/55 concepts`)
- On complete: `last synced: today, 6:21 AM — 55 concepts, 55 questions`
- On error (server unreachable): `offline — using cached data from Oct 2`

---

## Offline-First Data Layer (Technical Design)

### Storage
Use **IndexedDB** via a library like `idb` (tiny, Promise-based wrapper):

```typescript
// On sync:
await db.put('concepts', allConceptsArray);
await db.put('questions', practiceQuestionsArray);

// On app load (replace fetch):
const concepts = await db.get('concepts') ?? [];
const questions = await db.get('questions') ?? [];
```

### Fallback Chain
```
1. Try IndexedDB (cached local data)  →  fast, offline
2. If empty → try fetching from /all-concepts.json (dev server)
3. If both fail → show "No data. Tap [sync] to download."
```

This means the app works offline after the first sync, degrades gracefully when no data exists yet, and always uses cached data by default.

---

## Summary Roadmap

| Phase | What | Effort |
|---|---|---|
| **Phase 1** (Now) | Document vision ✅ | Done |
| **Phase 2** | Build sync server (Node.js, serves JSON + media) | ~2h |
| **Phase 3** | Replace `fetch('/all-concepts.json')` with IndexedDB offline-first layer | ~2h |
| **Phase 4** | Add `[ sync ]` button UI + progress indicator | ~1h |
| **Phase 5** | Wrap with Capacitor, generate APK | ~1 day |
| **Phase 6** | Incremental sync (diff-based) | ~3h |
| **Phase 7** | Push notifications for new content | Later |

---

*This file is the source of truth for the Nomad offline/Android roadmap. Update it as decisions are made.*
