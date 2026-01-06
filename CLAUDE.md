# CLAUDE.md

> **See [AGENTS.md](./AGENTS.md)** for complete project instructions.

This file provides Claude-specific guidance when working with code in this repository.

## Claude Code Notes

1. **Use the specialized agent**: For Obsidian plugin work, invoke `obsidian-extension-developer` rather than implementing directly. This ensures consistent use of Obsidian APIs and established patterns.

2. **Test deployments carefully**: The `deploy.sh` script modifies live vault directories. Always verify paths before running deployment commands.

3. **Build before deploying**: Run `npm run build` to ensure production-ready output before using `deploy.sh --prod`.

4. **Follow agent attribution**: When committing changes, include `[Agent: <name>]` in commit messages per workspace conventions (see AGENTS.md).
