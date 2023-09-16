/*
-> Create an array of integers
-> Push (const) strings into it
-> Console log them with a message signifying what they are
*/

console.groupCollapsed("Coding Challenge 1");

    const myArray = [1, 2, 3, 4, 5];
    const count = myArray.push(6, 7, 8, 9, 10);
    const animals = myArray.push("cat", "dog", "mouse", "horse", "cow");
    console.log(myArray)

    /*
    This is how they do it in the exercise solution, but I feel the above is cleaner....
    */

    let arrayNumbers = [2, 4, 6, 8];
    const s1 = "one";
    const s2 = "three";
    arrayNumbers.push(s1, s2);
    console.log("This is our array", arrayNumbers);

console.groupEnd();