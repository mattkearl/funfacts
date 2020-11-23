  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBWelKZ0nhXCnw-OkRR1Wz7E4tjIGxgp5Y",
    authDomain: "funfacts-95096.firebaseapp.com",
    databaseURL: "https://funfacts-95096.firebaseio.com",
    projectId: "funfacts-95096",
    storageBucket: "funfacts-95096.appspot.com",
    messagingSenderId: "618199659054",
    appId: "1:618199659054:web:51e9c44717946c15d2a5bf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log("firebase data: ", firebase)

chrome.runtime.onMessage.addListener((msg, sender, res)=>{
    if(msg.command == "fetch"){
        firebase.database().ref("funfacts").once("value").then( function (funfactsData){
            res({type: "result", data: funfactsData.val(), request: msg})
        })
    }
    return true;
})