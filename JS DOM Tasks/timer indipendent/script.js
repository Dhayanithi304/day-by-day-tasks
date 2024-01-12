var h1 = document.getElementById("h1");

setTimeout(() => {
  h1.innerText = "10";
  console.log("10");
  setTimeout(() => {
    h1.innerText = "9";
    console.log("9");
    setTimeout(() => {
      h1.innerText = "8";
      console.log("8");
      setTimeout(() => {
        h1.innerText = "7";
        console.log("7");
        setTimeout(() => {
          h1.innerText = "6";
          console.log("6");
          setTimeout(() => {
            h1.innerText = "5";
            console.log("5");
            setTimeout(() => {
              h1.innerText = "4";
              console.log("4");
              setTimeout(() => {
                h1.innerText = "3";
                console.log("3");
                setTimeout(() => {
                  h1.innerText = "2";
                  console.log("2");
                  setTimeout(() => {
                    h1.innerText = "1";
                    console.log("1");
                    setTimeout(() => {
                      h1.innerText = "HAPPY INDIPENDENT!!";
                      console.log("HAPPY INDIPENDENT!!");
                      h1.style.fontSize = "50px";
                    }, 5500);
                  }, 5000);
                }, 4500);
              }, 4000);
            }, 3500);
          }, 3000);
        }, 2500);
      }, 2000);
    }, 1500);
  }, 1000);
}), 500;
