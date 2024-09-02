let arr = [1, 2, 3, 4, 6];
let names = ["Gabriel", "Hendrick", "Jesus"];
let bool = [false, true, false];
let merged = ["Gabriel", 1, true]; // wtf

console.log(arr.length); // function that returns the size of the array
console.log(arr['length']); // wtf (2)
console.log(names[1]);

console.log(names[1].toUpperCase());  // with functions you call without (), but methods you need to use (), even that methods are functions
console.log(typeof names[1].toUpperCase);

let person = {
  name: "Gabriel",
  job: "Du job",
  age: "19",
  bestGame: function() {
    console.log("TW3 is the best game created !");
  }
};
console.log(person.name); // this is cool, like a json 
person.bestGame(); // object orientations

delete person.job;
console.log(person.job);
person.newProperty = "This is the new property";
console.log(person.newProperty); // idk why this is possible, but ok

let ob1 = {
  prop1: "first prop",
  prop2: "second prop"
};
let ob2 = {
  prop3: "last prop"
};
console.log(ob1);
Object.assign(ob1, ob2);
console.log(ob1);
console.log(Object.keys(ob1));
ob3 = ob2;
let ob4 = {
  prop3: "last prop"
};
console.log(ob3 == ob2);
console.log(ob3 == ob1);
console.log(ob3 == ob4); // even that ob3 is semanticaly equal as ob4, ob4, isnt a reference to ob3, so they're not identical

// .push() to add and .pop() to remove the last element in the array
// .unshift() to add and .shift() to remove the first element in the array
// .indexOf(param) and .lastIndexOf(param) to find the position of the first and the last parameter, respectively
// .slice(rangeBegin, rangeEnd) get a new array based on the range chosen, if you pass a range with a negative number, you'll get a array initiating in the range until the length()-number

let nums = [1, 2, 3, 4, 5];
nums.forEach(num => { // basically for (int num : nums) cout << num;
  console.log(num);
});

let cars = ["Ford", "BMW", "Mercedes"];
console.log(cars.includes("Ford")); // return true if the arr includes the parameter
// arr.reverse() reverses the array (no way)
// string.trim() removes all the content that aren't a word in the string, also removing the spaces "     /n Matheus" will became "Matheus"
// string.padStart(param1, param2) receives 2 parameters and insert in the beginning of a string the first parameters times the second
// string.split() creates a array with the words splitted in the string, so string = "The king is back" will be arr = ["The", "king", "is", "back"]
// arr.join() creates a string using the strings in a array and putting the parameter between the words
// string.repeat(param) repeats the string times the parameter

function printNumbers(...args) { // a function that receives any number of arguments an can uses those args, its weird, but works
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

let obj = {
  wheels: 4,
  doors: 4,
  sunroof: true,
  engine: "2.0 turbo"
};
const {wheels: vWheels, doors: vDoors} = obj; // you can create properties and copy the values of another properties to them

let numbers = [1, 2, 3, 4];
let [n1, n2, n3, n4] = numbers; // like the previous property, you can copy the values of an array to another variables

// ==== JSON ==== //
// javascript object notation
// utilized to trading messages in the backend (CPI also uses this)
 let person = { // like an object but without methods, just take and give data
  "name": "Dana White",
  "Age": 54,
  "Hobby": "Suck Jones balls"
 }; // cannot use commentaries and uses only ""

 let jsonToString = JSON.stringify(person); // this way you can transform a json in a string, can be useful in apis
 let personJson = JSON.parse(jsonToString); // you can also transform a string in a json, completing the message mapping

 // ==== CALCULATOR ==== // 
 // the king is back

 const calculator = {
  sum: function(a, b) {
    return `${a} + ${b} = ${a + b}`;
  },
  sub: function(a, b) {
    return `${a} - ${b} = ${a - b}`;
  },
  mult: function(a, b) {
    return `${a} * ${b} = ${a * b}`;
  },
  div: function(a, b) {
    return `${a} / ${b} = ${a / b}`;
  }
 };



