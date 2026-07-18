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
| `%proximityradio_radio_id%` | UUID of the nearby placed radio. |
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

## Custom crafting items

Tier recipes recognize these namespaces:

- `minecraft:`
- `nexo:`
- `oraxen:`
- `itemsadder:` or `ia:`
- `mythic:` or `mythicmobs:`

Custom-item ingredients use exact item matching. A normal item with the same base Minecraft material will not satisfy the recipe.

## Optional client

The client connects through a plugin messaging channel. If its protocol version does not match, the server logs the mismatch and uses vanilla playback for that player.
