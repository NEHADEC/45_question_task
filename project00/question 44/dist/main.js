"use strict";
// question number 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function cal
//  l provides, and it should print a summary of the sandwich that is being ordered. Call
//   the function three times, using a different number of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwich(item) {
    console.log('\n Making your sandwich with');
    item.forEach(element => console.log("- " + element));
    console.log('Enjoy Your Sandwich !\n');
}
makeSandwich(['Ham', 'Cheese', 'Lettuce']);
makeSandwich(['Turkey', 'Bacon']);
makeSandwich(['peanut butter', 'jelly']);
