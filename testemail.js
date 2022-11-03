//Generate random email

const { FormGroup } = require("react-bootstrap");

let pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var randomemail = "";
var testemail = "";
for (let i = 0; i <= 10; i++) {
  randomemail += pattern.charAt(Math.floor(Math.random() * pattern.length));
  testemail = randomemail + "@gmail.com";
}
console.log("your email is ", testemail);
// Generate random phone

let patterns = "0123456789";
var randomNumber = "";

for (let a = 1; a <= 10; a++) {
  randomNumber += patterns[Math.floor(Math.random() * patterns.length)];
}
console.log("your mobile number is", "+91", randomNumber);

//Another Method for generate a new random mobile number.
// for (let j = 1; j <= 10; j++) {
//   randomNumber += [Math.floor(100000000 + Math.random() * 900000000)];
//   console.log("your mobile number is", "+91", randomNumber);
// }
