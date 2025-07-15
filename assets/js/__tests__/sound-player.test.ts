

// ...existing code...
import { SoundPlayer } from '../sound-player';

describe('SoundPlayer', () => {
  const src = 'test.mp3';

  beforeEach(() => {
    // Mock global Audio usando clase para compatibilidad con TypeScript
    class MockAudio {
      src: string;
      currentTime = 0;
      play = jest.fn().mockResolvedValue(undefined);
      onended: (() => void) | null = null;
      constructor(src: string) {
        this.src = src;
      }
    }
    global.Audio = MockAudio as any;
  });

  it('crea el objeto Audio con el src correcto', () => {
    const player = new SoundPlayer(src);
    // Acceso indirecto para evitar error de propiedad privada
    expect((player as any).audio.src).toBe(src);
  });

  it('play reinicia el audio y llama play()', async () => {
    const player = new SoundPlayer(src);
    let called = false;
    (player as any).audio.play = async () => { called = true; };
    (player as any).audio.currentTime = 5;
    await player.play();
    expect((player as any).audio.currentTime).toBe(0);
    expect(called).toBe(true);
  });

  it('play asigna onended si se pasa función', async () => {
    const player = new SoundPlayer(src);
    let onEndCalled = false;
    const onEnd = () => { onEndCalled = true; };
    await player.play(onEnd);
    expect(typeof (player as any).audio.onended).toBe('function');
  });

  it('play llama logError si play() falla', async () => {
    // Mock logError manualmente
    const originalConsoleError = console.error;
    let called = false;
    let args;
    console.error = (...a) => { called = true; args = a; };
    const player = new SoundPlayer(src);
    (player as any).audio.play = async () => { throw 'error'; };
    await player.play();
    expect(called).toBe(true);
    expect(args[0]).toBe('[ERROR]');
    expect(args[1]).toBe('Audio error');
    expect(args[2]).toBe('error');
    console.error = originalConsoleError;
  });
});
