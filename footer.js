/**
 * RoadMapVenture — Shared Footer
 * Edit this ONE file to update the footer across every page.
 * Each page calls initFooter() — works alongside initNav().
 */
(function() {

  const FOOTER_LINKS = [
    { href: 'index.html',          label: 'Home' },
    { href: 'resume.html',         label: 'Resume' },
    { href: 'nigp-marketing.html', label: 'Data Intelligence' },
    { href: 'playbook.html',       label: 'My Product Playbook' },
    { href: 'about.html',          label: 'About' },
    { href: 'patents.html',        label: 'Patents' },
  ];

  function buildFooter() {
    const linksHTML = FOOTER_LINKS.map(link =>
      `<a href="${link.href}">${link.label}</a>`
    ).join('\n    ');

    const footerHTML = `
<footer id="siteFooter">
  <a class="footer-logo" href="index.html">RoadMap<span>Venture</span></a>
  <span class="footer-copy">© 2025 John Leonard · Austin, TX</span>
  <div class="footer-links">
    ${linksHTML}
    <a href="https://www.linkedin.com/in/leonardjohn/" target="_blank" style="-webkit-tap-highlight-color:transparent;">LinkedIn ↗</a>
  </div>
</footer>`;

    // Replace any existing footer, else append before </body>
    const existing = document.querySelector('footer');
    if (existing) {
      existing.outerHTML = footerHTML;
    } else {
      document.body.insertAdjacentHTML('beforeend', footerHTML);
    }

    // Inject footer styles once
    if (!document.getElementById('siteFooterStyles')) {
      const style = document.createElement('style');
      style.id = 'siteFooterStyles';
      style.textContent = `
        footer#siteFooter {
          background: #1a1814;
          color: rgba(250,248,245,.35);
          padding: 32px 56px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(200,169,110,.15);
          font-family: 'DM Sans', sans-serif;
          flex-wrap: wrap;
          gap: 16px;
        }
        footer#siteFooter .footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          color: #faf8f5;
          text-decoration: none;
          opacity: .8;
        }
        footer#siteFooter .footer-logo span { color: #c8a96e; }
        footer#siteFooter .footer-copy { font-size: 11px; letter-spacing: .05em; }
        footer#siteFooter .footer-links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          align-items: center;
        }
        footer#siteFooter .footer-links a {
          font-size: 10px;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: rgba(250,248,245,.35);
          text-decoration: none;
          transition: color .2s;
        }
        footer#siteFooter .footer-links a:hover { color: #c8a96e; }
        @media (max-width: 768px) {
          footer#siteFooter {
            flex-direction: column;
            text-align: center;
            padding: 28px 20px;
          }
          footer#siteFooter .footer-links { justify-content: center; }
        }
      `;
      document.head.appendChild(style);
    }
  }

  window.initFooter = function() {
    buildFooter();
  };

})();
