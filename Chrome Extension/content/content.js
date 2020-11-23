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
        var funfacts = response.data;
        console.log("funfacts: ", funfacts)

        var archive = allStorage();
        console.log("archive: ", archive);

        if ( archive.length > 32 ) {
            localStorage.clear();
        }

        var randomindex = Math.floor(Math.random() * funfacts.length);

        var funfactid = String(funfacts[randomindex].id);
        console.log("stringID: ", funfactid);

        while ( archive.includes(funfactid) ) {
            console.log("repeat id: ", randomindex)
            randomindex = Math.floor(Math.random() * funfacts.length);
            funfactid = String(funfacts[randomindex].id);
            console.log("try id:", randomindex);
        }

        localStorage.setItem("ID: " + (randomindex + 1), funfacts[randomindex].id); // works

        document.querySelector("#funfact").innerHTML = funfacts[randomindex].fact;
        document.querySelector("#description").innerHTML = funfacts[randomindex].explanation;
        document.body.style.backgroundImage = `url(${funfacts[randomindex].image})`;
    })
}

function allStorage() {
    
    var archive = [],
    keys = Object.keys(localStorage),
    i = 0, key;
    
    for (; key = keys[i]; i++) {
        archive.push(localStorage.getItem(key));
    } // just get the list of value IDs
    
    return archive; 
}

retrieveFunFacts()