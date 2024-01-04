// 1.print odd numbers in an array
// var inputNumbers = [1,2,3,4,5,6,7,8,9,10];

// var oddNumber = [];
// let oddNum = function () {
//     for (let numbers of inputNumbers){
//         if(numbers % 2 !== 0){
//             oddNumber.push(numbers);
//         }
//     }
//     console.log("input: ",inputNumbers); 
//     console.log("odd numbers: ",oddNumber); 
// }
// oddNum();

// (function () {
//     for (let numbers of inputNumbers){
//         if(numbers % 2 !== 0){
//             oddNumber.push(numbers);
//         }
//     }
//     console.log(oddNumber);
// })();

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//2.convert all the string to title caps in a string array
// let titlecase = function (str) {
//         return str.toLowerCase().split(' ').map(function (word) {
//             return (word.charAt(0).toUpperCase() + word.slice(1));
//         }).join(' ');
// }
// console.log(titlecase('winter is coming'));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//3.sum of all numbers in an array
// var arr = [1,2,3,4,5];
// var sum = function () {
//         let result = 0;
//     for(i = 0; i < arr.length; i++){
//         result += arr[i];
//     }
//     console.log(result);
// }
// sum();

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//4.return all the prime numbers in an array
// var isPrime = function (num) {
//     if (num <=1) return false;
//     for(let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// function findPrimes(arr) {
//     return arr.filter(isPrime);
// }

// const numbers =[1,2,3,4,5,6,7,8,9];
// const primeNumbers =findPrimes(numbers);
// console.log(primeNumbers);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//5.retrun all the palindrome in an array
// var strArr = ["cancer", "level", "racecar", "califonia"];
// var getPalindrome = function(arr) {
//     return arr.filter((str) => {
//     var reversedStr = str.split("").reverse().join("");
//     return str === reversedStr;          
//     });
// };
// console.log(getPalindrome(strArr));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//6. return median of two sorted arrays of the same size?
// var findMedian  = function(arr1,arr2) {
//     var mergeArr = [...arr1, ...arr2].sort((a, b) => a - b);
//     var mid = Math.floor(mergeArr.length / 2);
//     return mergeArr.length % 2 != 0 ? mergeArr[mid] : (mergeArr[mid = 1] + mergeArr[mid]) / 2;
// };
// console.log(findMedian([1,3,5],[2,4,6]));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//7:Remove duplicate from an array
// var array = [1,2,2,3,5,6,7,3];
// var uniqueArr = function(arr){
//     return arr.filter((item, index) => {
//         return arr.indexOf(item) === index;
//     })
// };

// console.log(uniqueArr(array));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//8:rotate an array by k times
// var arr = [1,2,3,4,5];
// var k = 2;
// var rotatedArr = (function(arr, k){
//     var n = arr.length;
//     var rotation = k % n;
//     var firstPart = arr.slice(rotation);
//     var secPart = arr.slice(0, rotation);
//     return firstPart.concat(secPart);
// })(arr, k);
// console.log(rotatedArr);