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


16.Promises and Asynchronous JavaScript

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

  17.Fetch API with Promise Chaining

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

17 . Working with Public APIs using JavaScript (Fetch, Promises, Filter, Map)

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

