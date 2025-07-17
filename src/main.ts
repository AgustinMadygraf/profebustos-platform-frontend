import { createApp } from "vue";
import App from "./App.vue";

console.log("🔍 main.ts está ejecutándose");
console.log("🔍 DOM cargado:", document.readyState);
console.log("🔍 Elemento #app:", document.getElementById("app"));

// Variable global para rastrear si Vue ya está montado
window.vueAppMounted = false;

// Esperar a que el DOM esté completamente cargado
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountApp);
} else {
  mountApp();
}

function mountApp() {
  console.log("🔍 Intentando montar App en #app");
  try {
    // Evitar doble montaje
    if (window.vueAppMounted) {
      console.log("⚠️ Vue ya está montado, ignorando intento adicional");
      return;
    }
    const app = createApp(App);
    app.mount("#app");
    window.vueAppMounted = true;
    console.log("✅ Vue montado correctamente");
  } catch (error) {
    console.error("❌ Error al montar Vue:", error);
  }
}

// Exponer createApp en window para diagnóstico
window.createApp = () => {
  console.log("🔄 Intento manual de montaje");
  mountApp();
};

// Declarar tipos para TypeScript
declare global {
  interface Window {
    createApp: () => void;
    vueAppMounted: boolean;
  }
}
