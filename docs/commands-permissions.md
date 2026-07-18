# Commands and Permissions

The main command is `/radio`; `/pradio` is an alias.

## Player commands

| Command | Purpose |
| --- | --- |
| `/radio help` | Show available commands. |
| `/radio mute [on\|off]` | Mute or unmute all radios for yourself. |
| `/radio streamermode [on\|off]` | Alias for global personal mute. |
| `/radio volume <0-100>` | Set your global personal radio volume. |
| `/radio info` | Show information about the nearest radio. |
| `/radio status` | Show mute, client, nearby-radio, and playback status. |
| `/radio mod` | Show the optional client-mod link. |
| `/radio track list [page]` | List tracks allowed for the nearby radio. |
| `/radio track play <id>` | Select a track when you may control the nearby radio. |
| `/radio trust <radio-id> list` | List trusted players for an owned radio. |
| `/radio trust <radio-id> add <player>` | Trust a player on one owned radio. |
| `/radio trust <radio-id> remove <player>` | Remove trust from one owned radio. |
| `/radio queue list` | Show the nearby radio queue. |
| `/radio queue add <track>` | Add a track to the queue. |
| `/radio queue clear` | Clear the queue. |

## Administrator commands

| Command | Purpose | Permission |
| --- | --- | --- |
| `/radio give <player> <tier> [amount]` | Give radio items. | `proximityradio.admin.give` |
| `/radio reload` | Reload configuration, tiers, tracks, and integrations. | `proximityradio.admin.reload` |
| `/radio zip` | Scan audio and build the resource pack. | `proximityradio.admin.zip` |
| `/radio force <all\|player>` | Send the current pack request again. | `proximityradio.admin.force` |
| `/radio tier list` | List loaded radio tiers. | `proximityradio.admin.tier` |
| `/radio tier create <id>` | Create a tier template in Pro; show the Free upgrade notice in Free. | `proximityradio.admin.tier` |
| `/radio diagnose` | Display environment, integration, tool, pack, and URL status. | `proximityradio.admin.diagnose` |

## Permission nodes

| Permission | Default | Meaning |
| --- | --- | --- |
| `proximityradio.use` | Everyone | Use and place normal radios when tier rules allow it. |
| `proximityradio.command.mute` | Everyone | Use `/radio mute` and streamer mode. |
| `proximityradio.command.volume` | Everyone | Change global personal volume. |
| `proximityradio.admin` | Operators | Grants every administrative child permission and bypass behavior. |
| `proximityradio.admin.give` | Operators | Give radio items. |
| `proximityradio.admin.reload` | Operators | Reload the plugin configuration. |
| `proximityradio.admin.zip` | Operators | Build the resource pack. |
| `proximityradio.admin.force` | Operators | Force resource-pack delivery. |
| `proximityradio.admin.tier` | Operators | List and create tiers. |
| `proximityradio.admin.diagnose` | Operators | View diagnostics. |
| `proximityradio.admin.break` | Operators | Bypass ownership and WorldGuard checks while breaking radios. |
| `proximityradio.admin.control` | Operators | Control administrator-restricted radios. |

The top-level `proximityradio.admin` node is convenient for operators. For staff ranks, grant individual nodes so control and break access stay separate.

## Console use

Administrative commands such as `zip`, `reload`, `force`, `tier`, and `diagnose` can be run from the console. Player-context commands require an in-game player.

