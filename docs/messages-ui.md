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

The command feedback for the two player alert preferences is configurable through `desync-alert-enabled`, `desync-alert-disabled`, `sync-alert-enabled`, and `sync-alert-disabled`. Their invalid-usage messages use `desync-alert-usage` and `sync-alert-usage`.

Synchronization chat text continues to use the `vanilla-*` message entries. Disabling an alert category for a tier or player suppresses only the matching chat output; it does not change radio-menu or action-bar synchronization information.

## Resource-pack disconnect text

The normal resource-pack prompt, success notification, and disconnect messages remain configurable. The 20-second default grace period is controlled by `config.yml`, not `messages.yml`.

When ItemsAdder integration is active, `zip-itemsadder-exported`, `zip-itemsadder-rebuild-started`, and `force-itemsadder-managed` control the administrator instructions shown after exporting or requesting a resend. ItemsAdder controls the actual decline and download-failure kick text while pack delivery is delegated.
