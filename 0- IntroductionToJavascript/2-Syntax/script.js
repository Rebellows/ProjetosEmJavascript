let variable = 5; // the main difference between let and var is that let is locally and var can be usd globally, nowadays var inst used anymore
console.log(variable * variable);
// when using let or var you're declaring a variable, but you can assign another value in the same variable after the program begins

let nome = "Gabriel";
console.log(`My name is ${nome}`);
const constant = 10; // const is a constant variable (a little bit controversial), you cannot change its value

// never use a number as the first character of a variable name, use camelCase for the names
// you can use $ and _ to initiate a variable name in javascript standard, but some libraries uses this characters as reserved, so inst a good practice

let age = prompt("How old are you? "); // like the input function in python, we usually dont use prompt in a real world site, because you cannot use UI/UX with this function
console.log(`Your age is ${age}`);
alert("This is an alert!"); // a function to put a pop-up in the screen, but is rarely used for the same problems that prompt has
let higher = Math.max(5, 50, 500);
let expo = Math.pow(5, 2);
console.log(`The highest number between 5, 50, and 500 is ${higher} and the square of 5 is ${expo}`); // the Math function is really useful to use some of the mathematics functions

if (age >= 18) {
  console.log("You can drink alcohol!");
}
else if (age >= 16 && age < 18) {
  console.log("You probably drink alcohol even that you cannot drink by law restrictions, you're a criminal!");
}
else {
  console.log("You're too young to drink alcohol.");
}

let x = 10, y = 0;
while (x > 0) {
  x--;
  y++;
  console.log(`x = ${x} and y = ${y}`);
}
do {
  x++;
  } while (x < 10);
for (let i = 0; i < 10; i+=2) {
  console.log(i);
}
// as you can see, the syntax is basically equal as c++, and you can use break and continue as well

switch (nome) {
  case "Gabriel": 
    console.log("Your name is Gabriel");
    break;
  case "Lucas": 
    console.log("Your name is Lucas");
    break;
  default: 
    console.log("If you aren't Lucas neither Gabriel, the most likely name you can have is Mohammed!");
    break;
}

let arr = [1, 2, 3];
let arrSize = arr.length;
let arrEmpty = [];
arrEmpty.push(arr[0]);



