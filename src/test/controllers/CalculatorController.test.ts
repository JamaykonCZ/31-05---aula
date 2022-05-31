import CalculatorController from '../../controllers/CalculatorController';

describe('CalculatorController', () => {
  it('Should add value', () => {
    const calculator = new CalculatorController(10);

    expect(calculator.num).toEqual(10);

    calculator.add(10);

    expect(calculator.num).toEqual(20);
  });

  it('Should subtract value', () => {
    const calculator = new CalculatorController(10);

    expect(calculator.num).toEqual(10);

    calculator.subtract(10);

    expect(calculator.num).toEqual(0);
  });
});
