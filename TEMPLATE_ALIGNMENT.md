# Template Alignment

This document describes the relationship between `obsidian-plugin-template` and `project_template`.

## Relationship

**obsidian-plugin-template = project_template base + Obsidian-specific additions**

This template extends `project_template` with specialized content for Obsidian plugin development.

## Shared Structure (from project_template)

These elements are inherited from the base template:

```
.claude/agents/           # Base agent definitions
.githooks/               # Commit message validation
harness/                 # Long-running development templates
docs/                    # Bootstrap and harness guides
planning/                # Sprint and maintenance tracking
artifacts/               # Diagrams, exports, reports
brainstorming/           # Architecture, features, research
AGENTS.md                # Agent role definitions (extended)
CLAUDE.md                # AI assistant guidance (extended)
```

## Obsidian-Specific Additions

These elements are unique to Obsidian plugin development:

```
src/                     # Plugin source code
  main.js                # Plugin entry point
styles.css               # Plugin styles
manifest.json            # Obsidian plugin manifest
package.json             # npm dependencies
esbuild.config.mjs       # Build configuration
deploy.sh                # Vault deployment script
.github/workflows/       # CI/CD for releases
knowledge/obsidian/      # Obsidian API documentation
LICENSE                  # MIT license
```

## Maintenance

When updating `project_template`:
1. Review changes for applicability to this template
2. Copy updated base files (agents, hooks, harness, docs)
3. Verify Obsidian-specific content is preserved
4. Update this document if structure changes

When updating Obsidian-specific content:
1. Changes stay in this template only
2. Consider if change should propagate to other Obsidian plugins
3. Document significant patterns in `knowledge/obsidian/`

## Version History

- **2026-01-06**: Initial alignment with project_template base structure
