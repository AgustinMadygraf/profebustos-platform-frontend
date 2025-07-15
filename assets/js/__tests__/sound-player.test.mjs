

// ...existing code...
import { SoundPlayer } from '../sound-player';

describe('SoundPlayer', () => {
  const src = 'test.mp3';

  beforeEach(() => {
    // Mock global Audio para cada test
    global.Audio = function(src) {
      this.src = src;
      this.currentTime = 0;
      this.play = async () => {};
      this.onended = null;
    };
  });

  it('crea el objeto Audio con el src correcto', () => {
    const player = new SoundPlayer(src);
    expect(player.audio.src).toBe(src);
  });

  it('play reinicia el audio y llama play()', async () => {
    const player = new SoundPlayer(src);
    let called = false;
    player.audio.play = async () => { called = true; };
    player.audio.currentTime = 5;
    await player.play();
    expect(player.audio.currentTime).toBe(0);
    expect(called).toBe(true);
  });

  it('play asigna onended si se pasa función', async () => {
    const player = new SoundPlayer(src);
    let onEndCalled = false;
    const onEnd = () => { onEndCalled = true; };
    await player.play(onEnd);
    expect(typeof player.audio.onended).toBe('function');
  });

  it('play llama logError si play() falla', async () => {
    // Mock logError manualmente
    const originalConsoleError = console.error;
    let called = false;
    let args;
    console.error = (...a) => { called = true; args = a; };
    const player = new SoundPlayer(src);
    player.audio.play = async () => { throw 'error'; };
    await player.play();
    expect(called).toBe(true);
    expect(args[0]).toBe('[ERROR]');
    expect(args[1]).toBe('Audio error');
    expect(args[2]).toBe('error');
    console.error = originalConsoleError;
  });
});
