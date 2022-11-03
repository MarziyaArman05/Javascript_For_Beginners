// var student = {
//   name: "arman",
//   age: 25,
//   studies: "javascript",
// };
// document.getElementById("object").innerHTML =
//   student.name + " of the age " + student.age + " studies " + student.studies;
// var student = new Object();

// (student.name = "ZAKIYA"),
//   (student.age = 15),
//   (student.studies = "java"),
//   (document.getElementById("object").innerHTML =
//     student.name +
//     " of the age " +
//     student.age +
//     " studies " +
//     student.studies);
// var student = new Object();

// function stud(name, age, studies) {
//   this.name = name;
//   this.age = age;
//   this.studies = studies;
// }
// var student = stud("zainab", 22, "c#");
// document.getElementById("object").innerHTML =
//   student.name + " of the age " + student.age + " studies " + student.studies;

let user = {
  name: "atul",
  age: 25,
  student_address: "",
  get studentname() {
    return this.name;
  },
  set address(address) {
    return this.student_address = address;
  },
};
user.address = "jammu";
document.getElementById("get").innerHTML = user.studentname;
document.getElementById("set").innerHTML = user.student_address;
function sayHi() {
  alert("Hello");
}

user.message = sayHi;
document.getElementById("obj").innerHTML = "Hi " + user.name;
document.getElementById("click me").onclick = user.message;
