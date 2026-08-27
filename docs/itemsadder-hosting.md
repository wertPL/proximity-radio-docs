# Hosting with ItemsAdder

Both Proximity Radio Free and Pro can add their generated sounds to the ItemsAdder resource pack. ItemsAdder then builds, hosts, and sends one combined vanilla pack instead of competing with a second pack from Proximity Radio.

## Which plugin hosts what?

| Client path | Pack owner | Purpose |
| --- | --- | --- |
| Every player | ItemsAdder | Combined Minecraft pack containing ItemsAdder assets and `assets/proximityradio` sounds. |
| Optional Proximity Radio Client | ItemsAdder | The mod automatically downloads the same combined ZIP and extracts the required `assets/proximityradio` track. |

If the optional client mod is disabled, only the ItemsAdder host needs to be public. Menus, permissions, placed radios, holograms, and controls work independently of the hosting method.

## 1. Install both plugins before the first start

Install one Proximity Radio edition and ItemsAdder, then start the server normally. When Proximity Radio generates its first `config.yml` and detects ItemsAdder, it enables these two options automatically:

```yaml
integrations:
  itemsadder:
    merge-resource-pack: true
    delegate-resource-pack-delivery: true
    run-iazip-after-radio-zip: false
```

If ItemsAdder was installed after Proximity Radio had already generated its configuration, set the first two options to `true` manually and run `/radio reload`.

- `merge-resource-pack` exports the radio namespace into ItemsAdder's persistent content source.
- `delegate-resource-pack-delivery` stops Proximity Radio from sending a competing vanilla pack.
- `run-iazip-after-radio-zip` controls whether Proximity Radio runs `/iazip` automatically. Its default is always `false`.

## 2. Choose an ItemsAdder hosting method

Only one ItemsAdder hosting method should be enabled. The exact generated comments can vary between ItemsAdder releases, so retain the surrounding structure from your own `plugins/ItemsAdder/config.yml`.

### Recommended: ItemsAdder self-host

Self-hosting rebuilds and serves the combined pack directly from the Minecraft server. Your hosting provider must give you an additional public TCP port; this is normally different from the Minecraft server port.

A current ItemsAdder v4-style configuration looks like this:

```yaml
resource-pack:
  kick-player-on-decline: true
  kick-player-on-fail: true

  hosting:
    self-host:
      enabled: true
      server-ip: "203.0.113.10"
      pack-port: 8163
    external-host:
      enabled: false
```

Replace the example IP and port with the public address allocated to your server. Do not use `127.0.0.1` on a public server. Keep ItemsAdder's generated automatic pack-application option enabled; its exact key can differ between ItemsAdder releases. After saving the configuration, run `/iazip` and confirm that ItemsAdder prints a public resource-pack URL.

See the official [ItemsAdder self-hosting guide](https://itemsadder.devs.beer/plugin-usage/plugin-configuration/resourcepack-hosting/self-hosting) for domain, port, firewall, and optional Cloudflare instructions.

### Alternative: external hosting

If you cannot expose an additional port:

1. Run `/radio zip`.
2. Run `/iazip`.
3. Upload `plugins/ItemsAdder/output/generated.zip` to a host that returns the ZIP directly.
4. Enable ItemsAdder's `external-host` and set its direct URL.
5. Run `/iareload` after changing the URL.
6. Run `/iatexture all` to resend the updated pack.

```yaml
resource-pack:
  hosting:
    self-host:
      enabled: false
    external-host:
      enabled: true
      url: "https://cdn.example.com/generated-2026-08-11.zip"
```

Use a new filename or another cache-busting strategy when replacing an externally hosted pack. A preview page, permission screen, or share page is not a valid resource-pack URL. ItemsAdder documents available providers in its [resource-pack hosting guide](https://itemsadder.devs.beer/plugin-usage/resourcepack-hosting).

## 3. Build the combined pack

Add or change tracks in the Proximity Radio `tracks/` folder, then use this order:

```text
/radio zip
/iazip
/iatexture all
```

`/radio zip` builds the standalone radio pack and exports only `assets/proximityradio` to:

```text
plugins/ItemsAdder/contents/proximityradio/resourcepack/assets/proximityradio/
```

`/iazip` reads that source and creates the combined ItemsAdder pack. This matches ItemsAdder's documented workflow for [merging another plugin's resource pack](https://itemsadder.devs.beer/adding-content/merge-resourcepacks).

If `run-iazip-after-radio-zip` is `true`, the second command is dispatched automatically. External hosting still requires uploading the new `generated.zip` when the chosen provider does not upload it automatically.

## 4. Optional client mod audio source

No second audio host is required. When both `merge-resource-pack` and `delegate-resource-pack-delivery` are active, Proximity Radio obtains the current pack URL from the official ItemsAdder API. The client mod downloads that combined ZIP and extracts the requested `assets/proximityradio/sounds/tracks/<track>.ogg` file.

ItemsAdder's optional URL hash is retained as the mod cache version but removed from the HTTP request itself. Rebuilding and republishing the ItemsAdder pack can therefore invalidate cached track audio without creating a second host.

The `resource-pack.hosting-mode` URL configured in Proximity Radio remains a fallback. It is used when delivery is not delegated or ItemsAdder has not published a valid HTTP/HTTPS pack URL yet. A warning is written to the server log when this fallback is needed.

If the client mod is disabled, no additional action is required:

```yaml
client-mod:
  enabled: false
```

## 5. Verify the setup

1. Run `/radio diagnose` and confirm:
    - `ItemsAdder pack merge: CONNECTED`;
    - `ItemsAdder pack delivery: DELEGATED`.
2. Confirm that `sounds.json` exists in the exported ItemsAdder folder.
3. Run `/iazip` without resource-pack errors.
4. Use `/iatexture <player>` and verify ItemsAdder models plus radio audio on a vanilla client.
5. If the optional mod is enabled, reconnect with the mod and verify timestamped playback separately.

While delivery is delegated, `/radio force all` and `/radio force <player>` do not send a second pack. They show the corresponding `/iatexture all` or `/iatexture <player>` command.

## Required-pack and kick behavior

ItemsAdder owns pack delivery, so its settings control rejection and download-failure policy for players with and without the optional mod:

```yaml
resource-pack:
  kick-player-on-decline: true
  kick-player-on-fail: true
```

Proximity Radio does not schedule an additional kick while delivery is delegated. If ItemsAdder allows a player to remain without the pack, a vanilla player cannot receive radio sounds until the combined pack loads. A modded player can still receive separate radio audio, but ItemsAdder textures and models remain unavailable.

## Updating tracks later

Repeat the build and publishing sequence after adding, replacing, renaming, or deleting a track, or after changing a tier's maximum sound distance:

```text
/radio zip -> /iazip -> publish if external -> /iatexture all
```

Running only `/iazip` does not rebuild Proximity Radio's track files. Running only `/radio zip` exports the source files but does not publish a new combined ItemsAdder pack unless automatic `/iazip` is enabled.
