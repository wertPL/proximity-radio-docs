# Tracks and Resource Pack

`/radio zip` is the center of the audio workflow. It scans source files, converts when necessary, reads metadata, rebuilds the track registry, and creates a deterministic Minecraft resource pack.

## Supported source formats

The default scan list is:

```yaml
audio:
  supported-input-formats: [ogg, mp3, wav, flac, m4a, aac, opus, wma, aiff, aif]
```

Ready-to-use OGG Vorbis files are copied and inspected directly. Other formats are converted to OGG with FFmpeg.

## Track IDs and metadata

The filename becomes a lowercase track ID:

| Source file | Track ID |
| --- | --- |
| `Lobby Theme.ogg` | `lobby_theme` |
| `DJ-Test #2.mp3` | `dj_test_2` |
| `Café.wav` | `cafe` |

Embedded title and artist metadata is used when available. Otherwise, the original filename becomes the title. Duplicate normalized IDs receive numeric suffixes.

The generated `tracks.yml` is a registry, not the source of truth for new files. Add or remove audio in `tracks/`, then run `/radio zip` again.

## Conversion settings

```yaml
audio:
  channels: 1
  sample-rate: 44100
  vorbis-quality: 5
  cache-converted-audio: true
```

- `channels: 1` produces mono audio and is recommended for positional sound.
- `sample-rate: 44100` is a reliable default for Minecraft playback.
- `vorbis-quality` accepts `0` through `10`; higher values increase quality and file size.
- `cache-converted-audio` reuses OGG output when the source file has not changed.

## FFmpeg and FFprobe

If a non-OGG source requires conversion, the plugin searches the server PATH and common installation locations. When tools are unavailable, it attempts to download the correct Windows x64, Linux x64, or Linux ARM64 build into the plugin's `tools/` directory.

If automatic installation is blocked by the hosting provider:

1. Download FFmpeg and FFprobe from [ffmpeg.org](https://ffmpeg.org/download.html).
2. Put both executables in `plugins/<edition>/tools/`.
3. On Linux, ensure both files are executable.
4. Run `/radio zip` again.

OGG-only libraries do not require FFmpeg or FFprobe.

## What the generated pack contains

```text
resourcepack.zip
├─ pack.mcmeta
├─ pack.png
└─ assets/proximityradio/
   ├─ sounds.json
   └─ sounds/tracks/*.ogg
```

The pack includes separate generated sound channels for placed radios. This prevents stopping one nearby radio from stopping another radio that happens to play the same track.

Run `/radio zip` again after:

- adding, replacing, renaming, or deleting tracks;
- changing maximum radio distances;
- updating from a build that changes generated sound definitions.

## Hosting modes

### External

`EXTERNAL` is the default. Upload the ZIP to a host that provides a direct HTTP or HTTPS response:

```yaml
resource-pack:
  hosting-mode: EXTERNAL
  external:
    url: "https://cdn.example.com/resourcepack.zip"
```

Links to a web page, cloud-drive preview, or permission screen will not work. The URL must return the ZIP itself.

### Built-in

```yaml
resource-pack:
  hosting-mode: BUILTIN
  builtin:
    port: 8123
    public-url: "https://radio.example.com/resourcepack.zip"
```

The plugin listens on `port`, while `public-url` is sent to players. The plugin cannot discover your public domain, reverse proxy, firewall, or NAT mapping.

!!! warning "Local addresses"
    `127.0.0.1` works only when the Minecraft client runs on the server computer. It is not a public address.

## Required pack behavior

```yaml
resource-pack:
  required: true
  required-kick-delay-seconds: 20
  send-on-join: true
  join-delay-ticks: 20
  notify-on-load: false
```

Vanilla radio playback waits until Minecraft confirms that the pack loaded. When the pack is required, refusal and download failure use the configured grace period before disconnecting the player.

## Free edition limits

- No more than 12 supported source files may be present when `/radio zip` runs.
- A track longer than six minutes is converted or inspected, then omitted from the registry and ZIP.
- The administrator running the command receives a hardcoded English explanation and a Pro link.

