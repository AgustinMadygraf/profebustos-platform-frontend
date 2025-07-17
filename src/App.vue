<template>
  <div id="vue-wrapper">
    <!-- HTML migrado desde index.html -->
    <header class="bg-light border-bottom mb-4" role="banner" aria-label="Encabezado principal">
      <div class="container-fluid py-3">
        <div class="row align-items-center">
          <div class="col-6 col-md-3 logo">
            <picture>
              <source srcset="/img/logo-80.webp 80w, /img/logo-160.webp 160w" type="image/webp" />
              <img
                src="/img/logo-160.webp"
                alt="Logo Prof. Bustos - Branding y Packaging"
                width="160"
                height="48"
                style="height: 48px; width: 160px; max-width: 100%; height: auto"
                loading="lazy"
                srcset="/img/logo-80.webp 80w, /img/logo-160.webp 160w"
                sizes="(max-width: 480px) 80px, 160px"
              />
            </picture>
          </div>
          <div class="col-6 col-md-9">
            <nav aria-label="Menú principal" role="navigation">
              <ul
                class="nav justify-content-end flex-wrap"
                role="menubar"
                aria-label="Opciones principales"
              >
                <li class="nav-item" role="none">
                  <a class="nav-link" href="#cursos" role="menuitem" tabindex="0">Cursos</a>
                </li>
                <li class="nav-item" role="none">
                  <a class="nav-link" href="#nosotros" role="menuitem" tabindex="0">Nosotros</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <main class="container-fluid px-2 px-md-5" role="main" aria-label="Contenido principal">
      <section class="hero text-center py-4 py-md-5" aria-labelledby="titulo-hero" role="region">
        <h1 id="titulo-hero" class="display-5 fw-bold">
          Microcursos gratuitos en Branding y Packaging
        </h1>
        <p class="lead">Aprendé a potenciar tu marca y empaque con cursos breves y prácticos.</p>
        <a href="#cursos" class="btn btn-primary btn-lg">Ver catálogo de cursos</a>
      </section>
      <section
        id="cursos"
        class="cursos-resumen py-4 py-md-5"
        aria-labelledby="titulo-cursos"
        role="region"
      >
        <h2 id="titulo-cursos" class="mb-4">Catálogo de Cursos</h2>
        <div class="row g-3 g-md-4">
          <!-- Cards de cursos migrados -->
          <div class="col-12 col-md-4">
            <h3 class="card-title">Branding Esencial para Emprendedores</h3>
            <p class="card-text">
              Nivel Inicial. Fundamentos de marca, logo y paleta básica. Incluye guía PDF y video.
            </p>
            <a
              href="cursos/branding-basico.html"
              class="btn btn-outline-primary"
              aria-label="Ver curso Branding Esencial para Emprendedores"
              >Ver curso</a
            >
          </div>
          <div class="col-12 col-md-4">
            <h3 class="card-title">Arte en Packaging y Diseño de Envases</h3>
            <p class="card-text">
              Nivel Inicial. Principios de diseño gráfico aplicados al empaque. Tutorial paso a
              paso.
            </p>
            <a
              href="cursos/arte-packaging.html"
              class="btn btn-outline-primary"
              aria-label="Ver curso Arte en Packaging y Diseño de Envases"
              >Ver curso</a
            >
          </div>
          <div class="col-12 col-md-4">
            <h3 class="card-title">Vectorización de Imágenes: De JPG a SVG</h3>
            <p class="card-text">
              Taller práctico. Convierte tus logos para impresión y plotter. Ejemplos reales y
              herramientas gratuitas.
            </p>
            <a
              href="cursos/vectorizacion.html"
              class="btn btn-outline-primary"
              aria-label="Ver curso Vectorización de Imágenes: De JPG a SVG"
              >Ver curso</a
            >
          </div>
          <div class="col-12 col-md-4">
            <h3 class="card-title">Colorimetría y Psicología del Color en Branding</h3>
            <p class="card-text">
              Curso auto-guiado. Teoría del color, combinaciones y calibración para impresión.
            </p>
            <a
              href="cursos/colorimetria.html"
              class="btn btn-outline-primary"
              aria-label="Ver curso Colorimetría y Psicología del Color en Branding"
              >Ver curso</a
            >
          </div>
          <div class="col-12 col-md-4">
            <h3 class="card-title">Diseño con Canva para Negocios</h3>
            <p class="card-text">
              Nivel Inicial. Aprende a crear diseños rápidos y efectivos para tu marca y packaging.
            </p>
            <a
              href="cursos/canva-negocios.html"
              class="btn btn-outline-primary"
              aria-label="Ver curso Diseño con Canva para Negocios"
              >Ver curso</a
            >
          </div>
          <div class="col-12 col-md-4">
            <h3 class="card-title">Marketing de Packaging: El Envase que Vende</h3>
            <p class="card-text">
              Seminario on-demand. Estrategias para aumentar ventas y fidelizar clientes con tu
              empaque.
            </p>
            <a
              href="cursos/marketing-packaging.html"
              class="btn btn-outline-primary"
              aria-label="Ver curso Marketing de Packaging"
              >Ver curso</a
            >
          </div>
        </div>
      </section>
      <section
        id="nosotros"
        class="nosotros py-4 py-md-5"
        aria-labelledby="titulo-nosotros"
        role="region"
      >
        <h2 id="titulo-nosotros">Sobre Profe Bustos</h2>
        <p>
          Expertos en branding, packaging y capacitación para emprendedores y pymes argentinas.
          Nuestra misión es ayudarte a destacar tu marca y productos con soluciones creativas y
          personalizadas.
        </p>
      </section>
    </main>
    <!-- WhatsApp Chat Widget -->
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
    <!-- Fin WhatsApp Chat Widget -->
    <footer class="bg-light text-center py-3 mt-5" role="contentinfo" aria-label="Pie de página">
      <p>
        <span
          style="font-size: 0.8em; color: #bbb; float: left"
          aria-label="Versión de la plataforma"
          >v1.0.0</span
        >
        &copy; 2025
        <a
          href="https://www.profebustos.com.ar"
          rel="noopener"
          style="color: inherit; text-decoration: none"
          >profebustos.com.ar</a
        >
        — Todxs lxs derechos reservados.
      </p>
    </footer>
    <!-- Slot para futuros componentes Vue -->
    <slot></slot>
    <ChatbotLegacyAdapter />
  </div>
</template>

<script setup>
// Componente raíz para envolver el HTML legacy
import { onMounted } from "vue";
import ChatbotLegacyAdapter from "./components/ChatbotLegacyAdapter.vue";

onMounted(() => {
  console.log("🔍 App.vue componente montado");
  console.log(
    "🔍 Contenido actual del #app:",
    document.getElementById("app")?.innerHTML.substring(0, 100) + "..."
  );
});
</script>

<style>
#vue-wrapper {
  min-height: 100vh;
  display: block;
}
</style>
