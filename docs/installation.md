# Installation

Proximity Radio is a Paper plugin. Players can join with a normal Minecraft client; the client mod is optional.

## Requirements

| Component | Requirement |
| --- | --- |
| Server | Paper `1.21.7` through `26.2+` |
| Java | Java `21` |
| Client | Vanilla Minecraft, or the optional Proximity Radio Client |
| Optional plugins | WorldGuard and PlaceholderAPI |

Purpur builds based on a compatible Paper version will usually work, but Paper is the primary target. Spigot is not a supported target because the plugin is built against Paper APIs.

## Install the plugin

1. Stop the Minecraft server.
2. Put **one** edition JAR into the server's `plugins/` directory:
    - `ProximityRadioFree-1.0.0.jar`, or
    - `ProximityRadioPro-1.0.0.jar`.
3. Start the server once.
4. Confirm that the console reports `Proximity Radio ... enabled`.
5. Stop the server before the initial configuration.

!!! danger "Do not install Free and Pro together"
    Both editions provide the same `/radio` command and network channel. Choose one edition per server.

## Generated directories

=== "Free"

    ```text
    plugins/ProximityRadioFree/
    ├─ config.yml
    ├─ messages.yml
    ├─ radios/
    ├─ tracks/
    ├─ cache/converted/
    ├─ data/
    └─ resourcepack/
    ```

=== "Pro"

    ```text
    plugins/ProximityRadioPro/
    ├─ config.yml
    ├─ messages.yml
    ├─ radios/
    ├─ tracks/
    ├─ cache/converted/
    ├─ data/
    └─ resourcepack/
    ```

The folder name is different for each edition. When upgrading from Free to Pro, stop the server and copy the settings, tracks, and data you want to keep into `plugins/ProximityRadioPro/` before starting Pro.

## Optional dependencies

Install these like normal Paper plugins before enabling their integration:

- **WorldGuard** — build checks plus separate place, use, and break flags.
- **PlaceholderAPI** — exposes nearby-radio and playback placeholders.

Custom crafting ingredients may also resolve items from Nexo, Oraxen, ItemsAdder, and MythicMobs when those plugins are installed.

## Next step

Continue to [Your First Radio](first-radio.md) to add music, build the pack, and place a radio.
