//1. Logging Names
const names = ['Alice', 'Bob', 'Charlie'];
names.forEach(name => console.log(`Hello, ${name}`));

//2. Temperature Conversion
const celsiusTemps = [0, 10, 20, 30];
const fahrenheitTemps = celsiusTemps.map(c =>
  c * 1.8 + 32
);
console.log(fahrenheitTemps); // [32, 50, 68, 86]

//3. Finding Adults
const users = [
  { name: 'Li', age: 16 },
  { name: 'Dan', age: 22 },
  { name: 'Sarah', age: 17 }
];
const adults = users.filter(user => user.age >= 18);
console.log(adults);// [ { name: 'Dan', age: 22 } ]

//4. String Lengths
const words = ["khushi", "shiv", "sanjana", "akshu", "siya"];
function getStrings(strings) {
  return strings.filter(str => str.length > 5);
}
console.log(getStrings(words)); //[ 'khushi', 'sanjana' ]

//5. Total Cost
const prices = [19.99, 5.50, 3.99, 25.00];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 54.48

//6. Counting Occurrences
const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];

const appleCount = fruits.reduce((count, fruit) => {
  return fruit === 'apple' ? count + 1 : count;}, 0);
console.log(appleCount); // 3

//7. Array Transformation

const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
  .filter(n => n % 2 === 0).map(n => n * n);         
console.log(result); // [4, 16, 36]

//8. Object Extraction

const products = [
  { id: 1, title: 'Laptop' },
  { id: 2, title: 'Mouse' }
];
const titles = products.map(t => t.title);
console.log(titles); // ['Laptop', 'Mouse']

//9. The Average
const scores = [80, 90, 70, 100];
const average =scores.reduce((sum, s) => sum + s, 0) / scores.length;
console.log(average); // 85

//10. Flattening (The Bonus)
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => {
    return acc.concat(arr);
}, []);

console.log(flat); // [1, 2, 3, 4, 5, 6]