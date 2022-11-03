//Program to generate random email id

let pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var newemail = "";
var emailpattern = "";
for (let i = 0; i < 10; i++) {
  newemail += pattern.charAt(Math.floor(Math.random() * pattern.length));
  emailpattern = newemail + "@gmail.com";
}
console.log("your email id is", emailpattern);

// var newemail = "";
// var emailpattern = "";
// for (let i = 0; i < 10; i++) {
//   newemail += pattern.charAt(Math.floor(Math.random() * pattern.length));

//   //   if (i === "A" || i === "Z") {

//   emailpattern = newemail + "@gmail.com";

//   if (emailpattern[i] == 1) {
//       emailpattern = emailpattern[i].toUpperCase();
//         console.log("your email id is", emailpattern);
//     }

//     else {
//         console.log("Invalid email id");
//     }
// }
// // }

//expression /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
