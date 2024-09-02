// the syntax of functions in javascript is the same as in C++, but you dont need to declare the type, just use `function` 

function printInConsole() {
  console.log("This is a function!");
}
printInConsole();

function printANumber(num) {
  console.log("The number is: " + num);
}
printANumber(22);   

const randomNumber = function() {
  console.log(Math.random());
}
randomNumber();

// a variable declared outside the function isnt the same as other variable with the same name but declared inside de function

let y = 5;
const multiply = function(n) {
  let y = n*2;
  console.log(y);
  if (y == 10) {
    let y = 55;
    console.log(y);
  }
}
multiply(y); // idk for what this is possible, but is

function divide(x, y) {
  let z = x / y;
  console.log(z);
}
divide(50, 2);

const isOdd = (n) => { // this is called a arrow function, is the same thing but with another syntax
  return !(n % 2 == 0);
}
console.log(isOdd(3));

const smallFunction = x => x*2; // this syntax is terrible, but also possible
console.log(smallFunction(6));

function person(name, age) { // you can create functions with optional parameters, just need to use a logic to treat this
  if (age === undefined) {
    console.log("Your name is: " + name);
  } else {
    console.log("Your name is " + name + " and your age is " + age);
  }
}
person("Gabriel");
person("Gabriel", 19);

function repeat(prhase, n=2) { // function with default parameters
  for (let i = 0; i < n; i++) {
    console.log(prhase);
  }
}
repeat("Memento Mori");
repeat("Another latin prhase", 3);

function closure(x) { // you can use inner functions as well
  return function inside(y) {
    return x + y;
  }
}
let first = closure(2);
console.log(first(3)); // declare a variable with the father function then call that variable as a function with the parameter for the inner function

function fib(n) {  // you also can use recursion
  if (n < 3) return 1;
  else return fib(n-2) + fib(n-1);
}
console.log(fib(0));
console.log(fib(6));

 
