# Pair Version

This folder contains the task manager app built using an AI pair programming assistant.

**Tool used:** opencode (editor-integrated AI pair programming assistant)
**Time to build:** ~5 min
**Suggestions accepted:** ~12 inline suggestions
**Suggestions rejected:** ~3 (e.g., rejected a suggestion to add localStorage persistence, which is out of scope)
**Live URL:** not deployed

## Notes

- Built file-by-file with the AI assisting inline: `index.html`, `styles.css`, `script.js`.
- Chose the file structure and function names myself (`addTask`, `getVisibleTasks`, `renderCount`, `handleSubmit`).
- Logic is split into small single-purpose functions — each under 20 lines, easy to explain and test.
- Rejected out-of-scope suggestions (persistence, extra features) to keep exactly to app-spec.md.
- The AI flagged a11y touches (aria-label, semantic `<form>`/`<nav>`) which I kept.

## File count: 3