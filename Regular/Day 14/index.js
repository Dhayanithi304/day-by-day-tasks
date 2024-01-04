var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
window.scrollBy(0, 100);
console.log("window width : ", windowWidth);
console.log("window Height : ", windowHeight);

function toTop() {
  window.scrollTo(0, 0);
}
// setTimeout(() => {
//     window.scrollTo(0,300)
// },3000);

// setInterval(()=>{
//     window.scrollTo(0,100);
// },4000);

// console.log(window.location.href);

var name = prompt("Enter your name", "none");
console.log("Enter name :", name);
alert("check your name in console");
var result = confirm("Confirm inputs"); 
console.log("$$$$$$",result);   