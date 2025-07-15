export function logInfo(msg: string): void {
  console.info('[INFO]', msg);
}

export function logWarn(msg: string): void {
  console.warn('[WARN]', msg);
}

export function logError(msg: string, err?: any): void {
  console.error('[ERROR]', msg, err || '');
}