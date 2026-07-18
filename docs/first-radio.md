# Your First Radio

This walkthrough uses the bundled `default-radio` tier and works for both Free and Pro.

## 1. Add one music file

Copy a ready-to-use OGG Vorbis track into the edition's `tracks/` folder:

```text
plugins/ProximityRadioFree/tracks/lobby-theme.ogg
```

or:

```text
plugins/ProximityRadioPro/tracks/lobby-theme.ogg
```

Use OGG for the first test because it does not need FFmpeg. MP3, WAV, FLAC, M4A, AAC, Opus, WMA, AIFF, and AIF are converted when `/radio zip` runs.

## 2. Build the resource pack

Run this command as an operator or from the console:

```text
/radio zip
```

A successful build creates:

```text
plugins/<edition>/resourcepack/resourcepack.zip
```

The command also creates `tracks.yml`. Track IDs come from normalized filenames, so `lobby-theme.ogg` becomes `lobby_theme`.

## 3. Make the ZIP reachable

Choose one hosting mode in `config.yml`.

=== "External hosting"

    Upload `resourcepack.zip` to a web host that returns the ZIP directly, then configure:

    ```yaml
    resource-pack:
      hosting-mode: EXTERNAL
      external:
        url: "https://cdn.example.com/minecraft/resourcepack.zip"
    ```

=== "Built-in hosting"

    Let the plugin serve the file and provide the public address players can reach:

    ```yaml
    resource-pack:
      hosting-mode: BUILTIN
      builtin:
        port: 8123
        public-url: "https://radio.example.com/resourcepack.zip"
    ```

    The `port` is where the plugin listens locally. The `public-url` is the address sent to players. A reverse proxy or port forwarding is normally required for a public server.

Apply changes:

```text
/radio reload
```

## 4. Give and place the radio

```text
/radio give YourPlayerName default-radio 1
```

Place the radio head on a valid block. Right-click it to open the control menu, select the track, and press play.

## 5. Verify a vanilla client

Join without the optional mod and accept the server resource pack. Walk away from the radio and confirm that volume changes with distance.

!!! note "Required pack grace period"
    By default, a player who declines the required pack or whose download fails is given 20 seconds before being disconnected. Change `resource-pack.required-kick-delay-seconds` if needed.

## 6. Optional client mod

Install [Proximity Radio Client](https://modrinth.com/mod/proximity-radio-client) to test exact synchronization, seeking, pause, and resume. Vanilla and modded players can use the same radio.
