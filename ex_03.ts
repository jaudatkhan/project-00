/*
Store a person's name in a variable, and then print that person's name in lowercase, uppercase, and titlecase.
*/


const personName: string ="jaudatkhan";

// lowerCase
console.log(personName.toLowerCase());

// uppercase

console.log(personName.toUpperCase());

// titlecase


let firstletter: string = personName.charAt(0).toUpperCase();
let restletters: string = personName.slice(1).toLowerCase();

let titlecase = firstletter + restletters;

console.log(titlecase);

