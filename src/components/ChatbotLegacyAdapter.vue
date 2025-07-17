<template>
  <!-- Mantener exactamente la misma estructura HTML del chatbot -->
  <div id="whatsapp-widget" class="position-fixed bottom-0 end-0 p-3" style="z-index: 1050">
    <div
      id="whatsapp-icon"
      class="bg-success rounded-circle shadow position-relative d-flex align-items-center justify-content-center"
      style="width: 56px; height: 56px; cursor: pointer"
    >
      <picture>
        <source srcset="/img/whatsapp-32.webp 32w, /img/whatsapp-64.webp 64w" type="image/webp" />
        <img
          src="/img/whatsapp-32.webp"
          alt="Icono WhatsApp Chat"
          width="32"
          height="32"
          style="width: 32px; height: 32px; max-width: 100%; height: auto"
          srcset="/img/whatsapp-32.webp 32w, /img/whatsapp-64.webp 64w"
          sizes="(max-width: 480px) 32px, 64px"
        />
      </picture>
      <span
        id="whatsapp-badge"
        class="badge bg-danger position-absolute"
        style="top: -8px; right: -8px; z-index: 2; padding: 0.5em 0.6em; font-size: 0.85em"
        >1</span
      >
    </div>
    <div
      id="whatsapp-chat"
      class="bg-white border rounded-4 shadow-lg position-fixed bottom-0 end-0 d-none flex-column"
      style="width: 350px; max-width: 95vw; height: 420px; max-height: 90vh; min-height: 420px"
    >
      <div
        class="d-flex align-items-center justify-content-between bg-success text-white px-3 py-2 rounded-top-4"
      >
        <span class="fw-bold">WhatsApp Chat</span>
        <button id="whatsapp-close" type="button" class="btn btn-sm btn-light d-none d-md-block">
          &times;
        </button>
        <button id="whatsapp-back" type="button" class="btn btn-sm btn-light d-md-none">
          &larr;
        </button>
      </div>
      <div id="whatsapp-body" class="flex-grow-1 px-3 py-2 overflow-auto">
        <div id="bot-message" class="d-flex flex-row mb-2">
          <div class="bg-light rounded-3 px-3 py-2 text-dark small">
            <span id="bot-typing">escribiendo...</span>
          </div>
        </div>
        <div id="whatsapp-messages" class="mb-2"></div>
      </div>
      <div class="input-group mt-2">
        <input
          type="text"
          id="whatsapp-user-input"
          class="form-control"
          placeholder="Escribe tu mensaje..."
        />
        <button id="whatsapp-send-btn" class="btn btn-success" type="button">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { ChatBotUI } from "../../assets/js/chatbot-ui.js";
import { BotLogic } from "../../assets/js/bot-logic.js";
import { SoundPlayer } from "../../assets/js/sound-player.js";
import { NotificationBadge } from "../../assets/js/notification-badge.js";
import { ChatBotApp } from "../../assets/js/chatbot-bundle.js";

// Importar archivo de audio correctamente para Vite
// Usar la ruta pública del audio, no import
const notificationSound = "/sounds/whatsapp-notification.m4a";

// Referencias a la instancia de ChatBotApp para limpieza posterior
const chatbotApp = ref(null);

onMounted(() => {
  console.log("� [Vue] Inicializando ChatBotApp desde ChatbotLegacyAdapter.vue");

  // Usar la URL correcta del audio
  const soundPlayer = new SoundPlayer(notificationSound);

  // Permitir que el DOM se actualice completamente antes de inicializar
  setTimeout(() => {
    const ui = new ChatBotUI();
    const logic = new BotLogic(ui);

    const notificationBadge = new NotificationBadge(ui.badge);

    // Guardar referencia para limpieza posterior
    chatbotApp.value = new ChatBotApp({
      ui,
      logic,
      soundPlayer,
      notificationBadge,
    });

    console.log("✅ ChatbotLegacyAdapter: Chatbot inicializado correctamente");
  }, 100);
});

// Limpiar eventos DOM al desmontar (buena práctica)
onUnmounted(() => {
  console.log("🧹 ChatbotLegacyAdapter: Limpiando recursos");
  // Aquí deberíamos añadir código para eliminar event listeners
  // cuando implementemos métodos de limpieza en ChatBotApp
});
</script>
