export class Stack<T = unknown> {
  private _queue: T[] = [];

  public enqueue(item: T) {
    this._queue.push(item);
  }

  public dequeue(): T | undefined {
    const item = this._queue.pop();
    return item;
  }
}
