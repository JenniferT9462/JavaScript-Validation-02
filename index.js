console.log("hello from index.js");
let myName = "Jennifer";
// 1st if statement
if (myName.length > 7){
    console.log("will marry late in life");
}else if (myName.length < 5) {
    console.log("will marry within a year");
}else if (myName.length >= 5 && myName.length <= 7) {
    console.log("will encounter a once-in-a-lifetime opportunity");
}
// 2nd if statement
if (myName.charAt(0) === "R") {
    console.log("will be rich");
}else if (myName.charAt(0) === "P") {
    console.log("will be poor");
}
// 3rd if statement '/i/gi' looks for any 'i's even 'I'
if (myName.match(/i/gi)) {
    console.log("will fall in love this week");
}
