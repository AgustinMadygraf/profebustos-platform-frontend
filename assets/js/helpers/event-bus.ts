// EventBus simple para desacoplar eventos entre capas
export type EventHandler = (...args: any[]) => void;

export class EventBus {
  private events: Map<string, EventHandler[]> = new Map();

  on(event: string, handler: EventHandler): void {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)!.push(handler);
  }

  off(event: string, handler: EventHandler): void {
    if (!this.events.has(event)) return;
    const handlers = this.events.get(event)!.filter(h => h !== handler);
    this.events.set(event, handlers);
  }

  emit(event: string, ...args: any[]): void {
    if (!this.events.has(event)) return;
    for (const handler of this.events.get(event)!) {
      handler(...args);
    }
  }
}
