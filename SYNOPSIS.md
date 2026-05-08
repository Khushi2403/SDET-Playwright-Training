SDET Playwright Training 

1. VARIABLES-Variables store data values.

🔹 Types:let,var

🔹Example-
let name = "Khushi";
var age = 22;


2. DATA TYPES-Defines type of data stored.

🔹 Types:
String
Number (integer / float / decimal)
Boolean
Character

🔹Example-
let name = "Khushi";
let age = 22;
let price = 99.99;
let isStudent = true;
let grade = 'A';


3. OPERATORS-Used for calculations and comparisons.

🔹 Types: 
Arithmetic: + - * /  
Comparison: > < == 
Logical: &&

🔹Example-
let a = 10;
let b = 20;

console.log(a + b);
console.log(a > b);


4. ARRAYS-Stores multiple values in one variable.

🔹 Methods:push(),pop(),index access

🔹Example-
let arr = [10, 20, 30];

arr.push(40);
arr.pop();

console.log(arr[0]);

5. FUNCTIONS-Reusable block of code.

🔹Example-
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

6. ARROW FUNCTION-Short syntax for functions.

🔹Example-
const add = (a, b) => a + b;

console.log(add(10, 20));

7. TEMPLATE LITERALS-Used for string formatting.

🔹Example-
let name = "Khushi";
let age = 22;

console.log(`My name is ${name} and age is ${age}`);


8. TYPE CASTING-Converting one type into another.

🔹Example-
let num = "10";
let converted = Number(num);

console.log(converted + 5);

9. CONDITIONAL STATEMENTS-Decision making in code.

🔹 Types:if,if-else,if-else-if

🔹Example-
let marks = 75;
if (marks >= 90) {
    console.log("A");
} else if (marks >= 70) {
    console.log("B");
} else {
    console.log("C");
}

10. LOOPS-Used for repetition.

🔹 Type:for loop,while,do while,for each
🔹Example-
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


11. LOGICAL OPERATORS-Combining conditions.

🔹 Type:&& , !,||
🔹Example-
let a = 10, b = 20, c = 15;

if (a > b && a > c) {
    console.log("A is largest");
}


13. FLOOR & CEIL (Math Functions) -Used in JavaScript Math object for rounding numbers.

🔹 FLOOR-Rounds number DOWN to nearest integer.

console.log(Math.floor(4.9));   // 4
console.log(Math.floor(4.2));   // 4
console.log(Math.floor(-4.9));  // -5

🔹 CEIL-Rounds number UP to nearest integer.

console.log(Math.ceil(4.1));    // 5
console.log(Math.ceil(4.9));    // 5
console.log(Math.ceil(-4.1));   // -4

14. ARRAY REDUCE METHOD (Advanced Arrays)-Used to reduce an array into a single value (sum, count, object, etc.)

🔹 Syntax:

array.reduce((accumulator, currentValue) => {
    // logic
    return accumulator;
}, initialValue);


🔹Example 1: Counting frequency of elements
const fruitBasket = ['apple', 'banana', 'cherry', 'apple', 'apple', 'banana', 'pineapple'];

const tally = fruitBasket.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(tally);

🔹Output:
{ apple: 3, banana: 2, cherry: 1, pineapple: 1 }


15. LOGIN PAGE (HTML + CSS + JS)- Used to create a simple login UI and handle basic validation.

🔹HTML (Structure)
<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
    <link rel="stylesheet" href="app.css">
</head>
<body>

    <div class="login-container">
        <h2>Login</h2>

        <input type="text" id="username" placeholder="Username">
        <input type="password" id="password" placeholder="Password">

        <button onclick="login()">Login</button>

        <p id="msg"></p>
    </div>

    <script src="app.js"></script>

</body>
</html>

🔹CSS (Styling)
body {
    font-family: Arial;
    background: #f2f2f2;
}

.login-container {
    width: 300px;
    margin: 100px auto;
    padding: 20px;
    background: white;
    text-align: center;
    border-radius: 10px;
}

input {
    width: 90%;
    padding: 8px;
    margin: 10px 0;
}

button {
    padding: 8px 20px;
    background: blue;
    color: white;
    border: none;
    cursor: pointer;
}

🔹JavaScript (Logic)
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("msg").innerText = "Login Successful";
        document.getElementById("msg").style.color = "green";
    } else {
        document.getElementById("msg").innerText = "Invalid Credentials";
        document.getElementById("msg").style.color = "red";
    }
}


16. Promises and Asynchronous JavaScript

In JavaScript, many operations such as API calls, file reading, and timers do not execute immediately. These are called asynchronous operations. To handle them properly, JavaScript provides a feature called Promise.

A Promise represents a value that may be available now, in the future, or never. It has three states:

Pending – Initial state
Resolved (Fulfilled) – Operation completed successfully
Rejected – Operation failed

Promises help avoid callback hell and make asynchronous code easier to read and manage.

🔹Example using Promise with setTimeout:

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

getData()
  .then((data) => {
      console.log(data);
  })
  .catch((error) => {
      console.error("Error:", error);
  });

17. Fetch API with Promise Chaining

