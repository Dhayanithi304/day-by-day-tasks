var h1 = document.getElementById("h1");

h1.addEventListener("mouseover", () => {
  h1.style.color = "darkblue";
});

h1.addEventListener("mouseout", () => {
  h1.style.color = "dodgerblue";
});

var fstSpan = document.getElementById("fstspan");
fstSpan.style.fontWeight = "Bold";
var qus = prompt("Enter your name:", "Maiyle");
fstSpan.innerText = "Entered Name: " + qus;

var body = document.getElementById("bodyid");
body.addEventListener("click", () => getCoordinates(event));

function getCoordinates(event) {
  var x = event.clientX;
  var y = event.clientY;
  var text = "X Coords: " + x + ", Y Coords: " + y;
  document.getElementById("coordi").innerText = text;
}

var textInput = document.getElementById("textarea");
var charCount = document.getElementById("charCount");

textInput.addEventListener("input", () => {
  var inputvalue = textInput.value.length;
  charCount.innerText = `(${inputvalue}/300)`;
  if (inputvalue == 300) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "black";
  }
});

var binaryButton = document.getElementById("binaryButton");
var HexadecimalButton = document.getElementById("HexadecimalButton");

binaryButton.addEventListener("click", () => {
  var decimalInput = document.getElementById("decimalInput").value;
  var BinaryOutput = document.getElementById("BinaryOutput");

  if (!isNaN(decimalInput)) {
    const binaryValue = (decimalInput >>> 0).toString(2);
    BinaryOutput.innerText = `Binary: ${binaryValue}`;
  } else {
    BinaryOutput.innerText =
      "Invalid input. Please enter a valid decimal number.";
  }
});

HexadecimalButton.addEventListener("click", () => {
  var decimalInput = document.getElementById("decimalInput").value;
  var HexadecimalOutput = document.getElementById("HexadecimalOutput");

  if (!isNaN(decimalInput)) {
    const hexadecimalValue = (decimalInput >>> 0).toString(16).toUpperCase();
    HexadecimalOutput.innerText = `Hexadecimal: ${hexadecimalValue}`;
  } else {
    HexadecimalOutput.innerText =
      "Invalid input. Please enter a valid decimal number.";
  }
});
