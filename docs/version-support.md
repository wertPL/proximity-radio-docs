# Version Support

## Server compatibility

| Component | Supported range |
| --- | --- |
| Paper | `1.21.7` through `26.2+` |
| Java | `21` |
| Purpur | Expected on builds based on a compatible Paper API; Paper remains the tested target |
| Spigot | Not supported |

Free and Pro share the same server compatibility and optional-client integration.

The plugin declares `api-version: 1.21.7`, so servers older than 1.21.7 should reject it rather than starting with undefined behavior.

## Client compatibility

Vanilla players need only a Minecraft version compatible with the server and the generated resource pack.

The enhanced client must match:

- the player's Minecraft version;
- the correct mod loader and dependencies;
- the server plugin's client protocol.

When protocols do not match, the server logs a warning and keeps the player on the vanilla fallback path.

## Resource-pack format

The generated pack contains the format range used by the supported Minecraft versions. Run `/radio zip` after a plugin update so its metadata and sound-channel entries match the installed JAR.

## Updating the plugin

1. Back up the plugin data directory.
2. Stop the server.
3. Replace the JAR and update Paper/Java if required.
4. Start and review console output.
5. Run `/radio zip`.
6. Run `/radio reload`.
7. Test one vanilla and one modded client when available.
