export class CounterService {

  public counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}
