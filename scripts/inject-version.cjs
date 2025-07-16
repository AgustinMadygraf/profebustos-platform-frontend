// ...existing code...
const fs = require("fs");
const path = require("path");
const pkg = require("../package.json");

const htmlPath = path.join(__dirname, "../public/index.html");
const version = pkg.version;

let html = fs.readFileSync(htmlPath, "utf8");
html = html.replace(/(data-version=")([^"]*)(")/, `$1${version}$3`);
fs.writeFileSync(htmlPath, html);
console.log(`[inject-version] Version ${version} inyectada en index.html`);
// ...existing code...
