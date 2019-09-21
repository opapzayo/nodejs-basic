class Calculator {
  static sum(x, y) {
    return x + y;
  }
  sum2(x, y) {
    return x + y;
  }
  multiply(x, y) {
    return x * y;
  }
}
const cal = new Calculator();
console.log(Calculator.sum(1, 2));
console.log(cal.sum2(2, 3));
console.log(cal.multiply(5, 6));
