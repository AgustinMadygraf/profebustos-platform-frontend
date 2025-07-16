// Script para inyectar la versión de package.json en index.html
const fs = require('fs');
const path = require('path');

const pkgPath = path.join(__dirname, '../package.json');
const htmlPath = path.join(__dirname, '../index.html');

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const version = pkg.version;

let html = fs.readFileSync(htmlPath, 'utf8');

// Reemplaza el texto vX.Y.Z en el footer por la versión actual
html = html.replace(/<footer[^>]*>\s*v[0-9]+\.[0-9]+\.[0-9]+/i, match => {
  return match.replace(/v[0-9]+\.[0-9]+\.[0-9]+/, `v${version}`);
});

fs.writeFileSync(htmlPath, html);
console.log(`Versión ${version} inyectada en index.html`);
