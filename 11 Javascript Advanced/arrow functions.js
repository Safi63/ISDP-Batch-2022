console.clear();
function s(flavor) {
  return "Pizza " + flavor + " is preparing";
}

// let s = (flavor) => {
//   return "Pizza " + flavor + " is preparing";
// };
// let s = (flavor) => "Pizza " + flavor + " is preparing";
// let s = flavor => "Pizza " + flavor + " is preparing";

console.log(s("fajita"));
let postcodes = require("./postcodes.json");

// let result = postcodes.find(function (data) {
//   if (data.Region == "Aberdeen") return true;
// });
// let result = postcodes.find((data) => {
//   if (data.Region == "Aberdeen") return true;
// });

let result = postcodes.find((data) =>
  data.Region == "Gujrat" ? true : false
);

// console.log(result);

let person = {
  name: "Butt Sahib",
  age: 23,
  famous: "Khana Peena",
  famous2: "badmash",
  passion: "Software Developing"
};

// let name = person.name;
// let age = person.age;
let { name, age,passion } = person;

console.log(name, age,passion, result);
