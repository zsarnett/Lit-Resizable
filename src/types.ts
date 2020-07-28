export interface LGLDomEvent<T> extends Event {
  detail: T;
}
export interface DraggingEvent {
  deltaX: number;
  deltaY: number;
}
