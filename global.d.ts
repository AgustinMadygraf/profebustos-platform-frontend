// Declaraciones globales para window.dataLayer y window.gtag
interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
  createApp?: () => void;
}
