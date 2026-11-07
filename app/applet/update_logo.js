const fs = require('fs');
const logoBase64 = fs.readFileSync('logo_base64.txt', 'utf8').trim();

// Update index.html
let html = fs.readFileSync('index.html', 'utf8');
const brandPatternHtml = /<div class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-blue-900 flex items-center justify-center text-white shadow-md group-hover:bg-blue-800 transition-colors shrink-0">[\s\S]*?<\/div>/;
const newBrandHtml = `<img src="${logoBase64}" alt="Mopa Airport Taxi - Official GOX Airport Transfers" class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover shadow-md shrink-0" />`;

if (brandPatternHtml.test(html)) {
  html = html.replace(brandPatternHtml, newBrandHtml);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Successfully updated index.html with logo base64');
} else {
  console.log('Could not find brand pattern in index.html');
}

// Update src/App.tsx
let appTsx = fs.readFileSync('src/App.tsx', 'utf8');
const brandPatternApp = /<div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-blue-900 flex items-center justify-center text-white shadow-md group-hover:bg-blue-800 transition-colors shrink-0">[\s\S]*?<\/div>/;
const newBrandApp = `<img src="${logoBase64}" alt="Mopa Airport Taxi - Official GOX Airport Transfers" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover shadow-md shrink-0" />`;

if (brandPatternApp.test(appTsx)) {
  appTsx = appTsx.replace(brandPatternApp, newBrandApp);
  fs.writeFileSync('src/App.tsx', appTsx, 'utf8');
  console.log('Successfully updated src/App.tsx with logo base64');
} else {
  console.log('Could not find brand pattern in src/App.tsx');
}
