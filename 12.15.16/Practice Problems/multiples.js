/**
 * multiples

Write a function called multiples that accepts two numbers and returns an array of all numbers from 1 - 100
that are evenly divisible by both.

multiples(2, 19); // returns [38, 76]
multiples(10, 25); // returns [50, 100]
 */

/** Input: 2 numbers
 * Output: array
 * 
 * What am I trying to solve?
 * 
 * ELI5:
 * 1. take inputs (see lines 7 and 8)
 * 2. create an array that multiplies every number up to 100 for both parameters
 * 3. if the modulus for both is equal to zero, log it in an array
 * 4. compare the two arrays to find the numbers in common and push result to the final array
 * 
 */
    //1. take inputs (see lines 7 and 8)
function multiples(one, two) {
    //2. create an array that multiplies every number up to 100 for both parameters
    let answer = [];
    for (let i = 1; i <= 100; i++) {
        if ([i] % one === 0 && [i] % two === 0) {
            answer.push(i);
        }
    }
    console.log(answer);
    return answer;
}

let things = multiples(2, 19);
//console.log(answer);