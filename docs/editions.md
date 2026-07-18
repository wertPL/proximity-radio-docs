# Free vs Pro

Both editions use the same playback engine, menus, local client integration, resource-pack system, protection, and server integrations. Free limits content scale; it does not remove the core radio experience.

<table class="comparison-table">
  <thead>
    <tr><th>Feature</th><th>Free</th><th>Pro</th></tr>
  </thead>
  <tbody>
    <tr><td>Vanilla resource-pack playback</td><td>Yes</td><td>Yes</td></tr>
    <tr><td>Optional enhanced client</td><td>Yes</td><td>Yes</td></tr>
    <tr><td>Spatial and directional audio</td><td>Yes</td><td>Yes</td></tr>
    <tr><td>Menus, holograms, particles, recipes</td><td>Yes</td><td>Yes</td></tr>
    <tr><td>WorldGuard and PlaceholderAPI</td><td>Yes</td><td>Yes</td></tr>
    <tr><td>Available radio tiers</td><td><code>default-radio</code> and <code>admin-radio</code></td><td>Unlimited custom tiers</td></tr>
    <tr><td>Track library</td><td>Up to 12 tracks</td><td>Unlimited</td></tr>
    <tr><td>Maximum track length</td><td>6 minutes</td><td>Unlimited by edition</td></tr>
    <tr><td><code>/radio tier create</code></td><td>Upgrade notice</td><td>Creates a tier template</td></tr>
  </tbody>
</table>

## How Free enforces its limits

Free checks limits inside the configuration and pack-building services, not only in command text.

- Only `radios/default-radio.yml` and `radios/admin-radio.yml` are loaded.
- Additional tier YAML files are ignored.
- Missing bundled tier files are restored at startup and `/radio reload`.
- A changed ID inside a bundled tier file is restored to the required bundled tier.
- More than 12 supported files in `tracks/` blocks `/radio zip`.
- Tracks over six minutes are omitted from the ZIP and track registry.
- Cached OGG duration is read from the audio file instead of trusting an edited `tracks.yml` value.
- Upgrade notices are hardcoded, visible only to administrators, and cannot be edited in `messages.yml`.

## Moving from Free to Pro

1. Stop the server.
2. Remove the Free JAR.
3. Install the Pro JAR and start once to generate `plugins/ProximityRadioPro/`.
4. Stop the server again.
5. Copy the required configuration, tracks, and runtime data from `plugins/ProximityRadioFree/`.
6. Start the server, review the console, then run `/radio zip` and `/radio reload`.

!!! warning
    Keep a backup before moving runtime data. Never run both editions at the same time.

