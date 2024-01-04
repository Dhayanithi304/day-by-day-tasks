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


    let number = parseInt(userInput[0]);
    let result = number;
    
    number = number - 1;

    while (number!=0){
        result = result * number;
        number = number - 1;
    }

    console.log(result);
    //end-here
});