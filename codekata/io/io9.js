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

    let array = userInput[0].split('');
    // for (let index in array){
    //     console.log(array[index]);
    // }

    for (let index = 0;index < array.length ; index++){
        console.log(array[index]);
    }
    
    //end-here
});