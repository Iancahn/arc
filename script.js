//ARC DEMO TEST
var A = [1, 2, 3, 5, 6, 101, 8, 9, 11];


function solution(A) {
    let j = 1;
    // write your code in JavaScript (Node.js 8.9.4)
    let sortedArray = A.sort((a, b) => a - b);
    console.log(sortedArray);
    for (let i = 0; i < sortedArray.length; i++) {
        if (j < sortedArray[i] && sortedArray[i] > 0) {
            console.log("Smallest number is: " + (j));
            return j;
        } else {
            console.log("i is:" + sortedArray[i]);
            console.log("j is :" + j);
            j++;
        }
    }
}

solution(A);

// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].