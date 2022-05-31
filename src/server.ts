'use strict';

import CalculatorController from './controllers/CalculatorController';

function run() {
  const calculator = new CalculatorController(10);

  calculator.add(20);

  calculator.subtract(10);

  console.log(calculator.num);
}

run();
