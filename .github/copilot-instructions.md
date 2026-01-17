# Copilot Instructions for saishsolanki.github.io

## Project Overview
This is an interactive terminal-themed portfolio website for a cybersecurity professional. The site simulates a Linux terminal experience where visitors type commands to explore content. It also includes embedded CTF (Capture The Flag) challenges.

## Architecture

### Single-Page Application Structure
- [index.html](../index.html) - Entry point with SEO meta tags, structured data, and hidden CTF flags in HTML comments
- [script.js](../script.js) - Core application logic (~1300 lines): command definitions, terminal emulator, interactive tools
- [style.css](../style.css) - Terminal aesthetics with CSS variables for dark/light theming
- [flag-test.html](../flag-test.html) - Development utility for testing CTF flag validation

### Command System
All terminal commands are defined in the `commands` object in `script.js`. Commands return either:
- **Static HTML strings** with styled content using CSS classes (`success`, `error`, `command-category`)
- **Functions** for dynamic output (e.g., `sudo`, `whoami` show current timestamps)

```javascript
// Pattern for adding new commands:
const commands = {
    mycommand: `<span class="success">Title</span>\nContent here...`,
    dynamic: () => `Current time: ${new Date().toLocaleString()}`
};
```

### CSS Theming System
Colors are managed through CSS custom properties in `:root`. Theme toggle swaps `--var-dark` to `--var-light` variants:
- Primary: `--success` (green), `--error` (red), `--warning` (orange)
- UI: `--background`, `--text`, `--prompt`, `--border`, `--link`

## CTF Challenge Integration
Hidden flags are scattered across the codebase for visitor discovery:

| Location | Flag | Difficulty |
|----------|------|------------|
| HTML comments | `flag{w3lc0me_t0_my_t3rm1n4l}`, `flag{1337_h4x0r_sk1llz}` | Easy |
| CSS comments | `flag{pwn3d_th3_t3rm1n4l}` | Expert |
| `sudo` command output | `flag{sudo_make_me_a_sandwich}` | Easy |
| OSINT (external) | `flag{oscp_certified_hacker}` | Medium |

When modifying flags, update both the source location AND validation logic in `script.js` (search for `checkFlag` or flag strings).

## Key Conventions

### Interactive Elements
Lab tools (`lab` command) include inline HTML inputs/buttons with `onclick` handlers calling global functions:
- `analyzePassword()`, `encryptText()`, `simulatePortScan()`, `checkBase64()`, `checkOsintFlag()`

### Resume Section Pattern
Collapsible sections use `toggleSection('section-id')` with corresponding `<div id="section-id">` blocks.

### Adding New Commands
1. Add entry to `commands` object in `script.js`
2. Document in `help` command's HTML output under appropriate category
3. Use existing CSS classes: `command-category`, `command-description`, `success`, `status-online`

## Development Notes
- **No build step** - Static files served directly
- **LocalStorage** used for: theme preference (`theme`), discovered flags (`discoveredFlags`)
- **External links** use `target="_blank"` pattern
- Test flag validation at [flag-test.html](../flag-test.html) during development
