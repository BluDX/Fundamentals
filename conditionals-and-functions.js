/*
* Conditionals, Functions, Scope, and Loops.
 */

/*
//Equals
let equals = 1===1;
console.log(equals);

//Greater than
let greaterThan = 5>1;

//Less than
let lessThan = 2<10;

//Greater than or Equals to
let greaterThanEq = 5>=5;

//Less than or Equals to
let lessThanEq = 4<=9;

//Not Equals
let notEquals = 5!==2;
 */

/*
let storeA = 1.40;
let storeB = 3.40;

let storeAIsLower = storeA < storeB;

    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
 */

//Make above into a function:

/*
let storeA = 1.40;
let storeB = 3.40;

//Move line below into the function
//let storeAIsLower = storeA < storeB;

function compareStorePrices (storeA,storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

//compareStorePrices(10,5);
//compareStorePrices(7,10);

function squareNum (number) {
    return number * number;
}

let squaredNumber = squareNum(10);
console.log(squaredNumber);

//Functions should usually be no more than 20 lines of code, and should only do 1 thing.
 */

/*
let x = 10;  //This is global scope

function addNumbers(n, m, x) { //This is function scope. We will not see these numbers outside the function.
    console.log(x);
    let b;
    if (1===1) {  //This is block scope.  If we want to use b outside of this statement, we have to call it above.
        let b = 8;
    }
    console.log(b);
    return n + m;
}

addNumbers(2, 3, 8);
*/

/*
//(0 indexed)          0  1  2  3  4
let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];
//console.log(ourArray[4][0]);

let newArr = ourArray[4];
console.log(newArr);
 */

/*
//(0 indexed)   0  1  2  3  4
let ourArray = [1, 2, 3, 4, 5];

for(let i=0; i<5; i++){ //3 components to a for loop: counter; comparison; incrementer
    console.log("i is equal to: " + i);
    //console.log(ourArray[i]);
}
 */

/*
//(0 indexed)             0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

//For arrays of unknown length, replace i<5 with i<ourArray.length
for(let i=0; i<ourArray.length; i++){ //3 components to a for loop: counter; comparison; incrementer
    //console.log("i is equal to: " + i);
    console.log(ourArray[i]);
}
 */

/*
//Or, we can get the array length outside the loop by adding arrLen before the for loop & using it as the comp.
//(0 indexed)             0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = ourArray.length;
for(let i=0; i<arrLen; i++){ //3 components to a for loop: counter; comparison; incrementer
    //console.log("i is equal to: " + i);
    console.log(ourArray[i]);
    for(let j = 0; j<10; j++){  //Nested loops; inner loop will do its loops for every time the outer loop executes.
        console.log("j is equal to " + j);
    }
}
 */

let x = 0;
while (x < 10) {  //Careful; will run until a conditional is false.  Put the counter inside the loop.
    console.log("Ran");
    x = x + 1;
}