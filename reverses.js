//input

let str = "Marziya Arman";

//output aaaammrrinyz
var res = str.toLowerCase();

newstr = res.split(" ").join("");

let sortString = (newstr) => {
  return newstr.split("").sort().join("");
};
newstr = sortString(newstr);
let newarr = [];
let count = 1;

for (let i = 0; i < newstr.length; i++) {
  if (newstr[i] === newstr[i + 1]) {
    count++;
  } else {
    newarr.push({
      item: newstr[i],
      count: count,
    });
    count = 1;
  }
}

newarr = newarr.sort((item1, item2) => (item1.count < item2.count ? 1 : -1));

let result = newarr.map((item) => {
  if (item.count === 1) return item.item;
  else {
    let test = [];
    for (i = 0; i < item.count; i++) test.push(item.item);
    return test;
  }
});

console.log(result.flat().join(""));
