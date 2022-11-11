

/*
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s


/////////////////////////
////////// STEPS ///////
//////////////////////

1-Create a Function
2-Create 2 Arrays : Major , Minor 
3-Loop In Minor : 1: 1  2: 1,1  3: 1,1,1
                


////////////////////////////////////
////// What i Learn From Searching
////////////////////////////////////
1- (...Array)
*/

function pyramid(numbers) {
    let majorArray = [];
    for (let number = 1; number <= numbers; number++) {
        majorArray.push([...Array(number)].fill(1))
    }
    return majorArray;
}


console.log( pyramid(4));

