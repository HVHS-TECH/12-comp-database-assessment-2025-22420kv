const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c fb_io.mjs',
            'color: blue; background-color: white;');

import { initializeApp }
 from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase }
 from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { getAuth, GoogleAuthProvider, signInWithPopup }
 from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import { ref, set }
 from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

export { fb_authenticate, fb_write};

const FB_GAMECONFIG = {
        apiKey: "AIzaSyCn36qBrPRutqLXCYIyzkyjMQRiYyhRC2Q",
        authDomain: "comp-2025-kyla-van-weele.firebaseapp.com",
        databaseURL: "https://comp-2025-kyla-van-weele-default-rtdb.firebaseio.com",
        projectId: "comp-2025-kyla-van-weele",
        storageBucket: "comp-2025-kyla-van-weele.firebasestorage.app",
        messagingSenderId: "726085363137",
        appId: "1:726085363137:web:32da18f88b84bf19fffb40",
        measurementId: "G-RXDD9GFN2H"
      };

    
var FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
var FB_GAMEDB  = getDatabase(FB_GAMEAPP);
console.log(FB_GAMEDB);


var currentUser = null;
var userId = null;
var emailTemplate = "";
var statusTemplate = "";


function status () {
    console.log('status working..');
}

/***********************************/
// fb_authenticate()
// Called by authenticate Button
// To firebase - cia signInwIthPopup
// Input: n/a
// Return: n/a
/***********************************/
function fb_authenticate() {
    console.log('%c fb_authenticate(): ', 
        'color: ' + COL_C + '; background-color: deepPink'
    );

    status();

    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();
    if (status, fb_authenticate) {
            console.log('user logging in');
            statusTemplate = `
            <div> 
               <p> logging in...</p>
            </div>`
            document.getElementById("statusMessage").innerHTML = statusTemplate;
        } else {
            console.log('user not loggen in');
            return null;
        }
    console.log('logging in...');
    // The following makes Google ask the user to select the account
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });
    

    signInWithPopup(AUTH, PROVIDER).then((result) => {
        currentUser = result.user;
        userId = currentUser.uid;
        console.log('successful login');
        //✅ Code for a successful authentication goes here

        if (status, fb_authenticate) {
            console.log('user loggen in');
            statusTemplate = `
            <div> 
               <p> Thank you for loggin in! You may proceed.</p>
            </div>`
            document.getElementById("statusMessage").innerHTML = statusTemplate;
        } else {
            console.log('user not loggen in');
            return null;
        }
    
    })

    
}


/***********************************/
// fb_writeRecord()
// Called by write record Button
// A record to firebase - via set
// Input: n/a
// Return: n/a
/***********************************/
function fb_write() {
    console.log('%c fb_write(): ',
        'color: ' + COL_C + '; background-color: hotPink'
    );

    if (!currentUser) {
        alert("You must be logged in to proceed!");
        return;
    } else {
        statusTemplate = `
            <div> 
               <p> Submitted! </p>
            </div>`
            document.getElementById("statusMessage").innerHTML = statusTemplate;
    } 

    var name = document.getElementById("name").value;
    var fruit = document.getElementById("favoriteFruit").value;
    var quantity = document.getElementById("fruitQuantity").value;

    const dbReference = ref(FB_GAMEDB, 'users/' + userId);
    set(dbReference, {
        Name: name,
        FavoriteFruit: fruit,
        FruitQuantity: quantity
    }).then(() => {  
        console.log('successfull write');
        //✅ Code for a successful write goes here
    }).catch((error) => {
        console.log(error);
        //❌ Code for a write error goes here
    });
 
}
