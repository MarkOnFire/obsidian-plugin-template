# AGENTS.md

This file provides guidance to all AI agents (Claude, Codex, DeepSeek, etc.) when working with code in this repository.

## Agent Guidance

This is an Obsidian plugin. For significant implementation work (new features, refactoring, bug fixes), invoke the `obsidian-extension-developer` agent to ensure consistent patterns and Obsidian API best practices.

## Repository Overview

This is a minimal, production-ready template for building Obsidian plugins with modern JavaScript tooling. New plugins should be created by forking this template.

## Development Commands

- `npm run dev` - Watch mode, rebuilds on changes
- `npm run build` - Production build
- `./deploy.sh` - Deploy to test vault
- `./deploy.sh --prod` - Deploy to production vault
- `./deploy.sh --both` - Deploy to both vaults
- `./deploy.sh --setup` - First-time vault path configuration

## Architecture

```
src/
└── main.js          # Plugin entry point (extends Obsidian's Plugin class)
styles.css           # Plugin styles (optional)
manifest.json        # Obsidian plugin manifest (id, name, version, minAppVersion)
esbuild.config.mjs   # Build configuration
deploy.sh            # Vault deployment script
```

## Key Conventions

1. **Plugin Lifecycle**: Implement `onload()` for setup, `onunload()` for cleanup
2. **Settings**: Use `loadData()`/`saveData()` for persistence, extend `PluginSettingTab` for UI
3. **Commands**: Register via `this.addCommand()` with unique IDs
4. **CORS**: Use Obsidian's `requestUrl` instead of `fetch` for external API calls
5. **Version Compatibility**: Update `versions.json` when using newer Obsidian APIs

## Commit Conventions

This project follows workspace-wide commit conventions with agent attribution.

**See**: `/Users/mriechers/Developer/the-lodge/conventions/COMMIT_CONVENTIONS.md`

**Quick Reference**: AI-generated commits should include `[Agent: <name>]` after the subject line for tracking purposes.

Example:
```
feat: Add ribbon icon for quick access

[Agent: Main Assistant]

Added clickable ribbon icon that triggers the main command,
providing faster access than command palette.
```
