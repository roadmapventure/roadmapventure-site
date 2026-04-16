/**
 * RoadMapVenture — Shared Navigation
 * Edit this ONE file to update the nav across every page.
 * Each page calls initNav() with its own page ID for active-link highlighting.
 */

(function() {
  // ── NAV STRUCTURE ── edit links/labels here ──────────────────────────────
  const NAV_LINKS = [
    { href: 'resume.html',          label: 'Resume' },
    { href: 'nigp-marketing.html',  label: 'Procurement Intelligence' },
    { href: 'playbook.html',        label: 'The Product Playbook' },
    { href: 'about.html',           label: 'About' },
  ];

  // ── CONTACT DATA (base64 encoded — never plain text) ─────────────────────
  const PHONE_B64 = 'NTEyLjU4NS44NTEz';
  const EMAIL_B64 = 'amxlb25hQHlhaG9vLmNvbQ==';

  // ── INJECT NAV ────────────────────────────────────────────────────────────
  function buildNav(activePage) {
    const linksHTML = NAV_LINKS.map(link => {
      const isActive = link.href === activePage;
      return `<li><a href="${link.href}"${isActive ? ' class="active"' : ''}>${link.label}</a></li>`;
    }).join('\n    ');

    const navHTML = `
<nav>
  <a class="nav-logo" href="index.html">RoadMap<span>Venture</span></a>
  <ul class="nav-links">
    ${linksHTML}
  </ul>
  <button class="nav-cta" onclick="openContactModal()" style="cursor:pointer;font-family:inherit;background:transparent;">Get in Touch</button>
</nav>`;

    // Insert before first child of body, replacing any existing <nav>
    const existing = document.querySelector('nav');
    if (existing) {
      existing.outerHTML = navHTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', navHTML);
    }
  }

  // ── CONTACT MODAL ─────────────────────────────────────────────────────────
  function buildModal() {
    const modalHTML = `
<div id="siteContactModal" style="display:none;position:fixed;inset:0;z-index:9999;background:rgba(26,24,20,.72);backdrop-filter:blur(6px);align-items:center;justify-content:center;" onclick="if(event.target===this)closeContactModal()">
  <div style="background:#faf8f5;border:1px solid rgba(200,169,110,.25);padding:48px 52px;max-width:440px;width:90%;position:relative;">
    <div style="font-size:10px;letter-spacing:.28em;text-transform:uppercase;color:#c8a96e;margin-bottom:20px;display:flex;align-items:center;gap:10px;">
      <span style="display:block;width:20px;height:1px;background:#c8a96e;"></span>Get in Touch
    </div>
    <div style="font-family:'Cormorant Garamond',serif;font-size:30px;font-weight:300;color:#1a1814;margin-bottom:28px;line-height:1.15;">
      Let's build something<br><em style="color:#c8a96e">worth shipping.</em>
    </div>

    <div id="navModalPhone" style="padding:14px 0;border-bottom:1px solid rgba(200,169,110,.25);cursor:pointer;" onclick="revealModalContact('phone')" title="Click to reveal">
      <div style="font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#c8a96e;margin-bottom:4px;">Phone</div>
      <div id="navModalPhoneVal" style="font-family:'Cormorant Garamond',serif;font-size:20px;color:#1a1814;" data-val="${PHONE_B64}">
        <span style="font-size:12px;color:#c8a96e;letter-spacing:.1em;">↗ Click to reveal</span>
      </div>
    </div>

    <div id="navModalEmail" style="padding:14px 0;border-bottom:1px solid rgba(200,169,110,.25);cursor:pointer;" onclick="revealModalContact('email')" title="Click to reveal">
      <div style="font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#c8a96e;margin-bottom:4px;">Email</div>
      <div id="navModalEmailVal" style="font-family:'Cormorant Garamond',serif;font-size:20px;color:#1a1814;" data-val="${EMAIL_B64}">
        <span style="font-size:12px;color:#c8a96e;letter-spacing:.1em;">↗ Click to reveal</span>
      </div>
    </div>

    <div style="padding:14px 0;border-bottom:1px solid rgba(200,169,110,.25);">
      <div style="font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#c8a96e;margin-bottom:4px;">LinkedIn</div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:20px;">
        <a href="https://www.linkedin.com/in/leonardjohn/" target="_blank" style="color:#1a1814;text-decoration:none;">linkedin.com/in/leonardjohn ↗</a>
      </div>
    </div>

    <div style="padding:14px 0;">
      <div style="font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#c8a96e;margin-bottom:4px;">Location</div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:20px;color:#1a1814;">Austin, Texas</div>
    </div>

    <button onclick="closeContactModal()" style="position:absolute;top:20px;right:24px;background:none;border:none;font-size:24px;color:#6b6057;cursor:pointer;line-height:1;">×</button>
  </div>
</div>`;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  // ── GLOBAL FUNCTIONS (called from onclick) ────────────────────────────────
  window.openContactModal = function() {
    document.getElementById('siteContactModal').style.display = 'flex';
  };

  window.closeContactModal = function() {
    document.getElementById('siteContactModal').style.display = 'none';
    // Reset reveal state so re-opening shows the prompts again
    var pEl = document.getElementById('navModalPhoneVal');
    var eEl = document.getElementById('navModalEmailVal');
    pEl.innerHTML = '<span style="font-size:12px;color:#c8a96e;letter-spacing:.1em;">↗ Click to reveal</span>';
    eEl.innerHTML = '<span style="font-size:12px;color:#c8a96e;letter-spacing:.1em;">↗ Click to reveal</span>';
    document.getElementById('navModalPhone').style.cursor = 'pointer';
    document.getElementById('navModalEmail').style.cursor = 'pointer';
  };

  window.revealModalContact = function(type) {
    if (type === 'phone') {
      var el = document.getElementById('navModalPhoneVal');
      var val = atob(el.dataset.val);
      el.innerHTML = '<a href="tel:+1' + val.replace(/\./g, '') + '" style="color:#1a1814;text-decoration:none;">' + val + '</a>';
      document.getElementById('navModalPhone').style.cursor = 'default';
    } else {
      var el = document.getElementById('navModalEmailVal');
      var val = atob(el.dataset.val);
      el.innerHTML = '<a href="mailto:' + val + '" style="color:#1a1814;text-decoration:none;">' + val + '</a>';
      document.getElementById('navModalEmail').style.cursor = 'default';
    }
  };

  // Keyboard close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') window.closeContactModal();
  });

  // ── PUBLIC INIT ───────────────────────────────────────────────────────────
  window.initNav = function(activePage) {
    buildNav(activePage || '');
    buildModal();
  };

})();
