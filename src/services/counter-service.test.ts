import { CounterService } from './counter-service';

describe('counter-service', () => {
  it('should initalize with value 0', () => {
    const counterService: CounterService = new CounterService();
    chai.expect(counterService.counter).to.be.equal(0);
  });

  it('should increment value by 1', () => {
    const counterService: CounterService = new CounterService();
    counterService.increment();
    chai.expect(counterService.counter).to.be.equal(1);
  });

  it('should decrement value by 1', () => {
    const counterService: CounterService = new CounterService();
    counterService.decrement();
    chai.expect(counterService.counter).to.be.equal(-1);
  });

});
