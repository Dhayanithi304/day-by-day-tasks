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

    //1/4(root of 3 * a2)
    let a = parseInt(userInput[0]);
    let result = (1/4) * ((3**0.5) * (a**2));
    
    console.log(result.toFixed(2));

    //end-here
});