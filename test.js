//input

let str = "Marziya Arman";

//output aaaammrrinyz
var res = str.toLowerCase();

newstr = res.split(" ").join("");

let sortString = (newstr) => {
  return newstr.split("").sort().join("");
};
newstr = sortString(newstr);
let newarray = [];
let count = 1;

for (let i = 0; i < newstr.length; i++) {
  if (newstr[i] === newstr[i + 1]) {
    count++;
  } else {
    newarray.push({ item: newstr[i], count: count });
    count = 1;
  }
}
newarray = newarray.sort((item1, item2) =>
  item1.count < item2.count ? 1 : -1
);
// console.log("new array ", newarray);

let result = newarray.map((value) => {
  if (value.count === 1) return value.item;
  else {
    let test = [];
    for (i = 0; i < value.count; i++) test.push(value.item);
    return test;
  }
});

console.log(result.flat().join(""));
