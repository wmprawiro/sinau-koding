const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

let previousNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
    // agar awalnya tidak 0
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
}

const operators = document.querySelectorAll(".operator");

const inputOperator = (operator) => {
    // jika melakukan chain operator misalnya 5 + 2 - 3
    if (previousNumber !== "" && calculationOperator !== "") {
        calculate();
    }
    previousNumber = currentNumber;
    calculationOperator = operator;
    currentNumber = "0";
};

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (event) => {
    inputOperator(event.target.value);
    updateScreen(previousNumber + " " + event.target.value);
  });
}

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
    let result = "";
    // merubah string menjadi desimal
    let prev = parseFloat(previousNumber);
    let curr = parseFloat(currentNumber);
    switch (calculationOperator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "x":
      result = prev * curr;
      break;
    case "/":
      result = prev / curr;
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

const clearAll = () => {
  previousNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

const clearSign = document.querySelector(".all-clear");
clearSign.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

// Fungsi Desimal
const decimal = document.querySelector(".decimal");

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

// Fungsi Persentase
const percentage = document.querySelector(".percentage");

percentage.addEventListener("click", () => {
  currentNumber = (parseFloat(currentNumber) / 100).toString();
  updateScreen(currentNumber);
});
// Wahyu Maulana Prawiro