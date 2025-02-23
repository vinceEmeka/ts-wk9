// // let id: number = 5;
// // let company: string ="Acne Corp";
// // let isPublished: boolean = true;

// // let ids: number[] = [1, 2, 3, 4, 5];
// // let x: any = "emeka";
// // let xArr: any[] = ["emeka", 0, true];


// // const concat = (a: string, b: string): string => {
// //  return a + b;
// // };

// // console.log(concat("hello","world"));
// // // console.log(concat(5,10));


// interface UserInterface {
//  id: number,
//  name: string,
//  age?: number,
//  greet(message: string): void
// }


// const User: UserInterface = {
//  id: 2,
//  name: "emeka",
//  // age: 12,
//  greet(message) {
//   console.log(message);
  
//  }
// }

// User.greet("how far abobi?")

// if(!User.age) {
//  console.log("No age found");
 
// } else {
// console.log(User.age);

// }

// DEFINING A TYPE------

// type IDFieldType = string | number;

// const printID = (id: IDFieldType ) => {
// console.log(`ID: ${id} `);

// }

// printID("jhel26378DJIE");

interface User {
     type: 'user';
     name: string;
     age: number;
     occupation: string;
 }


 interface Admin {
     type: 'admin';
     name: string;
     age: number;
     role: string;
 }


 export type Person = User | Admin;


 export const persons: Person[] = [
     { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
     { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
     { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
     { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
     { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
     { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
 ];


 export function logPerson(person: Person) {
     console.log(
         ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
     );
 }


 export function filterPersons(persons: Person[], personType: string, criteria:  unknown): unknown[] {
     return persons
         .filter((person) => person.type === personType)
         .filter((person) => {
             let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
             return criteriaKeys.every((fieldName) => {
                 return person[fieldName] === criteria[fieldName];
             });
         });
 }


 export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
 export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });


 console.log('Users of age 23:');
 usersOfAge23.forEach(logPerson);


 console.log();


 console.log('Admins of age 23:');
 adminsOfAge23.forEach(logPerson);

