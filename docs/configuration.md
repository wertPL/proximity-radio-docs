# Main Configuration

The main `config.yml` controls server-wide scanning, resource-pack delivery, conversion, client support, and integrations. Run `/radio reload` after editing it.

## Listener and hologram tasks

```yaml
listener-scan-interval-ticks: 10
hologram-update-interval-ticks: 20
disabled-worlds: []
```

| Option | Meaning |
| --- | --- |
| `listener-scan-interval-ticks` | How often the plugin recalculates nearby listeners. Minimum: 2 ticks. |
| `hologram-update-interval-ticks` | Global maximum refresh rate for radio holograms. Minimum: 5 ticks. |
| `disabled-worlds` | World names where radios cannot be placed or played. |

Lower intervals react faster but run the task more often. Start with the default values and change them only if the server needs different timing.

## Resource pack

```yaml
resource-pack:
  required: true
  required-kick-delay-seconds: 20
  send-on-join: true
  join-delay-ticks: 20
  notify-on-load: false
  hosting-mode: EXTERNAL
  builtin:
    port: 8123
    public-url: "http://127.0.0.1:8123/resourcepack.zip"
  external:
    url: "https://example.com/resourcepack.zip"
```

- `required` controls whether refusal or failure eventually disconnects the player.
- `required-kick-delay-seconds` provides download time before that disconnect. Default: 20 seconds.
- `send-on-join` sends the current pack after a player joins.
- `join-delay-ticks` delays that offer after login.
- `notify-on-load` sends the configurable success message.
- `hosting-mode` accepts `BUILTIN` or `EXTERNAL`.

See [Tracks and Resource Pack](audio-resource-pack.md) for hosting setup.

## Audio conversion

```yaml
audio:
  supported-input-formats: [ogg, mp3, wav, flac, m4a, aac, opus, wma, aiff, aif]
  channels: 1
  sample-rate: 44100
  vorbis-quality: 5
  cache-converted-audio: true
```

Conversion settings apply to new output files. To rebuild every track, disable the cache for one build or stop the server and clear `cache/converted/`.

!!! warning
    Do not delete the original files from `tracks/` and do not edit generated OGG files while `/radio zip` is running.

## Client support

```yaml
client-mod:
  enabled: true
```

This allows the optional client mod to connect. When it is `false`, every player uses vanilla resource-pack playback.

## Integrations

```yaml
integrations:
  worldguard:
    enabled: true
    admin-bypass: true
  placeholderapi:
    enabled: true
```

These options have no effect when the corresponding plugin is not installed. WorldGuard flags are registered during plugin loading, so a full restart is safer than a plugin-manager hot reload after installing WorldGuard.

## Debug logging

```yaml
debug: false
```

Leave this disabled unless you are checking a problem. Debug mode writes extra playback and integration details to the console.

## Safe reload procedure

1. Make a backup before large changes.
2. Edit YAML with spaces, never tabs.
3. Run `/radio reload`.
4. Check the console for YAML or tier errors.
5. Run `/radio diagnose` if playback or hosting is still unclear.
6. Run `/radio zip` separately when audio or sound distance data changed.
