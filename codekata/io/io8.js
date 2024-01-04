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


    // console.log(userInput[0].split(' ')[0]);
    // console.log(userInput[0].split(' ')[1]);
    // console.log(userInput[0].split(' ')[2]);


    // let array = userInput[0].split(' ');
    // console.log(array[0]); 
    // console.log(array[1]); 
    // console.log(array[2]); 


    // let array = userInput[0].split(' ');
    // for(let index = 0; index < array.length; index++){
    //     console.log(array[index]);
    // }


    // let array = userInput[0].split(' ');
    // let index = 0; 
    // while(index < array.length){
    //     console.log(array[index]);
    //     index++;
    // }


    // let array = userInput[0].split(' ');
    // let index = 0; 
    // while(index < array.length){
    //     console.log(array[index]);
    //     index++;
    // }


    // let array = userInput[0].split(' ');
    // let index = 0; 
    // do {
    //     console.log(array[index]);
    //     index++;
    // }
    // while(index < array.length)

    // let array = userInput[0].split(' ');
    // for (let value of array){
    //     console.log(value);
    // }

    let array = userInput[0].split(' ');
    for (let index in array){
        console.log(array[index]);
    }

    // array.forEach(value => {
    //     console.log(value);
    // });

    // let printer = (value, index, array) => {
    //     console.log(value, index, array, array[index]);
    // }
    // array.forEach(printer);


    // end-here
});