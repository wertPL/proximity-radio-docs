# Radio Tiers

A tier is a YAML file in `plugins/<edition>/radios/`. It defines the item, access rules, playback controls, sound behavior, hologram, particles, protection, and recipe for one radio type.

## Bundled tiers

- `default-radio.yml` — normal owner/trusted-player radio with a 32-block default range.
- `admin-radio.yml` — administrator-controlled radio with a 48-block default range.

Free loads only these two exact tiers. Pro can create and load additional tier files.

## Creating a Pro tier

```text
/radio tier create event-stage
```

This creates `radios/event-stage.yml` from the default template. Edit it, then run:

```text
/radio reload
```

Tier IDs may contain lowercase letters, digits, hyphens, and underscores, up to 64 characters.

## Identity and texture

```yaml
id: default-radio
display-name: "<gradient:#66ff9e:#d6ff7a>Default Radio</gradient>"

head:
  texture-type: BASE64
  texture: ""
```

`texture-type` accepts `BASE64` or `URL`. A URL must point directly to `textures.minecraft.net`. An empty texture uses the embedded radio appearance.

## Access

```yaml
access:
  place-permission: "proximityradio.use"
  control-permission: "proximityradio.use"
  control: TRUSTED_PLAYERS
  break-owner-only: true
```

`control` accepts `ADMIN_ONLY`, `TRUSTED_PLAYERS`, or `ALL`. Administrative break permission always bypasses owner-only breaking.

## Playback

```yaml
playback:
  enabled-on-place: false
  disable-on-server-restart: true
  allow-loop: true
  allow-shuffle: true
  allow-skip: true
  allow-previous: true
  allow-pause: true
  allow-seek-with-client-mod: true
  pause-when-empty: false
  empty-check-radius: 32.0
  allowed-tracks: ["*"]
  vanilla-join-behavior: WAIT_FOR_SYNC
```

Use explicit track IDs instead of `"*"` to create a restricted station:

```yaml
allowed-tracks: [lobby_theme, town_news, night_ambience]
```

## Sound

```yaml
sound:
  proximity: true
  directional-audio: true
  max-distance: 32.0
  allow-distance-change: true
  minimum-distance: 4.0
  falloff: LINEAR
  default-volume: 60
  minimum-volume: 0
  maximum-volume: 100
  allow-global-volume-change: true
  allow-private-volume-change: true
  default-private-volume: 40
  minimum-private-volume: 0
  maximum-private-volume: 100
```

Shared volume belongs to the placed radio. Private volume belongs to a listener globally. Radio range is saved per placed radio and stays separate from both volume values.

## Hologram and action bar

```yaml
hologram:
  enabled: true
  height: 1.05
  view-distance: 40.0
  update-interval-ticks: 20
  scale: 0.75
  line-width: 360
  background-color: "#900B0C18"
  shadow: true
  see-through: false
  lines:
    - "<gradient:#66ff9e:#d6ff7a><bold>{radio_name}</bold></gradient>"
    - "<green><bold>{track}</bold></green> <white>{elapsed}/{duration}</white>"
    - "<gray>Next:</gray> <yellow>{next_track}</yellow>"

action-bar:
  enabled: true
```

Hologram placeholders include:

```text
{radio_name} {tier} {state} {track} {artist}
{elapsed} {duration} {remaining} {next_track}
{volume} {listeners} {next_sync} {desynchronized}
{loop} {shuffle}
```

## Particles and protection

```yaml
grief-prevention:
  protect-from-pistons: true
  protect-from-explosions: true
  protect-from-entity-block-changes: true

particles:
  enabled: true
  interval-ticks: 10
  view-distance: 32.0
  ambient-area:
    enabled: false
    interval-ticks: 40
    radius: 6.0
    particles-per-burst: 3
```

Protection also covers the block supporting a floor or wall radio.

## Crafting recipe

```yaml
crafting:
  enabled: true
  ingredients:
    1: "minecraft:iron_ingot"
    2: "nexo:antenna"
    3: ""
    4: "oraxen:speaker"
    5: "itemsadder:myitems:radio_core"
    6: "mythic:MagicCrystal"
    7: ""
    8: "minecraft:redstone"
    9: ""
```

Slots match a 3×3 crafting table:

```text
1 2 3
4 5 6
7 8 9
```

Supported prefixes are `minecraft:`, `nexo:`, `oraxen:`, `itemsadder:`/`ia:`, and `mythic:`/`mythicmobs:`. Custom ingredients use exact item matching.

