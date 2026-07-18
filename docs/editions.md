# Free vs Pro

Free and Pro play audio in the same way and support the same client mod and integrations. The differences are the number of tracks, track length, and custom radio tiers.

<div class="comparison-wrap">
  <table class="comparison-table">
    <thead>
      <tr><th>Feature</th><th>Free</th><th>Pro</th></tr>
    </thead>
    <tbody>
      <tr><td>Vanilla resource-pack playback</td><td><span class="table-yes">Included</span></td><td><span class="table-yes">Included</span></td></tr>
      <tr><td>Optional client mod</td><td><span class="table-yes">Included</span></td><td><span class="table-yes">Included</span></td></tr>
      <tr><td>Spatial and directional audio</td><td><span class="table-yes">Included</span></td><td><span class="table-yes">Included</span></td></tr>
      <tr><td>Menus, holograms, particles, and recipes</td><td><span class="table-yes">Included</span></td><td><span class="table-yes">Included</span></td></tr>
      <tr><td>WorldGuard and PlaceholderAPI</td><td><span class="table-yes">Included</span></td><td><span class="table-yes">Included</span></td></tr>
      <tr><td>Radio tiers</td><td><span class="table-limit">Default and Admin</span></td><td><span class="table-pro">Unlimited custom tiers</span></td></tr>
      <tr><td>Track library</td><td><span class="table-limit">Up to 12 tracks</span></td><td><span class="table-pro">Unlimited</span></td></tr>
      <tr><td>Maximum track length</td><td><span class="table-limit">6 minutes</span></td><td><span class="table-pro">No edition limit</span></td></tr>
      <tr><td><code>/radio tier create</code></td><td><span class="table-limit">Shows the Pro notice</span></td><td><span class="table-pro">Creates the tier file</span></td></tr>
    </tbody>
  </table>
</div>

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
