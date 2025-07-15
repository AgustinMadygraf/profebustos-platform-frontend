console.log(' asset/js/main.js script loaded');

// window.dataLayer y window.gtag ya están declarados en global.d.ts

window.dataLayer = window.dataLayer || [];
function gtag(...args: any[]): void {
  window.dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');
