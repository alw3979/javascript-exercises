const add = function(num1, num2) {
  return num1 + num2
	
};

const subtract = function(num1, num2) {
  return num1 - num2
	
};

const sum = function(array) {
  let runningTotal = 0

  while (array.length > 0){
    runningTotal = add(runningTotal, array.pop())
  }
  return runningTotal
	
};

const multiply = function(array) {
  let runningTotal = 1
  while (array.length > 0){
    runningTotal = runningTotal * array.pop()
  }
  return runningTotal
};

const power = function(num1, num2) {
  let runningTotal = num1
  for (num2; num2 > 1; num2--) {
    runningTotal=runningTotal * num1
  }
  return runningTotal
	
};

const factorial = function(num) {
  if (num===0) {
    return 1;
  }
  return num * factorial(num-1)
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
