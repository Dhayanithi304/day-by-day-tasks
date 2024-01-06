//get the number inputs and result element
var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var resultElement = document.getElementById("resultvalue");

//get the operation buttons
var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");

//Add event listener to the button
addButton.addEventListener("click", () => calculation("add"));
subtractButton.addEventListener("click", () => calculation("subtract"));
multiplyButton.addEventListener("click", () => calculation("multiply"));
divideButton.addEventListener("click", () => calculation("divide"));


function calculation(operation) {
  var num1 = Number(num1Input.value);
  var num2 = Number(num2Input.value);
  var result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    default:
      result = "Invalid Numbers or Opetration";
  }
  resultElement.textContent = result;
}
