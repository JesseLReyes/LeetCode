// You are given two 0-indexed integer permutations A and B of length n.

// A prefix common array of A and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.

// Return the prefix common array of A and B.

// A sequence of n integers is called a permutation if it contains all integers from 1 to n exactly once.

var findThePrefixCommonArray = function(A, B) {
    let seenNumbers = {};
    let prefixArray = []; 
    let commonPrefixes = 0;

    for(let i = 0; i < A.length; i++){
        seenNumbers[A[i]] = ++seenNumbers[A[i]] || 1;
        if(seenNumbers[A[i]] !== 0 && seenNumbers[A[i]] % 2 === 0){
            commonPrefixes++;
        }
        seenNumbers[B[i]] = ++seenNumbers[B[i]] || 1;
        if(seenNumbers[B[i]] !== 0 && seenNumbers[B[i]] % 2 === 0){
            commonPrefixes++;
        } 
        prefixArray.push(commonPrefixes);
    }
    return prefixArray;
};