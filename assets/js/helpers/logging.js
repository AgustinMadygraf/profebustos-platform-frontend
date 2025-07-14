// helpers/logging.js
export function logInfo(msg) {
  console.info('[INFO]', msg);
}
export function logWarn(msg) {
  console.warn('[WARN]', msg);
}
export function logError(msg, err) {
  console.error('[ERROR]', msg, err || '');
}
