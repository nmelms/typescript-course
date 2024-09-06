function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log("result: ", num);
}
var combinedValues;
combinedValues = add;
combinedValues = printResult;
console.log(combinedValues(16, 8));
