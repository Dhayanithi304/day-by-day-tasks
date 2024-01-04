// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input : process.stdin
    // output : process.stdout
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
})

inp.on("close", () => {
    //start-here
    //Your code goes here _ replace the below line with your code logic

    let P = Number((userInput[0]).split(' ')[0]);
    let R = Number((userInput[0]).split(' ')[1]);
    let T = Number((userInput[0]).split(' ')[2]);

   let SI = P * T* (R / 100);
   console.log(SI.toFixed(2));
    //end-here

    // console.log(parseInt(Number((userInput[0]).split(' ')[1])));
});

