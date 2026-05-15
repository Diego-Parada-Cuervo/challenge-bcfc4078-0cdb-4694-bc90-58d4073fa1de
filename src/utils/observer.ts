export class Observer {
  private subscribers: Function[] = [];

  subscribe(fn: Function) {
    this.subscribers.push(fn);
  }

  unsubscribe(fn: Function) {
    this.subscribers = this.subscribers.filter(subscriber => subscriber!== fn);
  }

  notify(data: any) {
    this.subscribers.forEach(subscriber => subscriber(data));
  }
}