// 1. SWAPPER

let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log("Swapped values:", a, b);


// 2. TYPE CHECKER

function checkType(input) {
    if (typeof input === "number") {
        console.log("This is a number");
    } else if (typeof input === "string") {
        console.log("This is a string");
    } else {
        console.log("Other type");
    }
}

checkType(10);
checkType("Hello");


// 3. INITIALS CREATOR

let fullName = "Khushi Agrawal";

let initials =
    fullName.split(" ")[0][0] +
    fullName.split(" ")[1][0];

console.log("Initials:", initials);


// 4. CLEANER

let messy = " Javascript is fun ";

let cleaned = messy.trim().toLowerCase();

console.log("Cleaned string:", cleaned);


// 5. GROCERY LIST

let cart = ["Bread", "Butter", "Cheese"];

cart.push("Milk");        // add end
cart.unshift("Eggs");     // add beginning
cart.pop();               // remove last item

console.log("Cart:", cart);


// 6. VALUE FINDER

let numbers = [10, 20, 30, 40, 50];

console.log("Includes 30:", numbers.includes(30));
console.log("Index of 50:", numbers.indexOf(50));