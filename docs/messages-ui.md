# Messages and UI

`messages.yml` contains player-facing chat, command, action-bar, hologram-related, and native-dialog text. MiniMessage formatting is supported.

## Reloading messages

1. Edit `plugins/<edition>/messages.yml`.
2. Keep YAML indentation and quotation marks valid.
3. Run `/radio reload`.

## MiniMessage example

```yaml
prefix: "<gradient:#57ed91:#c9ff72><bold>Proximity Radio</bold></gradient> <dark_gray>»</dark_gray> "
radio-placed: "<green>Placed <radio>.</green>"
action-bar-now-playing: "<green>♫</green> <white><track></white> <gray>by <artist></gray>"
```

Each message has its own placeholders. Keep the placeholders from the original line unless that value should no longer be shown.

## Resource-pack disconnect text

The normal resource-pack prompt, success notification, and disconnect messages remain configurable. The 20-second default grace period is controlled by `config.yml`, not `messages.yml`.
