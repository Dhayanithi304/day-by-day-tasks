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

let month = parseInt(userInput[0]);
    
if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
    console.log('31');
} else if (month == 4 || month == 6 || month == 9 || month == 11 ){
    console.log('30');
} else if (month == 2){
    console.log('28');
} else {
    console.log('error');
}

    //end-here
});