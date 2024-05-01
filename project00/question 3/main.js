//question number 3//
// name case stor a person namein a variable andthen print the person'sname in lower case,uppercase and titlecase ??//
//lower case//
var personName = "Neha Bilal";
console.log("lowercase:", personName.toLowerCase());
//upper case//
console.log("uppercase:", personName.toLocaleUpperCase());
//title case//
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
