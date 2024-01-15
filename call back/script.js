var h1 = document.getElementById("h1");

count10(count9);

function count10(callback) {
  setTimeout(() => {
    h1.innerText = "10";
    callback();
  }, 2000);
}
function count9() {
  setTimeout(() => {
    h1.innerText = "9";
    count8(count7);
  }, 1000);
}

function count8(callback) {
  setTimeout(() => {
    h1.innerText = "8";
    callback();
  }, 1000);
}

function count7() {
  setTimeout(() => {
    h1.innerText = "7";
    count6(count5);
  }, 1000);
}
function count6(callback) {
  setTimeout(() => {
    h1.innerText = "6";
    callback();
  }, 1000);
}
function count5() {
  setTimeout(() => {
    h1.innerText = "5";
    count4(count3);
  }, 1000);
}
function count4(callback) {
  setTimeout(() => {
    h1.innerText = "4";
    callback();
  }, 1000);
}
function count3() {
  setTimeout(() => {
    h1.innerText = "3";
    count2(count1);
  }, 1000);
}
function count2(callback) {
  setTimeout(() => {
    h1.innerText = "2";
    callback();
  }, 1000);
}
function count1() {
  setTimeout(() => {
    h1.innerText = "1";
    done();
  }, 1000);
}
function done() {
  setTimeout(() => {
    h1.innerText = "HAVE A GOOD DAY :)";
    h1.style.fontSize = "60px";
  }, 1000);
}
