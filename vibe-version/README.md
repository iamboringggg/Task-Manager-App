# Vibe Version

This folder contains the task manager app built using a vibe coding tool.

**Tool used:** Single-file HTML/CSS/JS build (simulating one-shot vibe tool output — Lovable / v0 / Google AI Studio Build)
**Time to generate:** ~2 min
**Prompt used:** "Build a clean task manager: add a task with an input + Add button or Enter key, click a task to toggle complete (strikethrough), filter by All / Active / Completed, and show a 'X tasks remaining' count at the bottom. Single HTML file, no persistence."

## Notes

- Generated as a **single `index.html`** file with inline CSS and JS — typical of one-shot vibe tool output.
- Everything (styles, logic, markup) lives in one 300+ line file. Easy to preview, harder to navigate.
- The tool produced a gradient hero style and checkbox styling without being asked — extra decisions made for me.
- Filter state, task list, and rendering are all mixed in one `render()` function inside one file.
- No manual edits after generation (per assignment rules).

## File count: 1