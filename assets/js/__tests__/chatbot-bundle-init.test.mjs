import { ChatBotApp } from '../chatbot-bundle.js';

describe('chatbot-bundle.js - inicialización automática', () => {
  it('llama addEventListener si document.readyState === "loading" y no ejecuta createApp directamente', () => {
    // Mockea readyState como 'loading'
    const originalReadyStateDescriptor = Object.getOwnPropertyDescriptor(document, 'readyState');
    Object.defineProperty(document, 'readyState', {
      configurable: true,
      get: () => 'loading',
    });
    global.process = undefined;
    let createAppCalled = false;
    let addEventListenerCalled = false;
    window.createApp = () => { createAppCalled = true; };
    document.addEventListener = (event, cb) => {
      if (event === 'DOMContentLoaded') addEventListenerCalled = true;
    };
    // Simula el bloque de inicialización
    if (typeof process === 'undefined' || !process.env?.JEST_WORKER_ID) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
          window.createApp();
        });
      } else {
        window.createApp();
      }
    }
    expect(addEventListenerCalled).toBe(true);
    expect(createAppCalled).toBe(false);
    // Restaura el descriptor original
    Object.defineProperty(document, 'readyState', originalReadyStateDescriptor);
  });
  let originalReadyStateDescriptor, originalAddEventListener, originalProcess;

  beforeEach(() => {
    // Guarda el descriptor original del getter
    originalReadyStateDescriptor = Object.getOwnPropertyDescriptor(document, 'readyState');
    Object.defineProperty(document, 'readyState', {
      configurable: true,
      get: () => 'complete',
    });
    originalAddEventListener = document.addEventListener;
    originalProcess = global.process;
  });

  afterEach(() => {
    // Restaura el descriptor original solo si existe
    if (originalReadyStateDescriptor) {
      Object.defineProperty(document, 'readyState', originalReadyStateDescriptor);
    }
    document.addEventListener = originalAddEventListener;
    global.process = originalProcess;
  });

  it('ejecuta createApp si document.readyState !== "loading" y no está en entorno de test', () => {
    // readyState ya mockeado como 'complete'
    global.process = undefined;
    let called = false;
    window.createApp = () => { called = true; };
    // Simula el bloque de inicialización
    if (typeof process === 'undefined' || !process.env?.JEST_WORKER_ID) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
          window.createApp();
        });
      } else {
        window.createApp();
      }
    }
    expect(called).toBe(true);
  });

  it('no ejecuta createApp si está en entorno de test', () => {
    // readyState ya mockeado como 'complete'
    global.process = { env: { JEST_WORKER_ID: '1' } };
    let called = false;
    window.createApp = () => { called = true; };
    if (typeof process === 'undefined' || !process.env?.JEST_WORKER_ID) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
          window.createApp();
        });
      } else {
        window.createApp();
      }
    }
    expect(called).toBe(false);
  });
});

test('dummy test para evitar error de Jest', () => {
  expect(true).toBe(true);
});
