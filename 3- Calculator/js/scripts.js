const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.currentOperationText = currentOperationText;
    this.previousOperationText = previousOperationText;
    this.currentOperation = "";
  }

  addDigit(digit) {
    if (digit === "." && currentOperationText.innerText.includes(".")) {
      return;
    }

    this.currentOperation = digit;
    this.updateScreen();
  }

  processOperation(operation) {
    if (this.currentOperationText.innerText === "" && operation !== "C") {
      if (this.previousOperationText.innerText !== "") {
        this.changeOperation();
      }
      return;
    }

    let operationValue;
    const previous = +this.previousOperationText.innerText.split(" ")[0];
    const current = +this.currentOperationText.innerText;

    switch (operation) {
      case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "/":
        operationValue = previous / current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "-":
        operationValue = previous - current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "*":
        operationValue = previous * current;
        this.updateScreen(operationValue, operation, current, previous);
        break;        
      case "DEL":
        this.processDelOperation();
        break;  
      case "C":
        this.processCOperation();
        break;     
      case "CE":
        this.processCEOperation();
        break;  
      case "=":
        this.processEqualsOperation();
        break;                                           
      default:
        return;
    }
  }

  updateScreen(operationValue = null, operation = null, current = null, previous = null) {
    if (operationValue === null) {
      this.currentOperationText.innerText += this.currentOperation;
    }
    else {
      if (previous === 0) {
        operationValue = current;
      }
      this.previousOperationText.innerText = `${operationValue} ${operation}`;
      this.currentOperationText.innerText = "";
    }
  }
  changeOperation(operation) {
    const mathOperations = ["*", "/", "-", "+"];
    if (!mathOperations.includes(operation)) {
      return;
    }
    this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
  }
  processDelOperation() {
    this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
  }
  processCEOperation() {
    this.currentOperationText.innerText = "";
  }
  processCOperation() {
    this.currentOperationText.innerText = "";
    this.previousOperationText.innerText = "";
  }
  processEqualsOperation() {
    const operation = previousOperationText.innerText.split(" ")[1];
    this.processOperation(operation);
  }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    }
    else {
      calc.processOperation(value);
    }
  });
});