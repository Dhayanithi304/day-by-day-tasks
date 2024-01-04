//for given JSON iterates over all for loops (forloop, for.. in, for.. of, for..Each)?
//1.for loop
// var json = [{"name":"Dhayanithi", "age": 20,"email":"dhayanithi1330@mail.com" }];
// for(var i=0;i<json.length;i++){
//     var obj = json[i];
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.email);
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//2.for..in
// var jsonstr = `{
//     "name":"Dhayanithi", 
//     "age": 20,
//     "city":"chennai",
//     "email":"dhayanithi1330@mail.com" }`;
//     var data = JSON.parse(jsonstr);
// for(var key in data){
//     var value = data[key];
//     console.log(`key: ${key}, value: ${value}`);
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//3.for..of
// var jsonstr = `{
//     "name":"Dhayanithi", 
//     "age": 20,
//     "city":"chennai",
//     "email":"dhayanithi1330@mail.com" }`;
//     var data = JSON.parse(jsonstr);
// for(var [key,value] of Object.entries(data)){
//     console.log(`key: ${key}, value: ${value}`);
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//4.for..Each
// var jsonstr = `{
//     "name":"Dhayanithi", 
//     "age": 20,
//     "city":"chennai",
//     "email":"dhayanithi1330@mail.com" }`;
//     var data = JSON.parse(jsonstr);
//     Object.entries(data).forEach(([key,value])=>{
//         console.log(`key: ${key}, value: ${value}`);  
//     })

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//create your own resume in json format?
// var Resume =[{
//     "name":"Dhayanithi",
//     "Qualification": "Bsc.CS", 
//     "email":"dhayanithi1330@mail.com",
//     "Exprience": "Fresher",
//     "Domin":"devoloper", 
//     "age": "20",
//     "city":"chennai",
// }];     
// Resume.forEach(function() {
//     console.log(Resume);
// })

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
