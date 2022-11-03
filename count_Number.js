var str = "Marziya arman 123 *^%";
var regx = /[a-zA-Z]/g;
var regexp = /[0-9]/g;
console.log(str.match(regx).length);
console.log(str.match(regexp).length);
console.log(str.length); // prints 13 to the console
console.log(str.trim().length); // printes 12 to the console
