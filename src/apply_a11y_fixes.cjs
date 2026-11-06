const fs = require('fs');

function processHtml(filePath) {
  let code = fs.readFileSync(filePath, 'utf8');

  // 1. Add <main id="main-content"> landmark if missing
  if (!code.includes('<main id="main-content">') && !code.includes('<main id="main-content"')) {
    // Insert after header / mobile drawer
    code = code.replace(
      '</header>',
      '</header>\n\n    <!-- Main Landmark -->\n    <main id="main-content">'
    );
    // Close before footer
    code = code.replace(
      '<footer',
      '</main>\n\n    <!-- Footer -->\n    <footer'
    );
  }

  // 2. Fix heading order hierarchy (replace skipped <h4> tags with <h3>)
  // Section: Booking Form features
  code = code.replace(/<h4([^>]*)>No Advance Deposit Required<\/h4>/g, '<h3$1>No Advance Deposit Required</h3>');
  code = code.replace(/<h4([^>]*)>Direct Owner-Driver Communication<\/h4>/g, '<h3$1>Direct Owner-Driver Communication</h3>');

  // Section: Why Ride features
  code = code.replace(/<h4([^>]*)>Direct Driver Contact<\/h4>/g, '<h3$1>Direct Driver Contact</h3>');
  code = code.replace(/<h4([^>]*)>Punctual & Reliable<\/h4>/g, '<h3$1>Punctual & Reliable</h3>');
  code = code.replace(/<h4([^>]*)>Immaculate White Suzuki Sedan<\/h4>/g, '<h3$1>Immaculate White Suzuki Sedan</h3>');
  code = code.replace(/<h4([^>]*)>4\.9\/5 Rating from Genuine Google Maps Reviews<\/h4>/g, '<h3$1>4.9/5 Rating from Genuine Google Maps Reviews</h3>');

  // Section: Reviews Author names
  code = code.replace(/<h4([^>]*)>Diganta Bhaduri<\/h4>/g, '<h3$1>Diganta Bhaduri</h3>');
  code = code.replace(/<h4([^>]*)>Ronal Fernandes<\/h4>/g, '<h3$1>Ronal Fernandes</h3>');
  code = code.replace(/<h4([^>]*)>Abhishek Pandey<\/h4>/g, '<h3$1>Abhishek Pandey</h3>');

  // Section: Contact details
  code = code.replace(/<h4([^>]*)>Base Station Address<\/h4>/g, '<h3$1>Base Station Address</h3>');
  code = code.replace(/<h4([^>]*)>Operating Hours<\/h4>/g, '<h3$1>Operating Hours</h3>');
  code = code.replace(/<h4([^>]*)>Direct Phone & WhatsApp<\/h4>/g, '<h3$1>Direct Phone & WhatsApp</h3>');

  // Section: Footer titles
  code = code.replace(/<h4([^>]*)>Quick Links<\/h4>/g, '<h3$1>Quick Links</h3>');
  code = code.replace(/<h4([^>]*)>Direct Driver Contact<\/h4>/g, '<h3$1>Direct Driver Contact</h3>');

  // 3. Fix Color Contrast (WCAG AA)
  // Replace low-contrast grays on dark background with high-contrast text-slate-200 or text-slate-300
  code = code.replace(/text-slate-400/g, 'text-slate-200');
  code = code.replace(/text-slate-500/g, 'text-slate-300');
  
  // Replace low-contrast grays on light backgrounds
  code = code.replace(/text-slate-600/g, 'text-slate-700');

  fs.writeFileSync(filePath, code);
  console.log(`Successfully updated ${filePath}`);
}

processHtml('index.html');
