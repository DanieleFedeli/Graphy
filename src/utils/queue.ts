export class Queue<T = unknown> {
  private _queue: T[] = [];

  public enqueue(item: T) {
    this._queue.push(item);
  }

  public dequeue() {
    return this._queue.shift();
  }
}
