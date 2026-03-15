# YARA-X Playground

[![Demo](https://img.shields.io/badge/Open%20Demo-yara--x--playground-2ea44f?logo=googlechrome&logoColor=white)](https://kevinmuoz.github.io/yara-x-playground/)
[![Deploy Pages](https://github.com/kevinmuoz/yara-x-playground/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/kevinmuoz/yara-x-playground/actions/workflows/deploy-pages.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-blue?logo=github)](https://kevinmuoz.github.io/yara-x-playground/)
[![Vercel](https://img.shields.io/badge/Vercel-live-black?logo=vercel)](https://yara-x-playground.vercel.app)
[![WASM Source](https://img.shields.io/badge/WASM%20source-kevinmuoz%2Fyara--x-blue?logo=github)](https://github.com/kevinmuoz/yara-x/tree/feat/wasm-browser-refresh)

Write, format, and run YARA rules directly in the browser using WebAssembly.

A playground that combines [YARA-X](https://github.com/VirusTotal/yara-x), the Rust implementation of YARA, with Monaco Editor and the YARA language server so you can experiment with rules instantly without installing anything.

![YARA-X Playground demo](public/yara_demo.png)

## What you get

- YARA rule editing with Monaco
- syntax highlighting
- language-server features:
  - diagnostics
  - autocompletion
  - hover information
  - go to definition
  - formatting
- sample input as plain text or local file
- rule execution powered by a WebAssembly build of YARA-X
- everything running entirely inside the browser

### Shortcuts

- `Cmd/Ctrl + S` format the current rule
- `Cmd/Ctrl + Shift + F` format the current rule
- `Cmd/Ctrl + Space` trigger autocompletion
- `Cmd/Ctrl + Enter` run the current rule against the current sample

## Quick start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## How it works

The playground uses two WebAssembly builds from the YARA-X repository:

- **engine** (`wasm/wasm-poc/`) — the YARA-X compiler and scanner, compiled to WASM.
- **language server** (`wasm/wasm-ls/`) — the official YARA-X LS running in a Web Worker,
  communicating with Monaco via the Language Server Protocol.

The WASM artifacts are built from a YARA-X fork using the
[`feat/wasm-browser-refresh`](https://github.com/kevinmuoz/yara-x/tree/feat/wasm-browser-refresh)
branch, which restores the browser-facing WASM bindings for the engine and the
in-process language-server worker integration used by this playground.

Automating those builds from the fork, or from upstream-compatible changes,
would be a natural next step.

Both are checked into the repo so the playground works out of the box without a build step.

### Privacy

No analytics, no tracking, no telemetry, no external requests.  
Files you load stay in memory for the duration of the session and go nowhere.

### Built with

- [YARA-X](https://github.com/VirusTotal/yara-x) — Rust · WebAssembly
- [YARA-X Language Server](https://virustotal.github.io/yara-x/blog/introducing-the-yara-language-server/)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Lit](https://lit.dev/)
- [Vite](https://vitejs.dev/)

### License

MIT
