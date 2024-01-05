//1::::::::::::
// class Movie {
//     constructor(title, studio, rating = "PG13"){
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     }

//     getPG(arr){
//         let pgMovies = arr.filter((value) => value.rating == "PG13");
//         console.log(pgMovies);
//     }
// }

// var film = new Movie();

// var arrMovies = [
//     {title:"Avengers", studio: "Marvel Studio", rating:"PG13"},
//     {title:"Harry Potter", studio: "jk Studio", rating:"PG13"},
//     {title:"leo", studio: "7 Studio", rating:"PG13"},
//     {title:"moiye", studio: "356 Studio", rating:"R"}
// ]

// film.getPG(arrMovies);

// -----------------------------------------------------------------------------------------------------------------------

//3::::::::::::
     //write a class "Peron" hold details

// class Person {
//     constructor(name,degree,dept,email){
//         this.name = name;
//         this.degree = degree;
//         this.dept = dept;
//         this.email = email;
//     }
//     getDetails(){
//         console.log(`
//         Name        : ${this.name}
//         Degree      : ${this.degree}
//         Department  : ${this.dept}
//         EmailId     : ${this.email}
//         `)
//     }
// }

// var person1 = new Person('Dhayanithi','Bsc','Computer Science','dhayanithi1330@email.com');

// person1.getDetails();

// -----------------------------------------------------------------------------------------------------------------------

//4: write a class calculate the uber price?

// class UberPrice {
//     constructor(kilometer){
//         this.km = kilometer;
//         if (this.km > 0){
//             this.price = (this.km * 100) * 10 / 100;
//         }else{
//             console.log("put proper km")
//         }
//         this.gst = this.price * 9 /100;
//         this.total = this.price + this.gst ;
//     }
//     getPrice(){
//         console.log(`
//         Distence     : ${this.km} km
//         Price        : ${this.price} rs 
//         GST          : ${this.gst} rs
//         Total Price  : ${this.total} rs
//         `)
//     }
// }
// var uber = new UberPrice(3);
// uber.getPrice(); 

// -----------------------------------------------------------------------------------------------------------------------
