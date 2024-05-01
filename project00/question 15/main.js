var guest_list = ['lamiha', 'mahnoor', 'dania', 'zariyan', 'neha'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Bestie. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you our dinner.\n\nThank You\n\n');
}
var absent_guest = 'mahnoor';
var new_guest = 'sarosh';
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear bestie.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our dinner.\n\nThank You\n\n');
}
console.log("bestie.".concat(absent_guest, " is not coming to the dinner."));
