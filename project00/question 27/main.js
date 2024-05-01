//question no 27
//
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
var alienColor = "blue";
// • If the alien is green, print a message that the player earned 5 points.
//•  If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
//version 1 of the program
if (alienColor === "blue") {
    console.log("player earned 5 points.");
}
else if (alienColor === "blue") {
    console.log("player earned 10 points");
}
else if (alienColor === "red") {
    console.log("player earned 15 points");
}
else {
    console.log("please select right color");
}
//version 2 of the program
alienColor = "black";
if (alienColor === "blue") {
    console.log("player earned 5 points.");
}
else if (alienColor === "black") {
    console.log("player earned 10 points");
}
else if (alienColor === "red") {
    console.log("player earned 15 points");
}
else {
    console.log("please select right color");
}
//version 3 of the program
alienColor = "red";
if (alienColor === "blue") {
    console.log("player earned 5 points.");
}
else if (alienColor === "black") {
    console.log("player earned 10 points");
}
else if (alienColor === "red") {
    console.log("player earned 15 points");
}
else {
    console.log("please select right color");
}
