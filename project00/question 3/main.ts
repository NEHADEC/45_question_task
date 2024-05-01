//question number 3//
// name case stor a person namein a variable andthen print the person'sname in lower case,uppercase and titlecase ??//

//lower case//

let personName: string = "Neha Bilal"
console.log("lowercase:" , personName.toLowerCase());

//upper case//
console.log("uppercase:" , personName.toLocaleUpperCase());

//title case//
console.log("titlecase:" , personName.replace(/\bw/g,c => c.toUpperCase()));
