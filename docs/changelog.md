# Changelog

## 1.0.0

Initial documented release of Proximity Radio Free and Pro.

### Core

- Placeable proximity radios with shared playback state.
- Vanilla resource-pack playback and optional enhanced client integration.
- Directional sound, hearing distance, falloff, shared volume, and private volume.
- Native radio controls, track selection, queue, loop, shuffle, pause, and stop.
- Holograms, action bar, note particles, recipes, ownership, and trusted players.
- WorldGuard and PlaceholderAPI integrations.
- Built-in or external resource-pack hosting.
- Automatic audio conversion and metadata registry.

### Synchronization

- Mixed vanilla/modded listener support.
- Configurable vanilla join behavior.
- Shared synchronization when selecting, skipping, stopping, or starting tracks.
- Client audio stops cleanly after leaving the server.

### Free edition

- Two supported bundled tiers: `default-radio` and `admin-radio`.
- Maximum of 12 tracks.
- Maximum duration of six minutes per track.
- Hardcoded administrator-only Pro upgrade notices.
- Restores a missing bundled tier during startup or `/radio reload`.
