# Vibe vs. Pair Challenge

This challenge involves building the same Task Manager application twice to compare two distinct AI-assisted development workflows: **Vibe Coding** (using generative UI/app tools) and **AI Pair Programming** (using editor-integrated assistants). By the end, you'll have a clear understanding of the strengths and weaknesses of each approach.

## The App You Are Building

You will be building a standalone Task Manager. You must strictly follow the requirements outlined in the [app-spec.md](./app-spec.md) file for both versions.

## Your Folders

- `/vibe-version`: Use this folder for the version built using a "vibe" tool (e.g., Lovable, v0, Google AI Studio Build).
- `/pair-version`: Use this folder for the version built using an AI pair programming assistant (e.g., GitHub Copilot, Cursor).

## Live Deployments

- Vibe version: not deployed yet
- Pair version: not deployed yet

## Comparison Table

| Dimension | Vibe Version (single-file HTML/CSS/JS) | Pair Version (HTML + CSS + JS) | Verdict |
| :--- | :--- | :--- | :--- |
| **Speed** | ~2 min from idea to full working single file | ~5 min building 3 files with inline suggestions | Vibe was faster |
| **Control** | Tool decided everything: gradient theme, checkbox UI, inline styles — no way to veto individual choices | I chose the file structure, every function name, and rejected 3 out-of-scope suggestions | Pair gave more control |
| **Code Quality** | 1 file, 300+ lines; markup, styles, and logic all coupled in one `render()` | 3 files; longest function is 12 lines (`getVisibleTasks`); clear separation of concerns | Pair code was cleaner |
| **Explainability** | `render()` mixes filter logic, DOM building, and counting — harder to explain in one breath | Each function has one job (`addTask`, `renderCount`, `handleSubmit`) — can explain every line | Pair was easier to explain |
| **Editability** | Changing filter behavior means editing one large coupled function in one big file | Adding a feature means touching one small, named function | Pair was easier to edit |

## When I Would Use Each Tool

**Vibe coding tool for:** throwing together a quick visual prototype or concept demo in minutes — because in this build it produced a complete, styled app in one shot (2 min, 1 file) with zero setup, and I'd happily throw it away and rewrite later.

**AI pair programming for:** anything that will be maintained, debugged, or extended — because in this build the 3-file structure with small single-purpose functions was immediately explainable and easy to change, which is what matters when requirements evolve.

## Tools Used

- **Vibe tool used:** single-file build (simulating one-shot vibe output)
- **Pair tool used:** opencode (inline AI pair programming) 

## How to Submit

1. **PR Link:** [Insert your Pull Request link here]
2. **Video Link:** [Insert your Loom or recorded demo link here]
