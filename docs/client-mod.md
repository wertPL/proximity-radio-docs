# Optional Client Mod

[Proximity Radio Client](https://modrinth.com/mod/proximity-radio-client) is optional. Players without it continue through the vanilla resource-pack path.

## What the client adds

- exact joining at the current track position;
- responsive seeking and synchronized position updates;
- pause, resume, and stop control without losing server state;
- mod-side spatial and directional playback;
- local extraction of track audio from the same generated resource-pack ZIP;
- correct stop behavior when disconnecting from the server.

The server still controls the radio. The mod cannot add tracks, tiers, or change playback without a server command.

## Enable or disable support

```yaml
client-mod:
  enabled: true
```

When disabled, every player uses the vanilla resource-pack behavior even if the mod is installed.

## Install for players

1. Use a compatible Fabric installation for the player's Minecraft version.
2. Install the matching Proximity Radio Client build.
3. Join the server.
4. Run `/radio status` and check that the client is detected.

The direct client page is also available through `/radio mod`.

## Resource-pack relationship

Normally, the client mod does not require a second audio host. It reads the URL configured in Proximity Radio and obtains the required OGG track from it.

In `EXTERNAL` mode, the configured URL must return the standalone generated radio ZIP directly. In `BUILTIN` mode, the mod uses the plugin's direct `/audio/<track>.ogg` endpoint.

When ItemsAdder owns resource-pack delivery, it sends the combined pack to players with and without the optional client mod, so its models and textures remain available. The client mod continues to obtain radio audio from Proximity Radio's separate configured source instead of treating the larger combined ItemsAdder ZIP as its track archive.

See [Hosting with ItemsAdder](itemsadder-hosting.md) for both hosting paths and the exact rebuild order.

## Mixed servers

Modded and vanilla users can listen to the same placed radio. The active track, loop, shuffle, queue, volume, and range remain shared. Only delivery and timestamp accuracy differ.

See [Controls and Synchronization](controls-sync.md) for vanilla join modes and synchronization points.
