// class Degree {
//     getDegree(){
//         return "Bsc"
//     }
// }

// class Person extends Degree {
//     getName() {
//         return "Dhayanithi"
//     }
// }

// var obj = new Person();
// console.log( obj.getName(),obj.getDegree());

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// class Common {
//      getDetails(name){
//         this.name = name;
//         this.degree = "Bsc";
//         this.dept = "Computer Science";
//         this.year = "3rd year";
//         console.log(`
//             ${this.name}
//             ${this.degree}
//             ${this.dept}
//             ${this.year}
//             `);
//      }
// }

// class Person1 extends Common {

// }

// class Person2 extends Common {

// }

// class Person3 extends Common {

// }

// class Person4 extends Common {

// }

// var per1 = new Person1();
// var per2 = new Person2();
// var per3 = new Person3();
// var per4 = new Person4();

// per1.getDetails("Dhayanithi");
// per2.getDetails("Kamesh");
// per3.getDetails("Lachey");
// per4.getDetails("vishnu");

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// class Person1 {
//     constructor() {
//         console.log("constructor Person1 exicuted");
//     }
// }

// class Person2 extends Person1{
//     constructor() {
//         super();
//         console.log("constructor Person1 exicuted");
//     }
// }

// var per = new Person2();

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// class Person {
//     constructor(...name){
//         this.name = name;
//     }

//     getDetails(){
//         return this.name;
//     }
// }

// var per = new Person('naveen');
// console.log(per.getDetails());

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
