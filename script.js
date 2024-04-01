//Var -define the 4 types of buttons on the calculator

const display = document.querySelector(".display");

const buttons = document.querySelectorAll(".button");
console.dir(buttons);

const numberButtons = document.querySelectorAll(".number-button");
console.dir(numberButtons);

const operationButtons = document.getElementsByClassName("operation-button");
console.dir(operationButtons);

const equalsButton = document.getElementById("equals");
console.dir(equalsButton);

const clearButton = document.getElementById("clear");
console.dir(clearButton);

const historyDisplay = document.querySelector(".history-list");


//Clear button

function clearDisplay() {
  display.textContent = "";
}

clearButton.addEventListener("click", clearDisplay);


//Show what's displayed. It iterates through array of what's clicked on (represented by button) and for each adds event listener,and  +- adds on text content of what's clicked to what's been clicked already
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    display.textContent += this.textContent;
  });
});


//Calculate

function calculate() {
  display.textContent = eval(display.textContent);
  console.log(memory);
}

//when we press equal button we want to store the info types in calculator to calculator screen.
//We then want to calculate what was input. The result of the evaluation is then assigned back to the textContent of the display element-updating the value
//then we want to have that added as a newHistorElement under history list
//first we create h2 element on HTML for newHistoryElement and then define what text content should be 
//then we want to make sure it's appended to the history list
//then we create button for delete
//then we append it next to newHistoryElement and style it with marginLeft to space it out
//then we add an ad event listener so it deletes the newHistoryElement once clicked

equalsButton.addEventListener("click", function () {
  //store displayed content to memory
  memory = display.textContent;
  //run calculation
  calculate();
  //create newHistoryElement in list and append
  const newHistoryElement = document.createElement("h2");
  historyDisplay.appendChild(newHistoryElement);
  newHistoryElement.textContent = `${memory} = ${eval(display.textContent)}`;
  doubleClickHandler(newHistoryElement, memory);
 
  //delete button
  deleteButton(newHistoryElement);

});

function deleteButton (newHistoryElement) {
  const deleteButton = document.createElement("button");
  newHistoryElement.appendChild(deleteButton);
  deleteButton.textContent = "delete";
  deleteButton.style.marginLeft = "10px"
  deleteButton.addEventListener("click", function () {
    newHistoryElement.remove()
  })
}
 
function doubleClickHandler(newHistoryElement, memory) {
  newHistoryElement.addEventListener("dblclick", function () {
    console.log(memory);
    display.textContent = `${eval(memory)}`

  });
}

//Show answer


//clear button ;

const clearAllHistoryBtn = document.querySelector(".history-buttons");
function deleteAll() {
  historyDisplay.innerHTML = "";
}
clearAllHistoryBtn.addEventListener("click", deleteAll);

//Dark Mode
const body = document.querySelector("body");
const checkbox = document.querySelector(".switch");
function makeDark() {
  body.classList.toggle("dark");
}
checkbox.addEventListener("change", makeDark);
