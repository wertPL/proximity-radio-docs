# Controls and Synchronization

The server owns radio state. Every control action updates one shared radio, while each client receives the best playback method it supports.

## Radio menu

Depending on tier settings and access, the native menu can provide:

- play, pause, resume, and stop;
- previous and next track;
- direct track selection;
- loop or shuffle;
- queue management;
- shared radio volume;
- personal listener volume;
- hearing distance;
- accurate seek controls for compatible clients.

Tier settings can independently hide or lock playback actions. See [Radio Tiers](radio-tiers.md).

## Access modes

| Mode | Who controls the radio? |
| --- | --- |
| `ADMIN_ONLY` | Players with administrative control permission |
| `TRUSTED_PLAYERS` | Owner plus players trusted for that specific placed radio |
| `ALL` | Anyone who passes the tier's control permission |

Trusted-player radios receive a five-character ID. Owners use that ID with `/radio trust` to list, add, or remove trusted players.

## Mixed vanilla and modded listeners

Players with the optional client can join a currently playing radio at the exact server position. Vanilla resource-pack sounds cannot begin at an arbitrary timestamp, so each tier chooses a fallback:

| `vanilla-join-behavior` | Result |
| --- | --- |
| `PLAY_FROM_START` | The entering vanilla player hears the active track from its beginning until the next global change. |
| `RESTART_TRACK` | The current track restarts for every listener. |
| `WAIT_FOR_SYNC` | The entering vanilla player remains silent until the next full track start. |

## Actions that synchronize everyone

Skipping, selecting another track, stopping, or starting a full track creates a common synchronization point for vanilla and modded listeners.

Seeking is different: modded listeners can move immediately, but vanilla listeners cannot. When vanilla listeners are nearby, the UI requests confirmation and shows the next synchronization state.

## Positional behavior

```yaml
sound:
  proximity: true
  directional-audio: true
  max-distance: 32.0
  falloff: LINEAR
```

- `proximity` enables distance-based playback.
- `directional-audio` moves audio between left and right based on radio direction.
- Set `directional-audio: false` to preserve distance attenuation while centering audio.
- `falloff` accepts `LINEAR`, `SMOOTH`, or `NONE`.

The optional client reproduces configured falloff more accurately. Vanilla playback still follows Minecraft's native positional sound rules.

## Empty areas and restarts

`pause-when-empty` can pause a radio when no listeners remain inside `empty-check-radius`.

`disable-on-server-restart: true` leaves a placed radio stopped after restart. Set it to `false` to restore the saved playing state and position.

