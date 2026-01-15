# Obsidian Plugin Template

> **ARCHIVED**: This template is deprecated as of January 2026. New Obsidian plugins should be started using the official [obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin) and graduated from brainstorming via `the-lodge/conventions/PROJECT_GRADUATION.md`.
>
> The build tooling and deploy script here may still be useful as reference.

---

A minimal, production-ready template for building Obsidian plugins with modern JavaScript tooling.

## Features

- **esbuild** for fast, optimized builds
- **GitHub Actions CI** for automated build verification
- **Settings tab** with example configuration
- **Ribbon icon** and **command** examples
- Clean project structure following Obsidian best practices

## Quick Start

### 1. Create Your Plugin Repository

Click "Use this template" on GitHub, or clone and reinitialize:

```bash
git clone https://github.com/MarkOnFire/obsidian-plugin-template.git my-plugin
cd my-plugin
rm -rf .git
git init
```

### 2. Customize Plugin Metadata

Edit `manifest.json`:

```json
{
    "id": "my-plugin",
    "name": "My Plugin",
    "version": "1.0.0",
    "description": "Description of what your plugin does",
    "author": "Your Name",
    "authorUrl": "https://github.com/yourusername"
}
```

Update `package.json` with matching name and description.

### 3. Install Dependencies

```bash
npm install
```

### 4. Develop

```bash
# Watch mode - rebuilds on changes
npm run dev

# Production build
npm run build
```

### 5. Deploy and Test

Use the included deploy script to copy your plugin to Obsidian vaults.

**First-time setup** - configure your vault paths (stored in `.env.local`, which is gitignored):
```bash
./deploy.sh --setup
```

**Deploy your plugin**:
```bash
# Deploy to test vault (default)
./deploy.sh

# Deploy to production vault
./deploy.sh --prod

# Deploy to both vaults
./deploy.sh --both
```

After deployment:
1. In Obsidian, go to Settings → Community Plugins
2. Find your plugin and toggle it off then on
3. Or restart Obsidian to reload all plugins

**Alternative**: Use symlinks for faster development:
```bash
ln -s /path/to/my-plugin/main.js /path/to/vault/.obsidian/plugins/my-plugin/main.js
```

## Project Structure

```
my-plugin/
├── src/
│   └── main.js          # Plugin entry point
├── styles.css           # Plugin styles (optional)
├── manifest.json        # Obsidian plugin manifest
├── package.json         # npm configuration
├── esbuild.config.mjs   # Build configuration
├── deploy.sh            # Vault deployment script
└── .github/
    └── workflows/
        └── build.yml    # CI workflow
```

## Plugin Development Guide

### Adding Commands

```javascript
this.addCommand({
    id: 'my-command',
    name: 'My Command',
    callback: () => {
        // Command logic here
    }
});
```

### Adding Settings

1. Define defaults:
```javascript
const DEFAULT_SETTINGS = {
    mySetting: 'default value'
};
```

2. Use in your plugin:
```javascript
// Load
this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());

// Save
await this.saveData(this.settings);
```

### Using Obsidian APIs

Common imports from the `obsidian` module:

```javascript
const {
    Plugin,           // Base class for plugins
    Notice,           // Toast notifications
    Modal,            // Popup dialogs
    PluginSettingTab, // Settings page
    Setting,          // Setting UI components
    MarkdownView,     // Active editor access
    TFile,            // File operations
    TFolder           // Folder operations
} = require('obsidian');
```

### Accessing the Vault

```javascript
// Get current file
const activeFile = this.app.workspace.getActiveFile();

// Read file content
const content = await this.app.vault.read(file);

// Modify file
await this.app.vault.modify(file, newContent);

// Create file
await this.app.vault.create('path/to/file.md', content);
```

## CI/CD

The included GitHub Actions workflow:

- Runs on push/PR to main/master branches
- Installs dependencies with `npm ci`
- Builds the plugin with `npm run build`
- Verifies `main.js` and `manifest.json` exist

## Publishing to Community Plugins

When ready to publish:

1. Ensure your plugin follows [Obsidian's guidelines](https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines)
2. Add a `versions.json` file mapping plugin versions to minimum Obsidian versions
3. Create a GitHub release with `main.js`, `manifest.json`, and `styles.css`
4. Submit a PR to [obsidian-releases](https://github.com/obsidianmd/obsidian-releases)

## Resources

- [Obsidian Plugin Developer Docs](https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin)
- [Obsidian API Reference](https://docs.obsidian.md/Reference/TypeScript+API)
- [Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin)

## License

MIT License - see [LICENSE](LICENSE) for details.
