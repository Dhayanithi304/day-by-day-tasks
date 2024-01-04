// function add() {
//     const x = 30;
//     const y = 20;
//     if (x <= y){
//         console.log(x + y);
//     } else {
//         console.log(x - y);
//     }
// }

// add();

// -----------------------------------------------------------------------------------------------------------------------

///spread operator:::::::::::::::
// function getsum(a, b, c, d) {
//     return a + b + c + d;
// }

// var array = [13,582,398,48];

// var result = getsum(...array);
// console.log(result);

// -----------------------------------------------------------------------------------------------------------------------

//rest parameter:::::::::::::::::
// function sum(...array) {
//     var result = 0;
//     for(i = 0; i < array.length; i++){
//         result += array[i];
//     }
//     console.log(result);
// }

// sum(52,25,32,6536,34,64,6);

// -----------------------------------------------------------------------------------------------------------------------

// function string(...array) {
//     var result = '';
//     for(i = 0; i < array.length; i++){
//         result = result + ' ' + array[i];
//     }
//     console.log(result);
// }

// string('hi','hello','sir','da','dai');

// -----------------------------------------------------------------------------------------------------------------------

//object destruturing::::::::::::::
// var obj = {name: 'dhayanithi', age: 20, city:'mamallapuram'}

// var { name, age, city } = obj;
// console.log(name,age,city);


//array destruturing
// var obj = [1,3,3,4,4,5,5,56]

// var [...obj] = obj;
// console.log(...obj);

// -----------------------------------------------------------------------------------------------------------------------

//object property short hand
// var name = 'dhayanithi';
// var age = 23;
// var city = 'mamalla';
// var role = 'devolepor';
// var obj = {name, age, city, role};
// console.log(obj);
