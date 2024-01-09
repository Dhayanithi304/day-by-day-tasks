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

var elem = document.documentElement;
var fullscreenB = document.getElementById("FullscreenB");
var ExitscreenB = document.getElementById("ExitscreenB");

fullscreenB.addEventListener("click", () => {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
});

ExitscreenB.addEventListener("click", () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.target.tagName.toLowerCase() != "textarea" &&
    event.target.tagName.toLowerCase() != "input" &&
    event.target.tagName.toLowerCase() != "div" 
  ) {
    if (event.code == "Space") {
      alert("Thank You..!");
      // close();
    } else {
      alert("Invalid Key Pressed");
    }
  }
});

var editable = document.getElementById("editable");

editable.addEventListener("mouseover", () => {
  editable.style.border = "1px dashed blue";
});

editable.addEventListener("mouseout", () => {
  editable.style.border = "1px solid gray";
});

var changeColor = document.getElementById("changeColor");
var changeFontSize = document.getElementById("changeFontSize");

changeColor.addEventListener("click", () => {
  var color = prompt("Enter a color (e.g., red, #00ff00):");
  if (color != null) {
    document.execCommand("foreColor", false, color);
  }
});

changeFontSize.addEventListener("click", () => {
  var fontSize = prompt("Enter a font size (e.g., 16px):");
  if (fontSize != null) {
    document.execCommand("fontSize", false, fontSize);
  }
});

document.getElementById("myForm").addEventListener("submit", (event) => {
  resetErrorMessages();

  var username = document.getElementById("username").value;
  if (username === "") {
    displayError("usernameError", "Username is requried");
    event.preventDefault();
  }
  var password = document.getElementById("password").value;
  if (password === "") {
    displayError("passwordError", "Password is required");
    event.preventDefault();
  }
});

function displayError(elementId, errorMessage) {
  var errorElement = document.getElementById(elementId);
  errorElement.textContent = errorMessage;
}

function resetErrorMessages() {
  var errorElements = document.querySelectorAll(".error");
  errorElements.forEach(function (element) {
    element.textContent = "";
  });
}
