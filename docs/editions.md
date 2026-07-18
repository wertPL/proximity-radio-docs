# Free vs Pro

Free and Pro play audio in the same way and support the same client mod and integrations. The differences are the number of tracks, track length, and custom radio tiers.

<div class="comparison-wrap">
  <table class="comparison-table">
    <thead>
      <tr><th>Feature</th><th>Free</th><th>Pro</th></tr>
    </thead>
    <tbody>
      <tr><td>Radio tiers</td><td><span class="table-limit">Default and Admin</span></td><td><span class="table-pro">Unlimited custom tiers</span></td></tr>
      <tr><td>Track library</td><td><span class="table-limit">Up to 12 tracks</span></td><td><span class="table-pro">Unlimited</span></td></tr>
      <tr><td>Maximum track length</td><td><span class="table-limit">6 minutes</span></td><td><span class="table-pro">No edition limit</span></td></tr>
    </tbody>
  </table>
</div>

## Moving from Free to Pro

1. Stop the server.
2. Remove the Free JAR.
3. Install the Pro JAR and start once to generate `plugins/ProximityRadioPro/`.
4. Stop the server again.
5. Copy the required configuration, tracks, and runtime data from `plugins/ProximityRadioFree/`.
6. Start the server, review the console, then run `/radio zip` and `/radio reload`.

!!! warning
    Keep a backup before moving runtime data. Never run both editions at the same time.
