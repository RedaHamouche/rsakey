// HOW DOES RSA KEY WORKS ?

// Step 1: Pick Two Prime Numbers, numbers with hundreds of digits for more safety. Never share them

let p = 2;
let q = 7;

// Step 2: Come Up with a Number that is the product of those. This Number never get published
let n = p * q; // 14

// Step 3: Phi fonction is the number of numbers that are co primes wtih n ( from 2 to n) ( obviously p and q are not)

// Here for exemple : 1, 3, 5, 9, 11, 13. So 6 prime numbers

// You can manually count them but since these numbers should be enormous you should us the following function

let phin = (p - 1) * (q - 1);

// Step 4: We now choose a number e that has to fit certain properties:

// 1 < e < phin (6 here): so 2, 3, 4 or 5

// e must be co prime with n (14 here) and phin (6 here).

// 5. because 2 and 4 are obviously not co prime, and 3 is not co prime with phin.

let e = 5;

// I now have my Encryption keys, my locks that i will share to everyone: e and n. (5, 14)

// Step 5: We now need to workout the key. Never Share it

// We choose a number d such that d * e mod(phin) = 1;

// Here 5 * d mod(6) = 1

// Lets see all numbers that are multiples of 5;

// 5, 10, 15, 20, 25, 30. I'll let you do mod 6 on each one and eventually find out a pattern for these numbers
// We here we'll take the Sixth multiple of 5.
// 5 * 6 = 30. 30mod(6) = 0;
// We here won't pick 6, but we'll pick 11 instead
// 5 * 11 = 55.
// 5 % 6 = 1.
let d = 11;

// So the key is Eleven

// LETS NOW PUT THAT INTO CODE
