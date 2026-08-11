# Troubleshooting

Start with:

```text
/radio diagnose
```

It reports the Paper and Java versions, loaded tier and track counts, placed radios, FFmpeg/FFprobe locations, integrations, HTTP server status, current pack file, hash, size, URL, and readability.

## Players do not receive the pack

Without ItemsAdder delegation, check:

1. `resource-pack.send-on-join` is `true`, or run `/radio force <player>`.
2. A pack has been built with `/radio zip`.
3. The configured URL is not still `example.com`.
4. Opening the URL downloads the ZIP directly.
5. The SHA-1 and URL shown by `/radio diagnose` match the current file.
6. A proxy or host is not caching an older ZIP.

With ItemsAdder delegation, check:

1. `/radio diagnose` reports `ItemsAdder pack delivery: DELEGATED`.
2. `/radio zip` exported `assets/proximityradio` into ItemsAdder's `contents/proximityradio` folder.
3. `/iazip` completed after the latest `/radio zip`.
4. ItemsAdder is configured to apply its pack to joining players.
5. `/iatexture <player>` resends the combined pack.
6. The ItemsAdder self-host URL or external-host URL downloads the current `generated.zip`.

See [Hosting with ItemsAdder](itemsadder-hosting.md) for the complete command order and hosting examples.

## Players are disconnected too early

The default grace period is 20 seconds:

```yaml
resource-pack:
  required-kick-delay-seconds: 20
```

Increase it for slow hosting. Setting it to `0` makes failure immediate.

When ItemsAdder owns delivery, this Proximity Radio delay is ignored. Configure ItemsAdder's `kick-player-on-decline` and `kick-player-on-fail` behavior instead.

## ItemsAdder works but radio sounds are missing

1. Run `/radio zip` before `/iazip`.
2. Confirm `plugins/ItemsAdder/contents/proximityradio/resourcepack/assets/proximityradio/sounds.json` exists.
3. Check that the track OGG files exist below the exported `sounds/tracks/` folder.
4. Run `/iazip`, then `/iatexture <player>`.
5. For external hosting, upload the newly generated ItemsAdder ZIP and avoid a stale cached URL.

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
2. Install the client build made for your Minecraft version.
3. Reconnect fully; do not use a plugin hot reload.
4. Run `/radio status`.
5. Check the console for a client compatibility warning.

## One radio affects another

Rebuild the resource pack with `/radio zip`. Current builds generate separate sound channels per placed radio.

## YAML reload fails

- Use spaces, never tab characters.
- Quote strings containing `:`, `#`, `{}`, or MiniMessage when in doubt.
- Restore the last working file from backup.
- Compare the damaged file with the embedded defaults from the plugin JAR.
