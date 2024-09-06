function add(num1: number, num2: number) {
  return num1 + num2;
}

function printResult(num: number) {
  console.log("result: ", num);
}

let combinedValues: (a: number, b: number) => number;
combinedValues = add;
// combinedValues = printResult;

console.log(combinedValues(16, 8));
