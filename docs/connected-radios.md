# Connected Radios

Proximity Radio Pro 1.1.0 can turn multiple placed radios into synchronized speakers controlled as one logical radio.

!!! info "Pro feature"
    Connected radio groups are available only in Pro. The Free edition keeps `/radio connect` as an informational command and displays a clickable [Pro upgrade link](https://builtbybit.com/resources/proximity-radio-pro.117753/) without changing radio data.

## Connect two radios

Every placed radio has a five-character public ID shown to its owner in the radio menu. Run:

```text
/radio connect <source-id> <target-id>
```

The source radio stops being independent and joins the target radio. Its previous public ID and playback state are discarded. The source location then uses the target radio's ID, owner, current track, timeline, queue, loop and shuffle state, trusted-player list, and global volume.

The source remains a separate physical speaker. It keeps its block location, sound range, particles, hologram, and independent positional audio source. Players near multiple speakers can therefore hear the same synchronized broadcast from each location.

If the source ID already represents a connected group, every speaker in that source group moves to the target group.

## Owner requirements

An owner can connect radios only when all of these conditions are true:

- the player owns both logical radios;
- both radios use the same tier;
- that tier has `access.allow-connect: true`.

```yaml
access:
  allow-connect: true
```

Custom and existing tier files default to `false` when the setting is absent. The bundled `default-radio` tier enables owner connections, while the bundled administrative tier disables them.

## Administrator override

`proximityradio.admin.connect` allows staff and the console to connect compatible same-tier radios regardless of ownership and `allow-connect`. It is included in `proximityradio.admin` by default.

The same-tier requirement is always enforced. This keeps track restrictions, controls, volume limits, and other tier behavior consistent across every speaker in a group.

## Persistence and removal

Connections are stored in `data/radios.yml` and restored after restart. Invalid targets and connection cycles are repaired safely during loading.

Breaking a satellite removes only that physical speaker. If the controlling target radio is broken while other speakers remain, one remaining speaker is promoted automatically. The group keeps its public ID, owner, playback position, settings, and remaining connections.

The optional client mod does not require a separate 1.1.0 update for this feature. Each physical radio was already represented as an independent positional audio source; the server now synchronizes their shared state.
