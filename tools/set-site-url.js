/* Replaces the placeholder site URL everywhere (canonical, Open Graph, JSON-LD, sitemap, robots).
   Usage:  node tools/set-site-url.js https://your-real-domain.com */
const fs = require('fs'), path = require('path');
const next = (process.argv[2] || '').replace(/\/+$/, '');
if (!/^https:\/\/[^\s/]+$/.test(next)) { console.error('Give a full https URL, e.g. https://nutrilabel.vercel.app'); process.exit(1); }
const root = path.join(__dirname, '..');
['index.html', 'sitemap.xml', 'robots.txt'].forEach(f => {
  const p = path.join(root, f);
  const t = fs.readFileSync(p, 'utf8').replace(/https:\/\/nutrilabel\.vercel\.app|https:\/\/[^"\s<]*?(?=\/(?:assets\/img\/og-image\.png|sitemap\.xml|"|<|\s))/g, next);
  fs.writeFileSync(p, t);
});
console.log('Site URL set to ' + next);
