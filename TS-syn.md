1. Type annotations :define the data type of variables, parameters, and return values.

let name: string = "Khushi";
let age: number = 22;
let isActive: boolean = true;

function add(a: number, b: number): number {
  return a + b;
}

2. Union Types :A variable can hold more than one type.

let result: string | number;

result = "Success";
result = 100;

3. Arrays & Tuples

Arrays
let numbers: number[] = [1, 2, 3, 4];
let names: Array<string> = ["A", "B", "C"];

Tuples (fixed types & order)
let user: [string, number] = ["Khushi", 22];


4. Interfaces

Interfaces define the structure of objects.

interface User {
  id: string;
  name: string;
  email: string;
}

const user1: User = {
  id: "101",
  name: "Khushi",
  email: "khushi@gmail.com"
};


5. Interface with Functions
interface MathOperation {
  (a: number, b: number): number;
}

const multiply: MathOperation = (x, y) => x * y;



6. Optional & Readonly Properties
interface Student {
  readonly rollNo: number;
  name: string;
  grade?: string;
}



7. Enums:Enums define a set of named constants.

enum Status {
  Pending,
  InProgress,
  Completed
}

let taskStatus: Status = Status.Completed;

8. Generics:Generics allow reusable components for multiple types.

function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello");
identity<number>(100);


9. Type Aliases

type ID = string | number;
let userId: ID = "ABC123";


10. Access Modifiers (OOP in TS)
class Person {
  public name: string;
  private age: number;
  protected city: string;

  constructor(name: string, age: number, city: string) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

11. Omit Utility Type: Used to remove properties from an interface.

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

type UserPreview = Omit<User, "email" | "password">;

const preview: UserPreview = {
  id: "101",
  name: "Khushi"
};

12. Non-Null Assertion Operator (!):Used when you are sure a value is not null.

let input = document.getElementById("username")!;
input.innerHTML = "Hello";


13. Type Inference: TypeScript automatically detects types.

let city = "Pune"; // inferred as string


14. Functions in TypeScript
function greet(name: string): void {
  console.log("Hello " + name);
}



