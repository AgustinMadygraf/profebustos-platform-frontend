import { EventBus } from '../helpers/event-bus';

describe('EventBus', () => {
  let bus: EventBus;
  beforeEach(() => {
    bus = new EventBus();
  });

  it('debe registrar y emitir eventos', () => {
    const handler = jest.fn();
    bus.on('test:event', handler);
    bus.emit('test:event', 123);
    expect(handler).toHaveBeenCalledWith(123);
  });

  it('debe eliminar handlers correctamente', () => {
    const handler = jest.fn();
    bus.on('test:event', handler);
    bus.off('test:event', handler);
    bus.emit('test:event', 456);
    expect(handler).not.toHaveBeenCalled();
  });

  it('no debe fallar si se emite un evento sin handlers', () => {
    expect(() => bus.emit('no:handler')).not.toThrow();
  });
});