JavaScript provides the Fetch API to get data from servers (APIs).
fetch() returns a Promise, which allows us to handle asynchronous API responses using .then() and .catch().

This method is commonly used in automation testing tools like Playwright to validate API responses.

🔹Example:fetching data from api

    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())        // convert response to JSON
    .then(data => data.filter(d => d.id % 2 === 0))  // filter even IDs
    .then(data => data.map(d => (d.title = "Khushi " + d.title))) // modify title
    .then(data => console.log(data)) // print result
    .catch(error => console.error("Error fetching data:", error));

  🔹  Explanation:

fetch() sends request to API.
First .then() converts response into JSON.
Second .then() filters only even ID records.
Third .then() modifies the title of each object.
Fourth .then() prints the final data.
.catch() handles errors if API fails.                            

18. Working with Public APIs using JavaScript (Fetch, Promises, Filter, Map)

🔹 In this task, multiple public REST APIs were used to practice real-time data fetching using JavaScript. The objective was to understand how to:

1.Fetch live data from APIs using fetch()
2.Handle asynchronous operations using Promises
3.Process API responses using filter() and map()

🔹 APIs Used
1.Catfact Ninja
2.PokeAPI
3.Open Notify
4.ZenQuotes
5.Hipolabs Universities API
6.Dog API
7.CoinGecko
8.Random User Generator
9.REST Countries
10.JSONPlaceholder

🔹 Sample Code Pattern Used
fetch("API_URL")
  .then(res => res.json())
  .then(data => data.filter(condition))
  .then(data => data.map(transformation))
  .then(console.log)
  .catch(console.error);

  19. Understanding Async/Await, Promises, Fetch API, and Timers in JavaScript

In this task, practical implementation of asynchronous JavaScript concepts was performed using real APIs and custom Promises. The focus was on understanding how JavaScript handles non-blocking operations using async/await, fetch(), setTimeout, and setInterval.

🔹Concepts Practiced
1.Creating custom Promises and resolving them using setTimeout
2.Using async/await with the Fetch API from JSONPlaceholder
3.Converting Promise chains (.then()) into async/await
4.Converting objects to JSON strings using JSON.stringify
5.Parsing JSON strings back to objects using JSON.parse
6.Understanding and controlling timers using setTimeout, clearTimeout, setInterval, and clearInterval

🔹Custom Promise with setTimeout example
async function getData() {
    return await new Promise((resolve, reject) => {
        if (2 < 3) {
            setTimeout(() => {
                resolve("Data received");
            }, 2000);
        } else {
            reject("not working");
        }
    });
}

🔹Fetching Data using Async/Await
async function getTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data;
}

🔹JSON Conversion
JSON.stringify(obj); // Object → String
JSON.parse(string);  // String → Object

🔹Timers in JavaScript
const timeoutId = setTimeout(() => {
    console.log("Data received");
}, 5000);

clearTimeout(timeoutId);

const i = setInterval(() => {
    console.log("Checking for new data...");
}, 3000);

clearInterval(i);

20. Object Oriented Programming (OOPS) in JavaScript

During the training, I learned how JavaScript supports Object Oriented Programming using classes, objects, and modern ES6 features. The following core OOPS concepts were implemented with examples.

1)Encapsulation

Encapsulation is the process of hiding internal data and allowing access only through public methods.

🔹Example: BankCard with private PIN

class BankCard {
    #pin;

    setPin(pin) {
        if (pin.length === 4 && !isNaN(pin)){
            this.#pin = pin;
        }
    }

    verifyPin(pin) {
        return pin === this.#pin ? "Access Granted" : "Wrong PIN";
    }
}

2)Inheritance

Inheritance allows a child class to reuse properties and methods of a parent class using extends and super.

🔹Example: Vehicle → Car

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log("Vehicle started");
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
}

3)Polymorphism

Polymorphism allows the same method name to behave differently depending on the object calling it.

🔹Example: Payment using UPI and Card

class Payment {
    pay() {}
}

class UPI extends Payment {
    pay() {
        console.log("Paid using UPI");
    }
}

class Card extends Payment {
    pay() {
        console.log("Paid using Card");
    }
}

4)Abstraction

Abstraction hides the internal implementation and exposes only essential functionality.

🔹Example: ATM

class ATM {
    #authenticate() {}
    #dispenseCash() {}

    withdraw() {
        this.#authenticate();
        this.#dispenseCash();
    }
}

21. Prototype Inheritance -Prototype Inheritance is the mechanism by which JavaScript objects inherit properties and methods from another object through the prototype chain.

🔹Example Code

function Person(name) {
  this.name = name;
}

// Method added to prototype (shared by all objects)
Person.prototype.sayHi = function () {
  console.log("Hello " + this.name);
};

// Creating objects
const p1 = new Person("Shiv");
const p2 = new Person("Khushi");

// Both objects use the same method from prototype
p1.sayHi(); // Hello Shiv
p2.sayHi(); // Hello Khushi

// Proof
console.log(Object.getPrototypeOf(p1) === Person.prototype); // true
console.log(p1.sayHi === p2.sayHi); // true

22.  Callback Function

