"use strict";
//question number 37//
//Large Shirts: Modify the make_shirt() function so that shirts are large by default wit
//h a message that reads I love TypeScript. Make a large shirt and
//a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = 'Large', text = 'I Love Typescript') {
    console.log(`creating a ${size} shirt with the message: ${text}`);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', ' I Love Python');
