// let array = ["Marziya", "Arman"];
// let newArray = "";

// for (let i = 0; i <= array.length; i++) {
//   array.sort();
//   array.reverse();
// }
// console.log(array);
let n = 5;

let string = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === 0 || i === n - 1) {
      string += "*";
    } else {
      if (j === 0 || j === n - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }
  }

  string += "\n";
}

console.log(string);

let string1 = "";

for (let a = 0; a <= 5; a++) {
  for (let b = 0; b <= a; b++) {
    string1 += "*";
  }
  string1 += "\n";
}
console.log(string1);

console.log("\n");

let string2 = "";
let num = 4;
for (let a = 0; a <= num; a++) {
  for (let b = 0; b <= num - 1; b++) {
    string1 += "*";
  }
  string1 += "\n";
}
console.log(string1);

console.log("\n");

let string3 = "";
let num1 = 5;
for (let a = 1; a < num1; a++) {
  for (let b = 0; b < num1 - a; b++) {
    string1 += "";
  }
  for (let c = 0; c < a; c++) {
    string1 = "*";
  }
  string1 += "\n";
}
console.log(string1);
