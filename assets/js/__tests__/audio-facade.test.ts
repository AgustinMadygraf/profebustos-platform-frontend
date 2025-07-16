import { AudioFacade } from '../helpers/audio-facade';

describe('AudioFacade', () => {
  let facade: AudioFacade;
  let audio: HTMLAudioElement;

  beforeEach(() => {
    facade = new AudioFacade();
    audio = facade.create('test.mp3');
  });

  it('create genera un elemento Audio con src', () => {
    expect(audio).toBeInstanceOf(Audio);
    expect(audio.src).toContain('test.mp3');
  });

  it('setCurrentTime modifica el tiempo', () => {
    facade.setCurrentTime(audio, 5);
    expect(audio.currentTime).toBe(5);
  });

  it('setOnEnded asigna el handler de fin', () => {
    const handler = jest.fn();
    facade.setOnEnded(audio, handler);
    expect(audio.onended).toBe(handler);
  });

  it('play llama play en el elemento', async () => {
    // Mockear play para evitar error en JSDOM
    const playMock = jest.spyOn(audio, 'play').mockImplementation(() => Promise.resolve());
    await facade.play(audio);
    expect(playMock).toHaveBeenCalled();
    playMock.mockRestore();
  });
});
