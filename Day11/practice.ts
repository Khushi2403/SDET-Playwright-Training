// 1. The Generic API Wrapper

// async function fetchData<T>(url:string):Promise<T>{
// const response=await fetch(url);
// if(!response.ok){
//     console.log(` error is : ${response.statusText}`);
// }
// const data=await response.json();
// return data;

// }

// interface Album{
//     userId:number,
//     id:number,
//     title:string,
// }
// async function demo(){
// const url="https://jsonplaceholder.typicode.com/albums/1";
// const album= await fetchData<Album>(url);
// console.log(`Album ID :${album.id}`);
// }

// demo();


//2. Record Mapping for Configuration


// enum Role{
//       Admin, 
//       Editor,
//      Guest 
// }

// const PermissionMap :Record<Role,boolean> ={
// [Role.Admin]:true,
// [Role.Editor]:true,
// [Role.Guest]:false
// }

// function hasPermissionMap(role:Role):boolean{
//     return PermissionMap[role];

// }
// console.log(hasPermissionMap(Role.Admin));
// console.log(hasPermissionMap(Role.Editor));
// console.log(hasPermissionMap(Role.Guest));


// 3. Exhaustiveness Checking (The never Type)

// type TaskStatus = 'Open' | 'InProgress' | 'Closed'|'Archived';

// function handleTask(status: TaskStatus){
//     switch(status){

//         case "Open":
//             console.log("Open");
//             break;
//         case "InProgress":
//             console.log("InProgress");
//             break;
//         case "Closed":
//             console.log("Closed");
//             break;

//         case "Archived":
//             console.log("Archived");
//             break;

//             default:
//                 const exhaustiveCheck: never = status;
//                 return exhaustiveCheck;
//     }
// }

// handleTask('Open');
// handleTask('InProgress');
// handleTask('Closed');
// handleTask('Archived');


//4 Recursive Navigation Type
// type FolderNode = {
//   name: string;
//   files?: string[];
//   subFolders?: FolderNode[];
// };

// const myFolder: FolderNode = {
//   name: "Root",
//   files: ["readme.txt"],
//   subFolders: [
//     {
//       name: "Documents",
//       files: ["doc1.pdf"]
//     },
//     {
//       name: "Images",
//       subFolders: [
//         {
//           name: "Vacations",
//           files: ["goa.png"]
//         }
//       ]
//     }
//   ]
// };

// // console.log(myFolder);
// console.log(JSON.stringify(myFolder, null, 2));

//5. Template Literal Types for CSS

// type MarginValue=`${number}px`|`${number}rem`|`${number}vh`;

// function setUnitTypes(value:MarginValue){
//     console.log("Margin set to : ",value);

// }

// setUnitTypes("10px");
// setUnitTypes("10vh");
// setUnitTypes("10rem");
//setUnitTypes("10");
// setUnitTypes("abcd");
// setUnitTypes("px");

//7. The Union Manipulation Puzzle

// type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress';

// type MouseEvents=Extract<AllEvents,'click' | 'dbclick'>;
// type NonFormEvents=Exclude<AllEvents,'submit' | 'reset'>;

// let ev1:MouseEvents;
// ev1="click";
// ev1="dbclick";
// // ev1="reset";
// // ev1="keypress";


// let ev2:NonFormEvents;
// ev2="click";
// ev2="dbclick";
// ev2="keypress";
// ev2="submit";
// ev2="reset";

// console.log("Mouse Event:", ev1);
// console.log("Non Form Event:", ev2);

// 8. Async Higher-Order Function (HOF)


//9. Index Signatures for Dynamic Metadata

// interface UserMetadata {
//   createdAt: Date;
//   [key: string]: string | number | boolean | Date;
// }

// const user1: UserMetadata = {
//   createdAt: new Date(),
//   role: "admin",
//   loginCount: 5,
//   isActive: true
// };

// const user2: UserMetadata = {
//   createdAt: new Date(),
//   username: "khushi",
//   isAdmin: true,
//   score: 95,
// //   hobbies: ["coding", "badminton"] 
// };

// console.log(user1);
// console.log(user2);

// 10. Mapped Types with Key Remapping

interface Car {
  make: string;
  model: string;
}

type ApiResponse<T> = {
  [K in keyof T as `DATA_${Uppercase<string & K>}`]: T[K];
};


const carData: ApiResponse<Car> = {
  DATA_MAKE: "Toyota",
  DATA_MODEL: "Fortuner",
};

console.log(carData);


