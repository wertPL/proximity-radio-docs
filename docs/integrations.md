# Integrations

Integrations are optional. Proximity Radio starts without them and connects only when the relevant plugin is installed and enabled.

## WorldGuard

Enable the integration in `config.yml`:

```yaml
integrations:
  worldguard:
    enabled: true
    admin-bypass: true
```

The plugin respects normal WorldGuard build permission and registers three state flags:

```text
proximity-radio-place: allow|deny
proximity-radio-use: allow|deny
proximity-radio-break: allow|deny
```

- `proximity-radio-place` controls radio placement.
- `proximity-radio-use` controls menus and radio/listener changes.
- `proximity-radio-break` controls breaking the radio or its supporting block.

Example region setup:

```text
/rg flag spawn proximity-radio-place deny
/rg flag spawn proximity-radio-use allow
/rg flag spawn proximity-radio-break deny
```

With `admin-bypass: true`, holders of the administrative permission can bypass these checks.

## PlaceholderAPI

```yaml
integrations:
  placeholderapi:
    enabled: true
```

Identifier: `proximityradio`

| Placeholder | Result |
| --- | --- |
| `%proximityradio_modded%` | `true` when the player has a compatible client mod. |
| `%proximityradio_nearby%` | `true` when a radio is in range. |
| `%proximityradio_radio_id%` | UUID of the nearby logical radio; Pro connected speakers return the same controller UUID. |
| `%proximityradio_tier%` | Tier ID. |
| `%proximityradio_state%` | `PLAYING` or `STOPPED`. |
| `%proximityradio_track%` | Current track title. |
| `%proximityradio_artist%` | Current artist. |
| `%proximityradio_elapsed%` | Formatted playback time. |
| `%proximityradio_duration%` | Formatted track duration. |
| `%proximityradio_remaining%` | Formatted remaining time. |
| `%proximityradio_listeners%` | Number of nearby listeners. |
| `%proximityradio_volume%` | Shared radio volume. |
| `%proximityradio_private_volume%` | Player's personal volume. |
| `%proximityradio_loop%` | Loop state. |
| `%proximityradio_shuffle%` | Shuffle state. |

Most values are empty when no radio is nearby.

## ItemsAdder resource pack

On the first configuration generation, both Free and Pro enable the ItemsAdder pack integration automatically when ItemsAdder is detected. If ItemsAdder is installed later, enable `merge-resource-pack` and `delegate-resource-pack-delivery` manually.

`/radio zip` exports the generated `proximityradio` sound namespace to:

```text
plugins/ItemsAdder/contents/proximityradio/resourcepack/assets/proximityradio/
```

ItemsAdder becomes the pack-delivery owner, while Proximity Radio waits for the combined pack to load before starting vanilla audio.

```yaml
integrations:
  itemsadder:
    merge-resource-pack: true
    delegate-resource-pack-delivery: true
    run-iazip-after-radio-zip: false
```

- `merge-resource-pack` copies the generated radio namespace into ItemsAdder's persistent `contents` source.
- `delegate-resource-pack-delivery` prevents Proximity Radio from sending a second pack and makes it wait for ItemsAdder's pack status. For normal ItemsAdder compatibility, enable this together with `merge-resource-pack`.
- `run-iazip-after-radio-zip` decides whether Proximity Radio dispatches `/iazip` automatically after exporting.

`run-iazip-after-radio-zip` is generated as `false` even when ItemsAdder is detected. After exporting the files, `/radio zip` tells the administrator to run `/iazip`. Set it to `true` only if Proximity Radio should dispatch `/iazip` automatically.

Run `/radio zip` again whenever tracks or tier sound ranges change. While ItemsAdder owns pack delivery, `/radio force all` and `/radio force <player>` return the matching ItemsAdder command: `/iatexture all` or `/iatexture <player>`.

When delivery is delegated, ItemsAdder controls the vanilla pack URL and whether that pack is required. Proximity Radio's own resource-pack URL is still required when the optional client mod is enabled: `BUILTIN` serves direct OGG files, while `EXTERNAL` must point to the standalone radio ZIP. Menus, placed radios, permissions, holograms, and controls do not depend on which plugin sends the resource pack.

ItemsAdder's `resource-pack.kick-player-on-decline` setting applies to both normal and client-mod players. Proximity Radio does not schedule a second kick when delivery is delegated, including after a download failure; that policy remains owned by ItemsAdder. If the player stays without the pack, an unmodded player is kept out of vanilla radio playback until the combined pack loads. A modded player can still receive radio audio from Proximity Radio's separate mod source, but ItemsAdder models and textures are unavailable to that player.

See [Hosting with ItemsAdder](itemsadder-hosting.md) for the complete self-host, external-host, build, resend, and optional-client setup.

## Custom crafting items

Tier recipes recognize these namespaces:

- `minecraft:`
- `itemsadder:` or `ia:`

Custom-item ingredients use exact item matching. A normal item with the same base Minecraft material will not satisfy the recipe.
