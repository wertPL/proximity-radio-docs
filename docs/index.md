<section class="radio-hero">
  <div class="hero-copy">
    <span class="hero-kicker">Spatial music for Minecraft</span>
    <h1>Make the world sound alive.</h1>
    <p class="hero-lead">
      Proximity Radio turns placeable radios into synchronized, distance-aware music sources.
      Vanilla players use a generated resource pack, while the optional client mod adds exact
      seeking, smooth controls, and enhanced playback.
    </p>
    <div class="hero-actions">
      <a class="md-button md-button--primary" href="installation/">Install the plugin</a>
      <a class="md-button" href="audio-resource-pack/">Build your first pack</a>
    </div>
  </div>
  <div class="signal-card" aria-label="Radio signal preview">
    <div class="signal-card__top">
      <span>Proximity Radio</span>
      <span class="live-dot">On air</span>
    </div>
    <div class="signal-card__art">
      <img src="assets/radio-logo.png" alt="Proximity Radio logo">
    </div>
    <div class="waveform" aria-hidden="true">
      <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
  </div>
</section>

<div class="quick-facts">
  <div class="quick-fact"><strong>Paper 1.21.7 → 26.2+</strong><span>Built for modern Paper servers</span></div>
  <div class="quick-fact"><strong>Java 21</strong><span>Required by the plugin and server</span></div>
  <div class="quick-fact"><strong>Vanilla + optional mod</strong><span>One radio system for mixed clients</span></div>
</div>

## One system, two playback paths

Every listener hears the same radio state. The delivery method changes automatically depending on the client.

<div class="feature-grid">
  <article class="feature-card">
    <h3>Vanilla listeners</h3>
    <p>Receive a generated Minecraft resource pack and hear native positional sounds without installing anything locally.</p>
  </article>
  <article class="feature-card">
    <h3>Enhanced clients</h3>
    <p>Use the optional Fabric client for accurate joining, seeking, pause and resume behavior while keeping server authority.</p>
  </article>
  <article class="feature-card">
    <h3>Physical radios</h3>
    <p>Place textured radio heads, define hearing distance, protect ownership, show holograms, and control playback through native dialogs.</p>
  </article>
  <article class="feature-card">
    <h3>Server-ready controls</h3>
    <p>Configure tiers, permissions, recipes, WorldGuard regions, PlaceholderAPI output, grief prevention, particles, and UI text.</p>
  </article>
</div>

## From audio file to in-game radio

<div class="flow-line">
  <div class="flow-step"><strong>Add tracks</strong><span>Drop OGG, MP3, WAV, FLAC, or another supported format into the tracks folder.</span></div>
  <div class="flow-step"><strong>Build the pack</strong><span>Run <code>/radio zip</code> to validate, convert, index, and package the library.</span></div>
  <div class="flow-step"><strong>Publish it</strong><span>Use the built-in HTTP server or provide a direct external ZIP URL.</span></div>
  <div class="flow-step"><strong>Place a radio</strong><span>Give a tier item, place it, select a track, and let proximity playback handle listeners.</span></div>
</div>

## Choose your edition

<div class="edition-grid">
  <article class="edition-card">
    <h3>Free</h3>
    <p>A complete starting edition with the Default and Admin radio tiers, up to 12 tracks, a six-minute limit per track, and full optional-client support.</p>
  </article>
  <article class="edition-card edition-card--pro">
    <h3>Pro</h3>
    <p>Build unlimited music libraries and create as many fully configurable radio tiers as your server design requires.</p>
  </article>
</div>

[Compare Free and Pro →](editions.md){ .md-button }

!!! tip "First time here?"
    Follow [Installation](installation.md), then [Your First Radio](first-radio.md). The quick path takes you from an empty server to a working radio pack without requiring the client mod.

