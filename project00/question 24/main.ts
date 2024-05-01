//question number 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
// write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

//start//
//Equality and inequality test1
console.log("Equality test with string: " ,"apple" === "apple") ;


//Equality and inequality test 2

console.log("Inequality test with strings: ", ("Apple" as string) != "orange");

//test using the lower case function

console.log("lower case function test : " , "hello" .toLowerCase() ==="hello");

// Numerical tests involving equality 
console.log("Equality test with string :", 26 ===26);

// Numerical tests involving   inequality
console.log("Inequality test with number:" ,(26 as number)!= 35);


//greater than  test
console.log("greater then test" , 10 > 5);

//lessthen test
console.log("less then test" , 5  < 10);

//greater then or equal to

console.log("grater then and equal to test: ", 10>=10);

//less then or equal to
console.log("less then equal to test:" , 5 <= 10 );

//Tests using "and"  operators
console.log("and operator test:" , 5===5 && 10 > 5);

//Tests using "or"  operators
console.log("or operator test:" , 5===5 || false);

//Test whether an item is in a array
const fruits :string[] = ['Nashpati' , 'Banana' , 'Amrood'];
console.log('Test "Nashpati" in the array:' , fruits.concat("Nashpati"));



//test whether an item is not in a array

console.log('testing "apple" is not in array:' , !fruits.concat('apple'));



