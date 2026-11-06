const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Add <main id="main-content"> landmark if missing
if (!app.includes('<main id="main-content">') && !app.includes('<main id="main-content"')) {
  app = app.replace(
    '</header>',
    '</header>\n\n      {/* Main Content Landmark */}\n      <main id="main-content">'
  );
  app = app.replace(
    '<footer',
    '</main>\n\n      {/* Footer */}\n      <footer'
  );
}

// 2. Fix heading order hierarchy (replace skipped <h4> tags with <h3>)
app = app.replace(/<h4([^>]*)>No Advance Deposit Required<\/h4>/g, '<h3$1>No Advance Deposit Required</h3>');
app = app.replace(/<h4([^>]*)>Direct Owner-Driver Communication<\/h4>/g, '<h3$1>Direct Owner-Driver Communication</h3>');

app = app.replace(/<h4([^>]*)>Direct Driver Contact<\/h4>/g, '<h3$1>Direct Driver Contact</h3>');
app = app.replace(/<h4([^>]*)>Punctual & Reliable<\/h4>/g, '<h3$1>Punctual & Reliable</h3>');
app = app.replace(/<h4([^>]*)>Immaculate White Suzuki Sedan<\/h4>/g, '<h3$1>Immaculate White Suzuki Sedan</h3>');
app = app.replace(/<h4([^>]*)>4\.9\/5 Rating from Genuine Google Maps Reviews<\/h4>/g, '<h3$1>4.9/5 Rating from Genuine Google Maps Reviews</h3>');

app = app.replace(/<h4([^>]*)>Diganta Bhaduri<\/h4>/g, '<h3$1>Diganta Bhaduri</h3>');
app = app.replace(/<h4([^>]*)>Ronal Fernandes<\/h4>/g, '<h3$1>Ronal Fernandes</h3>');
app = app.replace(/<h4([^>]*)>Abhishek Pandey<\/h4>/g, '<h3$1>Abhishek Pandey</h3>');

app = app.replace(/<h4([^>]*)>Base Station Address<\/h4>/g, '<h3$1>Base Station Address</h3>');
app = app.replace(/<h4([^>]*)>Operating Hours<\/h4>/g, '<h3$1>Operating Hours</h3>');
app = app.replace(/<h4([^>]*)>Direct Phone & WhatsApp<\/h4>/g, '<h3$1>Direct Phone & WhatsApp</h3>');

app = app.replace(/<h4([^>]*)>Quick Links<\/h4>/g, '<h3$1>Quick Links</h3>');

// 3. Fix Color Contrast
app = app.replace(/text-slate-400/g, 'text-slate-200');
app = app.replace(/text-slate-500/g, 'text-slate-300');
app = app.replace(/text-slate-600/g, 'text-slate-700');

fs.writeFileSync('src/App.tsx', app);
console.log('Successfully updated src/App.tsx');
