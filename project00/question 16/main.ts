//question 16//
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your
//  program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one
//  new guest to the end of your list. • Print a new set of invitation messages,
//  one for each person in your list.
let guest_list :string[] = ['lamiha', 'mahnoor','dania','zariyan','neha'];

// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Bestie. ' + guest_list[i]+ ',\n\nIt is our pleasure to invite you our dinner.\n\nThank You\n\n');
    
//}
 let absent_guest : string = 'mahnoor';
 let new_guest : string = 'sarosh';

 guest_list[0] = new_guest ;
 
 for(let i=0; i<guest_list.length; i++){

     console.log('Dear bestie.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our dinner.\n\nThank You\n\n');
    
 }
 console.log(`bestie.${absent_guest} is not coming to the dinner.`);
 
 console.log('Good News! we find Big Table so we are inviting 3 more guests.');

 guest_list.unshift('mehreen');
 guest_list.splice(2 , 0 , 'mehwish');
 guest_list.push('nazish');
 
 for(let i=0; i<guest_list.length; i++){

   console .log('Dear bestie.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our dinner.\n\nThank You\n\n');
   
}
