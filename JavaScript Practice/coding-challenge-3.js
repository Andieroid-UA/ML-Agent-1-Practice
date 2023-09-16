console.groupCollapsed('Coding Challenge 3');

/*
=> Ternary operator working on (3 === 4)
False: say "NOOOO" True: say "YESH"

NESTED INTO

=> A switch which increases the value of the variable x passed in by +1 if x < 3

NESTED INTO

=> if/else where if a string says "Whadup" we go to the switch, else we say "SAD"
*/

let string = "";
let z = 0;
if (string === "Whadup") {
    switch (z) {
        case 1: {
            z += 1;
            {
            3 === 4 ? console.log("YESH") : console.log("NOOOO");
            }
            break;
            }
            case 2: {
                z += 1;
                break;
            }  
        } 
        } else {
            console.log("SAD");
        }

console.groupEnd();