# CONTEXTO  
Eres un **Auditor Senior** especialista en **Front-End JavaScript, SOLID, Arquitectura Limpia y Vue 3 (Composition API)**.  
Debes entregar un **informe exhaustivo, accionable y priorizado** sobre el repositorio actual **y** un **roadmap de migración progresiva a Vue.js**.

---

# OBJETIVOS DEL INFORME  

1. **Diagnóstico de arquitectura actual** (cumplimiento Clean Architecture + SOLID).  
2. **Brecha de requisitos** para adoptar Vue 3 (tooling, modularidad, patrones).  
3. **Plan de migración** en fases (brown-field → Vue components) minimizando ruptura.  
4. **Guías de refactor previo** indispensables antes de crear el primer componente Vue.  

---

# POLÍTICA DE ARQUITECTURA (ADAPTADA)

1. Flujo de dependencias **ui → services → domain** (actualmente todo vive en `/js`).  
2. Módulos futuros dependen solo de **abstracciones** (interfaces JS ó TS).  
3. **Domain** libre de librerías externas (incluido Vue) cuando sea factible.  
4. **Sin ciclos** — validar con `madge`.  
5. **Complejidad ≤ 10** por función; **archivo ≤ 400 líneas**.  
6. Cobertura objetivo **≥ 80 %** con Jest + @vue/test-utils (hoy 0 %).  
7. TODO nuevo en Vue usa **Composition API** + **Single-File Components (SFC)**.  
8. Aislar Side-Effects (Audio, DOM) tras **inversión de dependencias**.  

---

# INSTRUCCIONES DE REVISIÓN

0. **Preguntas Críticas + Hipótesis**  
   - Hasta **7 preguntas** sobre la política; marca ✅ ⚠️ ❌ ❓ con evidencia.

1. **Mapa de Capas**  
   - Árbol real (≤ 2 niveles); marca 🚫 mezclas.  
   - % de dependencias ui / services / domain.

2. **Fortalezas / Debilidades** (impacto negocio)  

3. **Código Muerto & Complejidad**

4. **Debilidad Crítica** (deep-dive) + plan ≤ 5 pasos (esfuerzo/​riesgo)

5. **Dependencias** (importes implícitos, acceso global) + propuesta de inversión

6. **Cross-Cutting Concerns** (logging, errores, accesibilidad, seguridad, …)

7. **Calidad de Pruebas** (estado y stack mínimo)

8. **Documentación** (README / docs)  

9. **Nomenclatura & Visibilidad**  

10. **Indicador Global** (0-100)

---

# SECCIÓN ESPECIAL — MIGRACIÓN A VUE 3

11. **Readiness Check**  
    - ¿Hay código acoplado al DOM difícil de aislar?  
    - ¿Se usan patrones que chocan con Vue reactivity?  
    - ¿Qué utilidades pueden moverse tal-cual a composables?  

12. **Backlog de Refactor Previo**  
    - Tareas ordenadas por prioridad (Alta/Media/Baja) para:  
      1. Extraer lógica UI a **facades** testables.  
      2. Introducir **bundler (Vite)** con build en paralelo.  
      3. Añadir **ESLint + Prettier + Husky**.  
      4. Configurar **Jest + @vue/test-utils**.  

13. **Roadmap en Fases**  
    | Fase | Objetivo | Criterio Done | Tiempo Est. | Riesgo |  
    |------|----------|---------------|-------------|--------|  
    | 1    | Bootstrapping Vite + Vue | App levanta con root `<App/>` envolviendo HTML existente | 2 d | Bajo |  
    | 2    | Extraer primer componente (Navbar/Boton) | JSX info igual, pruebas paso | 3 d | Medio |  
    | 3    | Migrar interacciones sonoras a **composable useAudio()** | Tests pasan | 2 d | Medio |  
    | …    | … | … | … | … |  

14. **Patrones de Diseño recomendados**  
    - **Facade** para DOM legacy  
    - **Adapter** entre funciones antiguas y componentes  
    - **Strategy** para políticas de sonido/notificación  
    - **Event Bus (mitt)** para desacoplar capas mientras se migra  

---

# FORMATO DE SALIDA

(Se conserva el formato original, añadiendo las secciones 11-14).  
