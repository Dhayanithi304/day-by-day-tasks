// class Dragon {
//     constructor (name){
//         this.name = name;
//     }
//     get name1(){
//         return this.name;
//     }

// set name1(newName){
//     this.name = newName;
// }
// }

// var obj = new Dragon('Dragon');
// console.log("before",obj.name1);
// obj.name1 = 'Dracarus';
// console.log("after",obj.name1);

// -----------------------------------------------------------------------------------------------------------------------

//map::::::::::::::
// var input = [2,3,4,5,5,6,7,8,9];
// var output = input.map((n) => n * 2 );
// console.log(output);

// input.map(function(num){
//     return n * 3
// }
//      );
//           console.log(input);

// -----------------------------------------------------------------------------------------------------------------------

//filter::::::::::::::::
// var array = [2,3,4,5,6,7,8,9]; 
// var result = array.filter((num) => num % 2 ===  0 );
// console.log(result);

// -----------------------------------------------------------------------------------------------------------------------

//reduce:::::::::::::::
var array = [1,2,3,4,5,6,7,8,9];
var result = array.reduce((accumlator, current) => accumlator + current,0);
console.log(result);
