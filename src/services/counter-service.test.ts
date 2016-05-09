import { CounterService } from './counter-service';

describe('counter-service', () => {
  it('should initalize with value 0', () => {
    const counterService: CounterService = new CounterService();
    expect(counterService.counter).toEqual(0);
  });

  it('should increment value by 1', () => {
    const counterService: CounterService = new CounterService();
    counterService.increment();
    expect(counterService.counter).toEqual(1);
  });

  it('should decrement value by 1', () => {
    const counterService: CounterService = new CounterService();
    counterService.decrement();
    expect(counterService.counter).toEqual(-1);
  });

});
