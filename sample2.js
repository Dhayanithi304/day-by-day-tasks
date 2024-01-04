// //1. parse JSON string
// //2. compare the no of properties(keys)
// //3. compare the actual properties(keys)

// var JSON1 = '{"name": "dhaya", "age": 20, "bloodgroup" : "O+ positive"}';
// var JSON2 = '{"name": "vikram", "age": 30, "bloodgroup" : "A+ positive"}';


// function campare(){
//     //1.
//     var obj1 =JSON.parse(JSON1);
//     var obj2 =JSON.parse(JSON2);

//     //2. 
//     if(Object.keys(obj1).length !== Object.keys(obj2).length){
//         return false;
//     }
    
//     //3.
//     for (var key in obj1){
//         if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]){
//         return false; 
//         }
//     }

//     return true; 
// }

// const result = campare();
// console.log(result);



// let obj1 = {name:'Person1', age:23};
// let obj2 = {age:23, name:'Person1'};

// let json1 =JSON.stringify(obj1);
// let json2 =JSON.stringify(obj2);

// function campare() {
//     for(let key in obj1){
//         if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]){
//             return false;
//         }
//     }  
  
//     return true;
// } 
// let result = campare();
// console.log(result);



let obj1 = {name:'pradeep',age:32};
let obj2 = {name:'dinesh',age:22};
let obj3 = {name:'oviya',age:28};
let obj4 = {name:'kavin',age:34};

let arrObj = [obj1, obj2, obj3, obj4];

// // for (let i= 0; i < arrObj.length; i++){
// //     console.log(arrObj[i].name, arrObj[i].age);
// // }

// for(var key in arrObj){
//     console.log(arrObj[key].name, arrObj[key].age);
// }

for(let i =0 ;i <arrObj.length; i++){
    Object.keys(arrObj[i]).forEach(key => {  
    console.log(key, arrObj[i][key]);
    });
}
