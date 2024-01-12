var h1 = document.getElementById("h1");

setTimeout(count10,2000);
setTimeout(count9,3000);
setTimeout(count8,4000);
setTimeout(count7,5000);
setTimeout(count6,6000);
setTimeout(count5,7000);
setTimeout(count4,8000);
setTimeout(count3,9000);
setTimeout(count2,10000);
setTimeout(count1,11000);
setTimeout(done,12000);

function count10(){
  h1.innerText = "10";
};
function count9(){
  h1.innerText = "9";
  };
function count8(){
  h1.innerText = "8";
};
function count7(){
  h1.innerText = "7";
};
function count6(){
  h1.innerText = "6";
};
function count5(){
  h1.innerText = "5";
};
function count4(){
  h1.innerText = "4";
};
function count3(){
  h1.innerText = "3";
  };
function count2(){
  h1.innerText = "2";
};
function count1(){
  h1.innerText = "1";
};
function done(){
  h1.innerText = "HAVE A GOOD DAY :)"; 
  h1.style.fontSize = "60px"
};