🔹Definition:A callback is a function passed as an argument to another function, which is executed later.

🔹Snippet:

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function bye() {
  console.log("Goodbye!");
}

greet("Khushi", bye);

23. Higher-Order Function (HOF)

🔹Definition:
A higher-order function is a function that takes another function as a parameter or returns a function.

🔹Snippet:

[1, 2, 3].forEach(function(e) {
  console.log(e);
});

forEach is a HOF because it accepts a function.

24. Stack Memory

🔹Definition:
Stack memory stores primitive data types and the actual values directly.

🔹Snippet:

let age = 25;
let name = "Khushi";

25. 4) Heap Memory

🔹Definition:
Heap memory stores reference data types like objects and arrays. Variables store references (addresses).

🔹Snippet:

let user = {
  name: "Khushi",
  age: 25
};

26. Primitive Copy (Value Copy)

🔹Definition:
When copying primitives, the actual value is copied. Changes do not affect the original.

🔹Snippet:

let x = 10;
let y = x;
y = 20;

console.log(x); // 10

27. Reference Copy

🔹Definition:
When copying objects/arrays, the reference is copied. Changes affect the original.

🔹Snippet:

let obj1 = { name: "Khushi" };
let obj2 = obj1;

obj2.name = "Shiv";
console.log(obj1.name); // Shiv

28. Spread Operator with Objects

🔹Definition:
The spread operator copies properties of objects into a new object.

🔹Snippet:

const obj1 = { name: "Khushi" };
const obj2 = { age: 25 };

const obj3 = { ...obj1, ...obj2 };

29. Anonymous Callback Function

🔹Definition:
A callback function without a name, written directly inside another function.

🔹Snippet:

[1, 2, 3].forEach(e => console.log(e));

30) Hoisting: let vs var
🔹 Definition:
Hoisting is JavaScript’s default behavior of moving declarations to the top of the scope before code execution.
🔹 Snippet (let — TDZ):
console.log(greet); // ReferenceErrorlet greet = "Hello, World!";
🔹 Snippet (var — undefined):
console.log(greet); // undefinedvar greet = "Hello, World!";
🔹 Points:
let is hoisted but not initialized (Temporal Dead Zone).
Accessing let before declaration throws a ReferenceError.
var is hoisted and initialized as undefined.
Accessing var before assignment does not throw an error.


31) Function Hoisting vs Arrow Function
🔹 Definition:
Function declarations are fully hoisted, while arrow functions behave like variables.
🔹 Snippet (Function Declaration):
sayHi();function sayHi() {  console.log("Hello, World!");}
🔹 Snippet (Arrow Function):
sayHi(); // TypeErrorvar sayHi = () => {  console.log("Hello");};
🔹 Points:
Function declarations can be called before definition.
Arrow functions are hoisted as undefined.
Calling an arrow function before assignment causes TypeError.



32) Constructor Function and Prototype
🔹 Definition:
A function used with new becomes a constructor and shares methods through its prototype.
🔹 Snippet:
function Start() {  console.log("VroomVroom");}const c1 = new Start();const c2 = new Start();Start.prototype.stop = function () {  console.log("Stop");};c1.stop();c2.stop();
🔹 Points:
new creates objects linked to Start.prototype.
Methods added to the prototype are shared by all instances.
Saves memory by avoiding duplicate method copies.



33) Plain Object vs Constructor Prototype
🔹 Definition:
An object literal is not connected to any constructor’s prototype.
🔹 Snippet:
const car = {  brand: "Tesla",  start: () => console.log("VroomVroom"),};
🔹 Points:
This is a simple object.
It has no relation to Start.prototype.



34) Prototypal Inheritance using Object.create()
🔹 Definition:
Object.create() creates a new object with a specified prototype.
🔹 Snippet:
const animal = { eats: true };const rabbit = Object.create(animal);rabbit.carrot = () => console.log("He is eating carrot");
🔹 Points:
rabbit inherits properties from animal.
Prototype chain: rabbit → animal → Object.prototype → null.



35) Own Property vs Inherited Property
🔹 Snippet:
console.log(rabbit.eats); // trueconsole.log(rabbit.hasOwnProperty("eats"));   // falseconsole.log(rabbit.hasOwnProperty("carrot")); // true
🔹 Points:
eats is inherited from animal.
carrot is an own property of rabbit.
hasOwnProperty() checks only own properties.


36) toString() from Object.prototype
🔹 Snippet:
console.log(rabbit.toString());
🔹 Points:
Method comes from Object.prototype.
Every JavaScript object inherits from Object.prototype.

37) Final Prototype Chains
🔹 Snippet:

function Start() {}
Start.prototype.stop = function () {};

const animal = { eats: true };
const rabbit = Object.create(animal);

const c1 = new Start();
const c2 = new Start();

🔹 Rabbit Prototype Chain:

rabbit — own object
animal — prototype of rabbit
Object.prototype — default parent of all objects
null — end of prototype chain

🔹 c1 / c2 Prototype Chain:

c1 / c2 — objects created using new Start()
Start.prototype — shared prototype for all instances
Object.prototype — default parent of all objects
null — end of prototype chain







