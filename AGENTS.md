# Nomad - Agent Instructions & Project Rules

This file defines the core directives, architectural constraints, and design philosophies for any AI agent working on the **Nomad** project. Always review these rules before writing code or generating content.

## 1. Project Identity & Purpose
- **Name:** Nomad
- **Goal:** A highly focused, comprehensive guide for JEE Main/Advanced preparation.
- **Pedagogy:** Laser-focused learning. Eliminate cognitive overload. One topic, one explanation, one diagram.

## 2. Technical Stack
- **Framework:** Astro (Content-first, static site generation, zero JS by default).
- **UI Library:** React (`@astrojs/react`).
- **Math Rendering:** KaTeX (for robust physics and chemistry formulas).
- **Styling:** Raw CSS and inline React styles. *No Docusaurus, Tailwind, or heavy CSS frameworks.*

## 3. Design & UI/UX Guidelines (Strict)
- **Aesthetic:** Pure Black and White. Ultra-minimalist. 
- **Typography:** 'Inter', sans-serif. Use thin, elegant font weights. Branding is strictly lowercase (e.g., "nomad").
- **Navigation:** Search-driven. The primary interface is a `Ctrl+K` omnibar. No traditional sidebars, headers, or footers. Selecting a search result expands the container directly into the content.
- **Animations:** Subtle, smooth, and elegant (e.g., blur-in, slight scale-down, ripples). **Crucial:** Intro animations must only play *once* on initial page load and must not replay when returning to the search state from a concept view.
- **Clutter-Free:** Eliminate unnecessary iconography (e.g., no magnifying glasses in search bars). Keep the UI focused entirely on typography and content.

## 4. Content Formatting
- **Data Source:** Raw notes are derived from the user's vault (`/home/aman/vaults/context/`).
- **Data Structure:** Content is heavily parsed into typed TypeScript objects (e.g., `src/data/*.ts`), breaking large markdown chapters into atomic `Concept` blocks.
- **Micro-Explanations:** Avoid walls of text. Use short, punchy sentences.
- **Immediate Application:** Every concept must be tied directly to its application in actual JEE Previous Year Questions (PYQs).
- **LaTeX:** Use standard delimiters (`$$...$$` for block, `$...$` for inline) and ensure compatibility with the custom KaTeX renderer.

## 5. Agent Orchestration & Delegation
To optimize context limits and processing power, labor must be divided:
- **Main Agent (Orchestrator):** Handles architecture, design decisions, CSS/UI tuning, routing, and high-level reasoning.
- **Subagents (Token-Heavy Workers):** Use subagents (like Gemini Pro) via `invoke_subagent` to handle token-heavy tasks. This includes reading massive vault markdown files, extracting data, formatting it into JSON/TypeScript arrays, and performing bulk repetitive code transformations. *Never waste the Main Agent's processing power on rote data entry.*

## 6. Execution Protocol
1. **Verify Aesthetic:** Before adding any UI element, ensure it adheres to the strict B&W minimal aesthetic.
2. **Optimize Interactivity:** Use React only where interactive state is required (like the search bar). Let Astro handle the static delivery.
3. **Protect the Router:** Ensure the transition between the search view and the expanded concept view remains seamless and state-driven without hard page reloads where possible.
4. **ask questions:** never make blunt assumption always ask user to clarify via the `question tool` unless explicitly told to "not ask questions" 
