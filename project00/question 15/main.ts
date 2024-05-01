
//question number 15//
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at
//  the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t
//  make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.






let guest_list :string[] = ['lamiha', 'mahnoor','dania','zariyan','neha'];

for(let i=0; i<guest_list.length; i++){
    console.log('Dear Bestie. ' + guest_list[i]+ ',\n\nIt is our pleasure to invite you our dinner.\n\nThank You\n\n');
    
}
 let absent_guest : string = 'mahnoor';
 let new_guest : string = 'sarosh';

 guest_list[0] = new_guest ;
 
 for(let i=0; i<guest_list.length; i++){

     console.log('Dear bestie.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our dinner.\n\nThank You\n\n');
    
 }
 console.log(`bestie.${absent_guest} is not coming to the dinner.`);
