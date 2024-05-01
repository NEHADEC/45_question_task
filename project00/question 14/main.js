//Question number 14//
//Guest List: If you could invite anyone, living or deceased,
// to dinner, who would you invite? Make a list that includes 
//at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
var guest_list = ['lamiha', 'mahnoor', 'kinza', 'areeba', 'neha'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/Madam' + guest_list[i] + ",\nwe invited you on dinner tomorrow.\n\nThank you");
}
//meny sary guest array sy remove kr dy hai//
guest_list.splice(0, 2);
console.log(guest_list);
