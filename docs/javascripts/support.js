(function () {
  function mountSupportRail() {
    if (document.querySelector(".support-rail")) {
      return;
    }

    var rail = document.createElement("aside");
    rail.className = "support-rail";
    rail.setAttribute("aria-label", "Community links");
    rail.innerHTML = [
      '<a href="https://discord.com/invite/sD4HvQh8P4" target="_blank" rel="noopener" title="Join the Discord">',
      '  <span class="support-rail__label">Discord</span>',
      '  <span class="support-rail__value">Join Server</span>',
      '</a>'
    ].join("");
    document.body.appendChild(rail);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountSupportRail);
  } else {
    mountSupportRail();
  }

  if (window.document$ && document$.subscribe) {
    document$.subscribe(mountSupportRail);
  }
})();
