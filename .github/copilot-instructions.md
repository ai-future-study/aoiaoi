<!-- GitHub Copilot / AI agent instructions for this repo -->
# Copilot instructions — 透明な響き (local Vite React site)

Short guidance for AI coding agents working on this repository.

- Purpose: a small Vite + React site (no backend) that renders a calming landing site and two detail pages (MunayKi, Retreat) plus a small AI-powered "reflection" widget.

Key files and responsibilities
- `App.tsx`: single-page view controller. The app uses a local view state (`'home' | 'munayki' | 'retreat' | 'profile'`) and scroll-to-anchors. Do not replace this routing with a router unless you update `Navigation` and anchor handling consistently.
- `components/Navigation.tsx`: menu + mobile overlay. Uses `onNavigate(href)` callback and prevents body scroll when mobile menu is open.
- `components/Reflection.tsx` -> calls `services/geminiService.generateReflection()` and expects a simple string result. Keep UI contract (LoadingState, response string) intact.
- `services/geminiService.ts`: central place for LLM prompt and API client usage (@google/genai). The API key is read from `process.env.API_KEY`. Vite maps `GEMINI_API_KEY` -> `process.env.API_KEY` in `vite.config.ts` (see `define`).

Developer workflows / environment
- Run locally: `npm install` then `npm run dev` (Vite). See `README.md`.
- The Gemini/GenAI key: set `GEMINI_API_KEY` in `.env.local` (or environment). `vite.config.ts` exposes it as `process.env.API_KEY` at build time.
- When editing `services/geminiService.ts`, keep prompt structure and error fallbacks consistent (UI expects readable Japanese strings and short outputs). Example model: `'gemini-2.5-flash'` is used in the repo.

Project conventions and patterns
- Presentational-first components: most `components/*.tsx` are React function components with props like `onBack` and `onNavigate`. Keep prop-based navigation instead of global side-effects.
- Styling: Tailwind utility classes plus inline SVGs and small CSS blocks in components. Avoid global CSS changes that break fine-grained spacing and fonts defined in `index.html`.
- I/O surface: there is no server; external integration is limited to @google/genai (client in `services/`) and external links (Instagram, forms). Changes to LLM usage must remain resilient to missing API key (the code returns user-facing Japanese fallback strings).

Editing & testing hints for agents
- To change LLM behaviour: edit `services/geminiService.ts`. Keep these constraints intact:
  - Read key from `process.env.API_KEY` (vite sets it from `GEMINI_API_KEY`).
  - Return a short Japanese string; UI limits ~80 characters in the prompt comments.
  - On network/error, return a polite Japanese fallback (see current `catch` block).
- UI contract: `Reflection` expects `generateReflection(input)` to return `string`. Avoid changing the function signature without updating `Reflection.tsx` and `types.ts`.
- If you add a new environment variable, update `README.md` and `vite.config.ts`'s `define` mapping.

Safe automated changes
- Small UI tweaks (text, classes, minor layout) are OK. Avoid refactors that replace the single-view state machine in `App.tsx` with a new router unless you update navigation handlers and tests.

References
- Run/start: see `README.md`.
- LLM hook: `services/geminiService.ts` (prompt & model)
- Entry: `index.tsx`, HTML shell: `index.html` (fonts + importmap)
- Navigation contract: `components/Navigation.tsx` and `types.ts` (NavItem / LoadingState)

If anything in these instructions is unclear, ask for the specific file and intended change (e.g., "Change reflection prompt to be more concise"), and include a brief rationale for the change.

— End
