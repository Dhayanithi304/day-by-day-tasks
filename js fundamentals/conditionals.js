/*
    6.Conditional Operators (Ternary Operator)

    ?
    :
*/


// let a = 25;
// a /= 5
// console.log(a)

// let age = 18;

// age >=18 ? console.log('eligible to vote') : console.log('not eligible to vote');


// let age = 18;
// let hasAadhar = true;
// let hasVoterID = false;

// (age >= 18 && (hasAadhar || hasVoterID)) ? console.log('eligible to vote') : console.log('not eligible to vote');

/*
    consditional statements

    1. if statement
    2. if...else statement
    3. if...else if...else (multiple if...else statemnt)
    4. nested if...else statements
*/

// let age = 18;
// let hasAadhar = true;
// let hasVoterID = false;

// if (age >= 18 && (hasAadhar || hasVoterID)){
// console.log('eligible to vote');
// }else{
// console.log('not eligible to vote');
// }


// // to cheak whether the number is greater then 0
// let number = 5;

// if (number > 0) {
//     console.log('number is positive');
// } else if(number < 0){
//     console.log('number is negative');
// } else {
//     console.log('number is zero');
// }

/*
    exersise

    let number = 3;
    number > 0 ? console.log('number is positive') : number < 0 ? console.log('number is negative') : console.log('number is zero'); 
*/

/*
    nested if...else statements 
*/

// let number = 5;

// if (number > 0) {
//     console.log('number is positive');
// } else {
//     if (number < 0){
//         console.log('number is negative');
//     } else {
//         console.log('number is zero');
//     }
// }


// let a = 34;
// let b = 54;  
// let c = 67;

// if((a > b) && (a > c)) {
//     console.log(a, 'is a greatest number');
// } else {
//     if (b > c){
//         console.log(b, 'is a greatest number');
//     } else {
//         console.log(c, 'is a greatest number');
//     }
// }


//switch case statements

// let number = -3;

// switch (number > 0){
//     case true:
//         console.log(number, 'is positive');
//         break;
//     case false:
//         console.log(number, 'is negative');
//         break;
// }


// let option = 4;

// switch(option){
//     case 1:
//         console.log('fst option');
//         break;
//     case 2:
//         console.log('sec option');
//         break;
//     case 3:
//         console.log('third option');
//         break;
//     default:
//         console.log('other options')
//         break;
// }

// let number = 6;

// switch(number) {
//     case (number > 0) :
//         console.log('positive');
//         break;
//     case (number < 0):
//         console.log('negative');
//         break;
//     case (number == 0):
//         console.log('zero');
//         break;
// }

// console.log(new Date().getDay());
/*
    jan 1: 31
    feb 2: 28/29 (leap year)
    mar 3: 31 
    apr 4: 30
    may 5: 31
    jun 6: 30
    jul 7: 31
    aug 8: 31
    sep 9: 30
    oct 10: 31
    nov 11: 30
    dec 12: 31
*/
// let month = 41;

// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log('31 days');
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log('30 days');
//         break;
//     case 2:
//         console.log('28/29 days');
//         break;
            
// }



// if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
//     console.log('31 days');
// } else if (month == 4 || month == 6 || month == 9 || month == 11 ){
//     console.log('30 days');
// } else if (month == 2){
//     console.log('28/29 days');
// } else {
//     console.log('error');
// }


// let  currentDate = new Date();
// console.log(currentDate.getFullYear());
// console.log(currentDate.getHours());


