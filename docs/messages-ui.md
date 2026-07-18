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

## Native radio interface

The interface adapts to:

- whether the radio is playing, paused, or stopped;
- tier-enabled controls;
- vanilla or modded client capabilities;
- synchronized or desynchronized listeners;
- current loop, shuffle, queue, distance, and volume state.

Changing one button label does not change its underlying permission or tier rule.

## Free edition upgrade notices

The Free messages shown when an administrator:

- attempts to create a custom tier;
- exceeds the 12-track pack limit; or
- adds a track longer than six minutes

are stored in the plugin code, not in `messages.yml`. Only administrators receive them.

## Resource-pack disconnect text

The normal resource-pack prompt, success notification, and disconnect messages remain configurable. The 20-second default grace period is controlled by `config.yml`, not `messages.yml`.
