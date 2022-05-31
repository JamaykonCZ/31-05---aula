class CalculatorController {
  num: number;

  constructor(num: number) {
    this.num = num;
  }

  add(num2: number) {
    this.num = this.num + num2;
  }

  subtract(num2: number) {
    this.num = this.num - num2;
  }
}

export default CalculatorController;
