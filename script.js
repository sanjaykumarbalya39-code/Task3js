
// Section 1: Basic Functions (1–8)
// Create a function to print "Hello World"
function sayHello() {
  console.log("Hello World");
}

// Create a function that takes a name and prints:
// Welcome <name>

function welcome(name) {
  console.log("Welcome " + name);
}

welcome("Sanjay");


//Create a function to add two numbers and return the result

function add(a, b) {
  return a + b;
}

console.log(add(5, 3));
//Create a function to check whether a number is even or odd

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(4));

//Create a function to find the square of a number

function square(num) {
  return num * num;
}

console.log(square(6));

//Create a function to return the largest of three numbers
function largest(a, b, c) {
  return Math.max(a, b, c);
}

console.log(largest(10, 25, 15));

//Create a function with a default parameter (age = 18)

function showAge(name, age = 18) {
  console.log(name + " is " + age + " years old");
}

showAge("Sanjay");
showAge("Bhanu", 25);

//Create a function that returns full name (first name + last name)

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(fullName("Sanjay", "Reddy"));

// Section 2: Return & Scope (9–14)
// Create a function that returns the multiplication of three numbers

function multiply(a, b, c) {
  return a * b * c;
}

console.log(multiply(2, 3, 4)); 

//Write a function to demonstrate the difference between:
//var let const
function scopeDemo() {
  var x = 10;   // function scoped
  let y = 20;   // block scoped
  const z = 30; // block scoped

  console.log(x, y, z);
}

scopeDemo();

// Key differences:
// var → can be redeclared, function scoped
// let → cannot redeclare, block scoped
// const → cannot redeclare or reassign, block scoped

//Create a nested function (function inside another function)
function outer() {
  let message = "Hello from outer";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();

//Create a global variable and access it inside a function
function outer() {
  let message = "Hello from outer";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();


//Try accessing a block-scoped variable outside the block and observe the result
// {
//   let a1 = 50;
//   console.log("Inside block:", a1);
// }

// console.log("Outside block:", a); 

//It occures reference error. Because it is not defined.


// Section 3: Function Types (15–20)
// Convert a normal function into an anonymous function
const greet = function () {
  console.log("Hello!");
};

greet();

//Convert a normal function into an arrow function
function add(a, b) {
  return a + b;
}
//Create an arrow function with single-line return

const multiply1 = (a, b) => a * b;

console.log(multiply1(3, 4)); 

//Create a function expression and call it
const sayHi = function () {
  console.log("Hi there!");
};

sayHi();

//Compare normal function vs arrow function using this

const obj = {
  name: "SANJAY",

  normalFunc: function () {
    console.log("Normal:", this.name);
  },

  arrowFunc: () => {
    console.log("Arrow:", this.name);
  }
};

obj.normalFunc();
obj.arrowFunc();  

//Create an IIFE (Immediately Invoked Function Expression) to print:

(function () {
  console.log("Executed immediately");
})();


// Section 4: Callback & Higher Order Functions (21–25)
// Create a function that accepts another function as an argument and executes it

function greet1(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Sanjay");
}
processUser(greet1);

// Build a calculator using callback functions (add, sub, mul)
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function calculator(a, b, operation) {
  return operation(a, b);
}

console.log(calculator(5, 3, add));
console.log(calculator(5, 3, sub));
console.log(calculator(5, 3, mul));

// Pass a function as an argument and print a custom message
function message() {
  console.log("This is a custom message");
}

function execute(fn) {
  console.log("Executing function...");
  fn();
}

execute(message);

// Create a function that delays execution using a callback (simulate setTimeout)
function delayExecution(callback, delay) {
  setTimeout(() => {
    callback();
  }, delay);
}

delayExecution(() => {
  console.log("Executed after 2 seconds");
}, 2000);

// Create a custom map function using callback
function customMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
}
const numbers = [1, 2, 3, 4];

const squared = customMap(numbers, (num) => num * num);

console.log(squared);



// Section 5: Currying (26–28)
// Convert a function:
// add(a, b, c)
// into currying format:
// add(a)(b)(c)
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(add(2)(3)(4)); 

// Create a multiply function using currying
function multiply2(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}
console.log(multiply2(2)(3)(5)); 

// Create a greeting function using currying
function greet2(greeting) {
  return function(name) {
    return greeting + ", " + name + "!";
  };
}
const sayHelloo = greet2("Hello");

console.log(sayHelloo("Sanjay")); 
console.log(greet("Welcome")("User")); 

    
// Section 6: Generator Function (29–31)
// Create a generator function that yields 3 messages
function* messageGenerator() {
  yield "Discount 40%";
  yield "min 15% profit";
  yield "Try again";
}

const gen = messageGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// Iterate a generator using for...of
function* messageGenerator() {
  yield "Hello";
  yield "Welcome";
  yield "Goodbye";
}

const gen1 = messageGenerator();

console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);

// Create an infinite generator that produces numbers (1, 2, 3...)

function* numberss() {
  yield 1;
  yield 2;
  yield 3;
}

for (let num of numberss()) {
  console.log(num);
}

// Section 7: Spread Operator (32–34)
// Merge two arrays using spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = [...arr1, ...arr2];
console.log(merged);
// Clone an object and modify one property
const arr11 = [1, 2, 3];
const arr22 = [4, 5, 6];

const merged1 = [...arr11, ...arr22];
console.log(merged1);
// Merge multiple arrays and add extra values using spread
const a5 = [1, 2];
const b2 = [3, 4];

const result = [...a5, ...b2, 5, 6];
console.log(result);

// Section 8: Rest Operator (35–37)
// Create a function that accepts unlimited arguments and returns the sum
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));
// Store extra arguments using rest operator and print them
function showArgs(first, ...rest) {
  console.log("First:", first);
  console.log("Others:", rest);
}

showArgs(10, 20, 30, 40);
// Create a function to find the maximum value using rest operator

const a1 = [1, 2];
const b1 = [3, 4];

const result1 = [...a, ...b, 5, 6];
console.log(result1);

// Section 9: Switch Case (38–40)
// Create a switch case to print day name (1–7)
let day = 3;

switch (day) {
  case 1: console.log("Sunday"); break;
  case 2: console.log("Monday"); break;
  case 3: console.log("Tuesday"); break;
  case 4: console.log("Wednesday"); break;
  case 5: console.log("Thursday"); break;
  case 6: console.log("Friday"); break;
  case 7: console.log("Saturday"); break;
  default: console.log("Invalid day");
}
// Create a calculator using switch case (+, -, *, /)
let num1 = 10;
let num2 = 5;
let operator = "+";

switch (operator) {
  case "+": console.log(num1 + num2); break;
  case "-": console.log(num1 - num2); break;
  case "*": console.log(num1 * num2); break;
  case "/": console.log(num1 / num2); break;
  default: console.log("Invalid operator");
}
// Create a grade system using switch or conditions:
// 90+ → A
// 75+ → B
// 50+ → C
// Below 50 → Fail

let marks = 82;

switch (true) {
  case (marks >= 90):
    console.log("Grade A");
    break;
  case (marks >= 75):
    console.log("Grade B");
    break;
  case (marks >= 50):
    console.log("Grade C");
    break;
  default:
    console.log("Fail");
}