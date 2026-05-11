let name: string = "khushi";
let result: number | string;
result = "success";
result = 45;

console.log(name, result);
 
function add(a: number, b: number): string {
    return "Sum: " + (a + b);
}
 
console.log(add(5, 10));
