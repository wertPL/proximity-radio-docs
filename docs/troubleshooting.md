# Troubleshooting

Start with:

```text
/radio diagnose
```

It reports the Paper and Java versions, loaded tier and track counts, placed radios, FFmpeg/FFprobe locations, integrations, HTTP server status, current pack file, hash, size, URL, and readability.

## Players do not receive the pack

Check:

1. `resource-pack.send-on-join` is `true`, or run `/radio force <player>`.
2. A pack has been built with `/radio zip`.
3. The configured URL is not still `example.com`.
4. Opening the URL downloads the ZIP directly.
5. The SHA-1 and URL shown by `/radio diagnose` match the current file.
6. A proxy or host is not caching an older ZIP.

## Players are disconnected too early

The default grace period is 20 seconds:

```yaml
resource-pack:
  required-kick-delay-seconds: 20
```

Increase it for slow hosting. Setting it to `0` makes failure immediate.

## Built-in server works only locally

`127.0.0.1` is local to each player's computer. Configure a public address and expose the built-in TCP port through your firewall, NAT, hosting panel, or reverse proxy.

The HTTP port is unrelated to the Simple Voice Chat UDP port.

## FFmpeg or FFprobe failed

- OGG-only libraries do not need external tools.
- Verify both tools exist in the plugin `tools/` folder or server PATH.
- On Linux, add executable permission.
- Check whether the hosting provider blocks downloaded executables or child processes.
- Temporarily disable `audio.cache-converted-audio` when investigating stale conversion output.

## A track is missing

- Confirm its extension appears in `audio.supported-input-formats`.
- Run `/radio zip`, not only `/radio reload`.
- Check conversion errors in the console.
- Check the tier's `playback.allowed-tracks` list.
- In Free, confirm the server has no more than 12 source tracks and that this track is no longer than six minutes.

## A custom tier is ignored

- Free ignores custom tiers and loads only `default-radio` and `admin-radio`.
- In Pro, validate the filename, YAML indentation, unique `id`, and required sections.
- Tier IDs must start with a lowercase letter or digit and contain only lowercase letters, digits, `_`, and `-`.
- Run `/radio reload` and inspect the console.

## Vanilla listener joins silently

The tier may use `WAIT_FOR_SYNC`. That player will begin at the next full track start because vanilla sounds cannot seek into the middle of an active track.

Use `RESTART_TRACK` if a joining vanilla player should restart playback for everyone, or `PLAY_FROM_START` for a temporary per-listener start.

## The client mod is not detected

1. Confirm `client-mod.enabled: true`.
2. Install the client build matching the Minecraft and protocol version.
3. Reconnect fully; do not use a plugin hot reload.
4. Run `/radio status`.
5. Look for an incompatible-protocol warning in the console.

## One radio affects another

Rebuild the resource pack with `/radio zip`. Current builds generate separate sound channels per placed radio.

## YAML reload fails

- Use spaces, never tab characters.
- Quote strings containing `:`, `#`, `{}`, or MiniMessage when in doubt.
- Restore the last working file from backup.
- Compare the damaged file with the embedded defaults from the plugin JAR.
