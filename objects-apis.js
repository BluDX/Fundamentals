/*
*Objects, Interfaces, and APIs
 */

let dog = {
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "Small",
    bark: function (typeOfBark){
        console.log("Bark!");
    },
};

//dog.bark();  //Call it like you would a function

//Interface is the function's signature.  Signature is the name (bark), and the parameters, (typeOfBark).

//APIs = Application Programming Interface
//Above, API is the bark function
//REST APIs are the same idea; they allow you to interact with other peoples code (through URLs instead of functions).


//When you send data through a function via its parameters, there are two ways to do it:
//Passing by Value - inside the function only the value of the data is important (date is copied)
//Passing by Reference - only points to the original data; can affect original piece of data.  Be careful!

/*function x(y) {
    y = y +5;
    console.log(y);
}

let y = 5;
x(y);
console.log(y);
 */

function x(y) {
    y.num = y.num +5;
    console.log(y);
}

//If y was an object:
let y = {
    name: "Tom",
    num: 10,
}

x(y);
console.log(y);

//Objects are passed in by reference
//In previous example, number was passed in by value


