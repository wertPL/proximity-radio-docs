# Installation

Proximity Radio is a Paper plugin. Players can join with a normal Minecraft client; the client mod is optional.

## Requirements

| Component | Requirement |
| --- | --- |
| Server | Paper `1.21.7` and newer |
| Java | Java `21` |
| Client | Vanilla Minecraft, or the optional Proximity Radio Client |
| Optional plugins | ItemsAdder, WorldGuard, and PlaceholderAPI |

Purpur builds based on a compatible Paper version will usually work, but Paper is the primary target. Spigot is not a supported target because the plugin is built against Paper APIs.

## Install the plugin

1. Stop the Minecraft server.
2. Put **one** edition JAR into the server's `plugins/` directory:
    - `ProximityRadioFree-1.0.1.jar`, or
    - `ProximityRadioPro-1.0.1.jar`.
3. Start the server once.
4. Confirm that the console reports `Proximity Radio ... enabled`.
5. Stop the server before the initial configuration.

!!! danger "Do not install Free and Pro together"
    Both editions register `/radio` and are not designed to run together. Choose one edition per server.

## Data folder

Free stores its files in:

```text
plugins/ProximityRadioFree/
```

Pro stores them in:

```text
plugins/ProximityRadioPro/
```

The `tracks/`, `radios/`, and `resourcepack/` directories are created inside that folder. When upgrading, stop the server before copying data from the Free folder to the Pro folder.

## Optional dependencies

Install these like normal Paper plugins before enabling their integration:

- **WorldGuard** — build checks plus separate place, use, and break flags.
- **PlaceholderAPI** — exposes nearby-radio and playback placeholders.

ItemsAdder provides exact custom crafting ingredients and can own one combined hosted resource pack. Both Free and Pro export the radio sound namespace and support delegated pack delivery.

For a combined pack, continue to [Hosting with ItemsAdder](itemsadder-hosting.md) after the first server start.

## Next step

Continue to [Your First Radio](first-radio.md) to add music, build the pack, and place a radio.
