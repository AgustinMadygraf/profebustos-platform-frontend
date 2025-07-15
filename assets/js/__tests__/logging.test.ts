import * as logging from '../helpers/logging';

describe('logging helpers', () => {
  beforeEach(() => {
    jest.spyOn(console, 'info').mockImplementation(() => {});
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('logInfo debe llamar console.info', () => {
    const spy = jest.spyOn(console, 'info');
    logging.logInfo('msg');
    expect(spy).toHaveBeenCalledWith('[INFO]', 'msg');
  });

  it('logWarn debe llamar console.warn', () => {
    const spy = jest.spyOn(console, 'warn');
    logging.logWarn('msg');
    expect(spy).toHaveBeenCalledWith('[WARN]', 'msg');
  });

  it('logError debe llamar console.error', () => {
    const spy = jest.spyOn(console, 'error');
    logging.logError('msg', 'err');
    expect(spy).toHaveBeenCalledWith('[ERROR]', 'msg', 'err');
  });
});
