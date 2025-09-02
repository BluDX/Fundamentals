/*
* Variables, Data Types, and Typing
 */
let wordData;

wordData = "Word list";

console.log(wordData);
let subTotal = 100;
let tax = subTotal *0.07;
let totalWithTax = tax + subTotal;

let obj = {
    key1: "value 1",
    key2: 4,
    boolean: true,
    obj2: {
        obj2Key1: "value of inner object",
    }
};

console.log(obj.obj2.obj2Key1);

let variable = "string";

let var1 = "2";
let var2 = 5;
let result = var1 + var2;

console.log(result); //=25 because 5 was converted to a string; therefore 2+5=25

let add = 1 + 2;
let sub = 2 - 1;
let mult = 2 * 4;
let division = 4 /2;
let mod = 5 % 2;

let string = "String 1 " + "String 2"
console.log(string);