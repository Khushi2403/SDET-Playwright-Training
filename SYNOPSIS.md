SDET Playwright Training 

1. VARIABLES-Variables store data values.

🔹 Types:let,var

let name = "Khushi";
var age = 22;

2. DATA TYPES-Defines type of data stored.

🔹 Types:
String
Number (integer / float / decimal)
Boolean
Character

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

let a = 10;
let b = 20;

console.log(a + b);
console.log(a > b);


4. ARRAYS-Stores multiple values in one variable.

🔹 Methods:push(),pop(),index access
let arr = [10, 20, 30];

arr.push(40);
arr.pop();

console.log(arr[0]);

5. FUNCTIONS-Reusable block of code.

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

6. ARROW FUNCTION-Short syntax for functions.

const add = (a, b) => a + b;

console.log(add(10, 20));

7. TEMPLATE LITERALS-Used for string formatting.

let name = "Khushi";
let age = 22;

console.log(`My name is ${name} and age is ${age}`);


8. TYPE CASTING-Converting one type into another.

let num = "10";
let converted = Number(num);

console.log(converted + 5);

9. CONDITIONAL STATEMENTS-Decision making in code.

🔹 Types:if,if-else,if-else-if

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
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


11. LOGICAL OPERATORS-Combining conditions.

🔹 Type:&& , !,||
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