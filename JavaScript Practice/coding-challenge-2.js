/*
-> f(x)=(x^2)+3x-(2/3)
-> Array with f(x) for values x=1, x=2, x=3
-> Console log x1<x2 with message 
Greater: "
*/

console.groupCollapsed("Coding Challenge 2");

let x = 0;
let x1 = x ** 2 + 3 * x - 2 / 3; //Operator precedence
let x2 = x ** 2 + 3 * x - 2 / 3; 
let x3 = x ** 2 + 3 * x - 2 / 3; 
let arr = [];
arr.push(x1, x2, x3);
console.log("Lesser ", x1 < x2);

console.groupEnd();