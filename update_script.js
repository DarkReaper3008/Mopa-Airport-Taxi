const fs = require('fs');

const b64 = fs.readFileSync('public/assets/aistudio/b64.txt', 'utf8').trim();

// Read index.html
let html = fs.readFileSync('index.html', 'utf8');

// Replace all occurrences of old 750k base64
const oldPattern = /data:image\/webp;base64,UklGRjiKAgB[A-Za-z0-9+/=]+/g;
html = html.replace(oldPattern, b64);

// Replace preconnect in head to add cdn.tailwindcss.com preconnect
if (!html.includes('rel="preconnect" href="https://cdn.tailwindcss.com"')) {
  html = html.replace(
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link rel="preconnect" href="https://cdn.tailwindcss.com">'
  );
}

// Enhance hero image tags in index.html with fetchpriority="high" decoding="async" loading="eager"
html = html.replace(
  /<img \s*src="data:image\/webp;base64,UklGRs4/g,
  '<img fetchpriority="high" decoding="async" loading="eager" width="600" height="400" src="assets/aistudio/unnamed_923bf4cb.webp" onerror="this.onerror=null;this.src=\'data:image/webp;base64,UklGRs4'
);

// Close quote on onerror if replacement was made
html = html.replace(/GA11T4559" \/>/g, 'GA11T4559" />');

fs.writeFileSync('index.html', html);
console.log('Updated index.html size:', fs.statSync('index.html').size);

// Read src/App.tsx
let app = fs.readFileSync('src/App.tsx', 'utf8');
app = app.replace(oldPattern, b64);
fs.writeFileSync('src/App.tsx', app);
console.log('Updated App.tsx size:', fs.statSync('src/App.tsx').size);
