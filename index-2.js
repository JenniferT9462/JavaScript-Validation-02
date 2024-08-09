console.log("I work!!");
// A function to check if a string is less than 5 characters 
// and return 'true' if it is and 'false' if it is longer.
// It has an argument called name...This represents the string
// that you will use to pass thru this function when you call it.
function willMarryEarly(name) {
    if (name.length < 5) {
        return true;
    } else {
        return false;
    }
}
//Test
// let result = willMarryEarly("Jennifer"); 
// console.log(result);

//Function to see if the name's length is longer than 7 characters and returns true or false.
function willMarryLate(name) {
    if (name.length > 7) {
        return true;
    }else {
        return false;
    }

}
//Test
// result = willMarryLate("Anna");
// console.log(result);

//Function to see if the name's length is between 5 and 7 characters and returns true or false.
//I thought inclusive meant 5 to 7 characters long. not just 6. So, I used the '=' in my expression.
function onceInALifeTime(name) {
    if (name.length >= 5 && name.length <= 7) {
        return true;
    }else {
        return false;
    }
}
//Test
// result = onceInALifeTime("Shane");
// console.log(result);

//Function to see if the name starts with a "R" and returns true or false. 
//.charAt(0) lets us get the 1st character in the string. Character at index 0. 
function willBeRich(name) {
    if (name.charAt(0) === "R") {
        return true;
    }else {
        return false;
    }

}
//Test
// result = willBeRich("Nicolas");
// console.log(result);

//Function to see if the name has an "i".
// I used .match and search for "i". Using a global case-insensitive search(/i/gi) 
//regular expression instead of a string.
function willFallInLove(name) {
    if (name.match(/i/gi)) {
        return true;
    }else {
        return false;
    }
}
//Test
// result = willFallInLove("Daisy");
// console.log(result);

// I wanted a prompt() to work in node, I installed prompt-sync to nmp for it to work. 
// It is deprecated now but, was using it to test. And just curious.
// const prompt = require('prompt-sync')();
//Ask user their name...this will prompt you in the terminal and define as yourName.
// let yourName = prompt("What is your first name?");

// tellFortune function takes a string as an argument and returns a string into the console 
// if the results from the 5 functions above are true.
 function tellFortune(theName) {
    let result1 = willMarryEarly(theName); //Get result from willMarryEarly function true or false
    let result2 = willMarryLate(theName); //Get result from willMarryLate function true or false
    let result3 = onceInALifeTime(theName); //Get result from onceInALifeTime function true or false
    let result4 = willBeRich(theName);      //Get result from willBeRich function true or false
    let result5 = willFallInLove(theName);  //Get result from willFallInLove function true or false
    if (result1) { //if true
        console.log(`${theName}, You will marry early!`); //Print this
    }else if (result3 && result4 && result5) { //Add extra conditions...Just experimenting. 
        console.log(`${theName}, You will win the lottery, meet the love of your life and get selected to be the first person to live in space!`);
    }else if (result3 && result5) { //Add extra conditions...Just experimenting. 
        console.log(`${theName}, You will meet the love of your life and win the lottery!`);
    }else if (result2) { //if true
        console.log(`${theName}, You may never be married, I'm sad for you. :(`); //Print this
    }else if (result3) { //if true
        console.log(`${theName}, You will get an opportunity of a lifetime! Soon, I promise!`); //Print this
    }else if (result4) { //if true
        console.log(`${theName}, You will be very very rich! In knowledge!`); //Print this
    }else if (result5) { //if true
        console.log(`${theName}, You are going to fall in love tonight! Or next week. Outcome not clear.`); //Print this
    }
}
//Calling the tellFortune function and passing strings thru it. Testing different scenarios. 
tellFortune("Jennifer");
tellFortune("Shane");
tellFortune("Anna");
tellFortune("Nicolas"); //Testing between 5 & 7 and 'i'
tellFortune("Richard"); //Testing 'R', 'i' and in between 5 & 7
tellFortune("Rich"); //Testing short name and 'R'
tellFortune("Adia");
tellFortune("Chris"); //Testing between 5 & 7 and 'i'