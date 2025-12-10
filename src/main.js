const { Plugin, Notice, PluginSettingTab, Setting } = require('obsidian');

// Default settings
const DEFAULT_SETTINGS = {
    exampleSetting: 'default value'
};

class MyPlugin extends Plugin {
    async onload() {
        console.log('Loading My Plugin');

        // Load settings
        await this.loadSettings();

        // Add ribbon icon
        this.addRibbonIcon('dice', 'My Plugin', () => {
            new Notice('Hello from My Plugin!');
        });

        // Add command
        this.addCommand({
            id: 'my-command',
            name: 'My Command',
            callback: () => {
                new Notice('Command executed!');
            }
        });

        // Add settings tab
        this.addSettingTab(new MyPluginSettingTab(this.app, this));
    }

    onunload() {
        console.log('Unloading My Plugin');
    }

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }
}

class MyPluginSettingTab extends PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display() {
        const { containerEl } = this;
        containerEl.empty();

        containerEl.createEl('h2', { text: 'My Plugin Settings' });

        new Setting(containerEl)
            .setName('Example Setting')
            .setDesc('Description of the setting')
            .addText(text => text
                .setPlaceholder('Enter value')
                .setValue(this.plugin.settings.exampleSetting)
                .onChange(async (value) => {
                    this.plugin.settings.exampleSetting = value;
                    await this.plugin.saveSettings();
                }));
    }
}

module.exports = MyPlugin;
