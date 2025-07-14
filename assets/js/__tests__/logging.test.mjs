import { logInfo, logWarn, logError } from '../helpers/logging.js';

describe('helpers/logging.js', () => {
  let originalInfo, originalWarn, originalError;
  let infoArgs, warnArgs, errorArgs;
  beforeEach(() => {
    originalInfo = console.info;
    originalWarn = console.warn;
    originalError = console.error;
    infoArgs = null;
    warnArgs = null;
    errorArgs = null;
    console.info = (...args) => { infoArgs = args; };
    console.warn = (...args) => { warnArgs = args; };
    console.error = (...args) => { errorArgs = args; };
  });
  afterEach(() => {
    console.info = originalInfo;
    console.warn = originalWarn;
    console.error = originalError;
  });

  it('logInfo llama console.info con el mensaje', () => {
    logInfo('mensaje info');
    expect(infoArgs).toEqual(['[INFO]', 'mensaje info']);
  });

  it('logWarn llama console.warn con el mensaje', () => {
    logWarn('mensaje warn');
    expect(warnArgs).toEqual(['[WARN]', 'mensaje warn']);
  });

  it('logError llama console.error con mensaje y error definido', () => {
    logError('mensaje error', 'error!');
    expect(errorArgs).toEqual(['[ERROR]', 'mensaje error', 'error!']);
  });

  it('logError llama console.error con mensaje y string vacío si error es undefined', () => {
    logError('mensaje error');
    expect(errorArgs).toEqual(['[ERROR]', 'mensaje error', '']);
  });

  it('logError llama console.error con mensaje y string vacío si error es null', () => {
    logError('mensaje error', null);
    expect(errorArgs).toEqual(['[ERROR]', 'mensaje error', '']);
  });
});
