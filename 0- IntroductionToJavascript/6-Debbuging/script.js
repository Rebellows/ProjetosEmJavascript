// "use strict" to make the compiler to throw errors when you dont use the strict syntax, so you cannot use 'variable = content', you need to use 'let'

let a = 1, b = 2;
if (a == 1) {
  a = b + 2;
}
console.log(a); // simplest possible debug method, you just print in the console the value of a variable and see if is what you're expecting

for (let i = 0; i < b; i++) {
  a = a + 2;
}
debugger; // is a breakpoint call, when you use 'debugger' you stop the code and can see all the content in all vairables

function checkValue(num) {
  let result = Number(num);
  if (Number.isNaN(result)) {
    return null;
  } else {
    return result;
  }
} // this way you can check the inputs that your program receives, specially useful in js because you dont declare variables with its types, like 'int num'

function hello(name) {
  if (typeof name != 'string') {
    throw new Error("The parameter 'name' needs to be a string");
  } else {
    console.log(`Hi ${name}!`);
  }
} // is a throw an exception, just like in other languages

try {
  let c = a + b;
} catch (error) {
  console.log("Something did wrong: " + error);
} // simple try catch, also just like another language. if you didnt throw the error, the code dont stop

finally {
  console.log("last scope"); // when you use try catch and dont get an error, you can put a finally scope after the catch to return a message saying that the program executed well
}

function loop(arr) {
  if (arr.length == 0) { // syntax of an assertion
    throw new Error("The array needs to have at least one element to be iterated over");
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

