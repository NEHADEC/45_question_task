//Question number 17//
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list,
//  print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
var guest_list = ['lamiha', 'mahnoor', 'dania', 'zariyan', 'neha'];
// • Remove the last two names from your list, so you have an empty list.
//  Print your list to make sure you actually have an empty list at the end of your program.
var absent_guest = 'mahnoor';
var new_guest = 'sarosh';
guest_list[0] = new_guest;
//  for(let i=0; i<guest_list.length; i++){
//      console.log('Dear bestie.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our dinner.\n\nThank You\n\n');
//  }
//  console.log(`bestie.${absent_guest} is not coming to the dinner.`);
//  console.log('Good News! we find Big Table so we are inviting 3 more guests.');
guest_list.unshift('mehreen');
guest_list.splice(2, 0, 'mehwish');
guest_list.push('nazish');
//for(let i=0; i<guest_list.length; i++){
//  console .log('Dear bestie.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our dinner.\n\nThank You\n\n');
//}
// console.log('\n sorry we can not arrange big table , only two people will be invited.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    // console.log(`sorry  Bestie .${remove_guest}, you are not invited for dinner`);
}
// for(let i=0; i<guest_list.length; i++){
//     console .log('Dear bestie.' + guest_list[i] + ',\n\nyou are still invited.\n\nThank You\n\n');
//  }
guest_list.splice(0, 2);
console.log(guest_list);
//question number 19//
//Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
console.log("Total number of guest are: ".concat(guest_list.length));
