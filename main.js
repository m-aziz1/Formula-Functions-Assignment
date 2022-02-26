//FORMULA FUNCTION ASSIGNMENT

//Document Elements
const calcBtn = document.getElementById("calc-btn");
const nthTermEl = document.getElementById("nth-term");
const firstTermEl = document.getElementById("first-term");
const termNumberEl = document.getElementById("term-number");
const differenceEl = document.getElementById("difference");
const outputEl = document.getElementById("output");

//Event Listener
calcBtn.addEventListener("click", calculate);

//Functions
function calculate() {
  //Input
  let nthTerm = +nthTermEl.value;
  let firstTerm = +firstTermEl.value;
  let termNumber = +termNumberEl.value;
  let difference = +differenceEl.value;

  //Process and Output
  //prettier-ignore
  if (nthTermEl.value === "find") {
    outputEl.innerHTML = sequenceFormula(0, nthTerm, firstTerm, termNumber, difference);
  } else if (firstTermEl.value === "find") {
    outputEl.innerHTML = sequenceFormula(1, nthTerm, firstTerm, termNumber, difference);
  } else if (termNumberEl.value === "find") {
    outputEl.innerHTML = sequenceFormula(2, nthTerm, firstTerm, termNumber, difference);
  } else if (differenceEl.value === "find") {
    outputEl.innerHTML = sequenceFormula(3, nthTerm, firstTerm, termNumber, difference);
  }
}

//Formula and Manipulation
function sequenceFormula(find, a, a1, n, d) {
  switch (find) {
    case 0:
      return a1 + (n - 1) * d;
      break;
    case 1:
      return a - (n - 1) * d;
      break;
    case 2:
      return (a - a1) / d + 1;
      break;
    case 3:
      return (a - a1) / (n - 1);
  }
}
