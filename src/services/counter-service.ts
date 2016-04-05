export class CounterService {

  private counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}
