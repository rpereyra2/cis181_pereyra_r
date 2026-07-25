/*
    Applied Lab 3-2
    Ducky World JavaScript
*/

/*
    Displays a welcome message.
*/
function welcomeCustomer() 
{

}

/*
    Prompts the user for their name and displays a greeting.
*/
function greetCustomer() {

}

/*
    Calculates and displays the total number of ducks ordered.
*/
function calculateTotalDucks() {/*
    Applied Lab 3-2
    Ducky World JavaScript
*/


function welcomeCustomer() {
    alert("Welcome to Ducky World!");
}

/*
    Prompts the user for their name and displays a greeting.
*/
function greetCustomer() {
    let userName = prompt("What is your name?");
    
    if (userName && userName.trim() !== "") {
        alert("Hello, " + userName + "!");
    } else {
        alert("Hello, customer!");
    }
    <button onclick="welcomeMessage()">Welcome Message</button>
<button onclick="customerGreeting()">Customer Greeting</button>
<button onclick="totalDuckCount()">Total Duck Count</button>

}

/*
    Calculates and displays the total number of ducks ordered.
*/
function calculateTotalDucks() {
    let yellow = parseInt(document.getElementById("yellow").value) || 0;
    let pink   = parseInt(document.getElementById("pink").value) || 0;
    let blue   = parseInt(document.getElementById("blue").value) || 0;
    let astro  = parseInt(document.getElementById("astro").value) || 0;

    let total = yellow + pink + blue + astro;

    alert("Total ducks ordered: " + total);
}

/*
    Validates the order before submitting the form.
    Return true to allow submission.
    Return false to prevent submission.
*/
function validateOrder() {

    // Quantity validation
    let yellow = parseInt(document.getElementById("yellow").value) || 0;
    let pink   = parseInt(document.getElementById("pink").value) || 0;
    let blue   = parseInt(document.getElementById("blue").value) || 0;
    let astro  = parseInt(document.getElementById("astro").value) || 0;

    if (yellow === 0 && pink === 0 && blue === 0 && astro === 0) {
        alert("Please select at least one duck.");
        return false;
    }

    // Confirmation message
    let answer = confirm("Are you sure you want to place this order?");
    if (answer === false) {
        return false;
    }

    return true;
}


}

/*
    Validates the order before submitting the form.
    Return true to allow submission.
    Return false to prevent submission.
*/
function validateOrder() {

}