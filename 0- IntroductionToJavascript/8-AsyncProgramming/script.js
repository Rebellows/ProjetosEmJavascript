// async programming is a way to program without using sequencial logic, so you can run blocks of your code in the same time using threads, but this could possibly increment the logic of the program and will create some problems that the programer needs to solve
console.log("1");
setTimeout(function() { // callback, execute in a future point, in this case 2 seconds
  console.log("5");
}, 2000); // this way you can create a time lapse to execute the code inside the blocks in the time specified

let promise = Promise.resolve(4 + 8); // could produce some value when you specified in the program, here we are declaring that in the future we can use this variable with its result
console.log("This is a promise!");
promise.then((value) => console.log(`The sum is ${value}`)); // here we're calling the variable and generating the result
// this is a powerful tool because you can just create a variable and continue to code without need to wait for the variable to be ready to use, so you can create in the beginning of the code and just call in the end
// you can also use try catch inside the 'then' to troubleshoot the possible errors when calling the variable

function verifyPassword(password) { // you also can use a promise inside a function with error troubleshooting
  return new Promise((resolve, reject) => {
    if (password == "MyPassword123") {
      resolve(console.log("Your password is correct"));
    }
    else {
      reject(new Error("Wrong Password"));
    }
  })
}

Promise.all([p1, p2, p3]).then((values) => console.log(values)); // this way you can resolve multiple promises in the same time, just passing a array of promises

async function sum(a, b) { // if you use the reserved name 'async' before the function declaration the function becomes async function and will run in parallel with the program
  return a + b;
}

function sumWithDelay(a, b) { // a function with timeout inside, just because i can do this, dont know if have a real application
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(a + b);
    }, 4000);
  })
}

async function newSum(a, b, c) {
  let x = sumWithDelay(a, b);
  let y = c;
  return await x + y; // this way you can block the function to return a result before the variable you want to wait isnt ready to be readed
}
// another powerful tool to syncronize your program without breaking the async code, avoiding errors

function* Idcreator() { // generator
  let id = 0;
  while (true) {
    yield id++;
  }
}
let newId = Idcreator();
console.log(newId.next()); // this way you can create a function called generator having a loop that can be paused, so any time that you call the function, the value of the variable will increment in this case, basically a function that works only when you want

