// var funFacts = fetch("facts.json")
//     .then((res) => res.json())
//     .then((data) => {
//         var randomindex = Math.floor(Math.random() * data.length);
//         var p = (document.querySelector("#funfact").innerHTML =
//             data[randomindex].Fact);
//         var desc = (document.querySelector("#description").innerHTML =
//             data[randomindex].Explanation);
//         console.log(data[randomindex].Fact);
//         var randomimg = data[randomindex].Image;
//         document.body.style.backgroundImage = `url(${randomimg})`;
//     });

/*
//*https://developer.chrome.com/apps/runtime
[ ] Create a function that sends a message to our background page
[ ] Store the response
[ ] Display the data we got from response
*/

function retrieveFunFacts(){
    chrome.runtime.sendMessage({command: "fetch", data: {}}, response =>{
        var funfacts = response.data
        console.log(funfacts)
        var randomIndex = Math.floor(Math.random() * funfacts.length);
        document.querySelector("#funfact").innerHTML = funfacts[randomIndex].fact;
        document.querySelector("#description").innerHTML = funfacts[randomIndex].explanation;
        document.body.style.backgroundImage = `url(${funfacts[randomIndex].image})`;
    })
}
retrieveFunFacts()


//Need to add a localStorage.setItem() in the above function


// function allStorage() {

//     var archive = [],
//         keys = Object.keys(localStorage),
//         i = 0, key;

//     for (; key = keys[i]; i++) {
//         archive.push( key + '=' + localStorage.getItem(key));
//     }

//     document.getElementById("").innerHTML = archive;
//     console.log(archive)
//     var count = 0
//     var id = localStorage.getItem("Id" + (count += 1));
//     if (data[randomIndex].id == id){
//         getNewFact()
//     }
// }