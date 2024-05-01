/////question number 21/////

//They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

//let person_Name : string = 'neha'  ;
//const personName_Array : string[] = ['person', 'car', 'cold Drink'];

interface person{
    age : number,
    name : string,
    nationality : string,
    student : boolean,
}




let person :person = {
    age : 15 ,
    name :"Hamza" ,
    nationality : "pakistan" ,
    student : true
}
console.log(person);

//data type of car object
interface car{
    maker : string,
    color : string,
    automatic : boolean
}



//car object 
let car = {
    maker : 'toyota',
    color : 'black' ,
    automatic : true
}

//print car
console.log(car);
