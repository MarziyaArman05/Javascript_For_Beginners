let pattern = "0123456789";
var newNumber = "";

for (let i = 0; i < 10; i++) {
  newNumber += pattern[Math.floor(Math.random() * pattern.length)];
}
console.log("New Mobile NUmber is " + "+91" + newNumber);
