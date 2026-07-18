# Optional Client Mod

[Proximity Radio Client](https://modrinth.com/mod/proximity-radio-client) is optional. Players without it continue through the vanilla resource-pack path.

## What the client adds

- exact joining at the current track position;
- responsive seeking and synchronized position updates;
- pause, resume, and stop control without losing server state;
- enhanced spatial and directional playback;
- local extraction of track audio from the same generated resource-pack ZIP;
- correct stop behavior when disconnecting from the server.

The server remains authoritative. A local client cannot create tracks, tiers, or radio state that the server does not expose.

## Enable or disable support

```yaml
client-mod:
  enabled: true
```

When disabled, every player uses the vanilla resource-pack behavior even if the mod is installed.

## Install for players

1. Use a compatible Fabric installation for the player's Minecraft version.
2. Install the matching Proximity Radio Client build.
3. Join the server normally.
4. Run `/radio status` to confirm that the server recognized the enhanced client.

The direct client page is also available through `/radio mod`.

## Resource-pack relationship

The client mod does not require a second audio host. It reads the same URL configured for the Minecraft resource pack and extracts the required OGG track locally.

Therefore the configured pack URL must still be reachable and return the ZIP directly, even on a modded-only server.

## Mixed servers

Modded and vanilla users can listen to the same placed radio. The active track, loop, shuffle, queue, volume, and range remain shared. Only delivery and timestamp accuracy differ.

See [Controls and Synchronization](controls-sync.md) for vanilla join modes and synchronization points.

