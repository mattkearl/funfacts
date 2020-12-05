// var funfact = [
//     { fact: "the sky is blue", image: "./assets/image1.jpg" },
//     {
//         fact: "the office and atla are the best shows",
//         image: "./assets/image1.jpg",
//     },
//     { fact: "berlin is in germany", image: "./assets/image1.jpg" },
//     { fact: "printers are mean", image: "./assets/image1.jpg" },
//     { fact: "cheese is tasty", image: "./assets/image1.jpg" },
//     { fact: "it is fall", image: "./assets/image1.jpg" },
//     { fact: "bears are mammals", image: "./assets/image1.jpg" },
// ];

var funFacts = fetch("./facts.json")
    .then((res) => res.json())
    .then((data) => {
        //give the ID to local storage so it can see it
        //localStorage.setItem("ID: ", data.ID); // IDs in fact.json now


        var randomindex = Math.floor(Math.random() * data.length);
        var id = data[randomindex].ID;
<<<<<<< HEAD
=======
        var idsList = ; //list of past ids from local storage
>>>>>>> 76a5c3e9fdb8ae012ccef6703a1c1cc1641e7787

        while ( idsList.includes(id) ) {
            var newrandomindex = Math.floor(Math.random() * data.length);
            id = data[newrandomindex].ID;
            randomindex = newrandomindex;
        }
        
        var p = (document.querySelector("#funfact").innerHTML =
            data[randomindex].Fact); 
        var desc = (document.querySelector("#description").innerHTML =
            data[randomindex].Explanation);
        console.log(data[randomindex].Fact);
        var randomimg = data[randomindex].Image;
        document.body.style.backgroundImage = `url(${randomimg})`;
        var storageID = localStorage.getItem("ID")
        if (storageID = data.ID) {
            newFact()
        }
<<<<<<< HEAD
    });
=======
    });
>>>>>>> 76a5c3e9fdb8ae012ccef6703a1c1cc1641e7787
