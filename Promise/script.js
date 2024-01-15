var xhr = new XMLHttpRequest();

        var method = "GET";
        var url = "https://restcountries.com/v3.1/all";

        //open the Request
        xhr.open(method, url);

        xhr.onload = function (){
        if(xhr.status === 200){
            var details = JSON.parse(xhr.responseText);
            console.log(details);

            //1::get all the countries from asia continent/ region using filter function
            // var result = details.filter((item) => item.region ==='Asia');
            // console.log(result);        
            
            //2::get all the countries with a population of less than 2 lakhs using filter function
            // var result = details.filter((item) => item.population < 200000 );
            // console.log(result);        
            
            //3::print the following detals name, capital, flag using forEach function
            // Object.entries(details).forEach((key) => {
            //     key.name
            //     console.log(key);
            // })
            for(i=0;i < details.length; i++){
                console.log(details[i].flags);
                console.log(details[i].name);

                var img1 = document.getElementById("img1");
                img1.setAttribute("src",details[1].flag);
                var card1 = document.getElementById("card1");
                card1.innerText = details[1].name.common;
            }

            //4::print the total population of countries using reduce function
            // var result = details.reduce((a , b) => a + b.population, 0);
            // console.log(result);

            //5::Print the country which users US Dollers as currency
            // for(let i=0; i < details.length; i++){
            //         if(details[i].currencies != undefined ){
            //             Object.keys(details[i].currencies).forEach((key) => {
            //                 if(key == "USD"){
            //                     console.log(key, details[i].currencies[key]);            
            //                 }
            //             });
            //     }
            //     }
            }
        else {
            console.log('Request Failed', xhr.status);
        }
        
    };

        xhr.send();
