
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// genrates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier, 
  prevResult, 
  operationNumber, 
  newResult
  ) { 
    const logEntry = {
      operation: operationIdentifier,
      prevResult: prevResult,
      number: operationNumber, 
      result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enterNumber = getUserNumberInput();
    const initialResult = currentResult;
    //currentResult = currentResult + enterNumber;
    currentResult += enterNumber;
    createAndWriteOutput('+', initialResult, enterNumber);
    writeToLog('ADD', initialResult, enterNumber, currentResult);
}

function subtract() {
    const enterNumber = getUserNumberInput();  
    const initialResult = currentResult;
    currentResult -= enterNumber;
    createAndWriteOutput('-', initialResult, enterNumber);
    writeToLog('SUBTRACT', initialResult, enterNumber, currentResult);
}

function multiply() {
    const enterNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enterNumber;
    createAndWriteOutput('*', initialResult, enterNumber);
    writeToLog('MULTIPLY', initialResult, enterNumber, currentResult);
}

function divide() {
    const enterNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enterNumber;
    createAndWriteOutput('/', initialResult, enterNumber);
    writeToLog('DIVIDE', initialResult, enterNumber, currentResult);
}

typeof addEventListener


document.addBtn.addEventListener('click', add);
document.subtractBtn.addEventListener('click', subtract);
document.ultiplyBtn.addEventListener('click', multiply);
document.divideBtn.addEventListener('click', divide);




