const { e, phin, n, textEncrypted, myNumberEncrypted } = require("./encrypt");
const { numberLetter } = require("./utils");
const fs = require("fs");

// NEED TO FIND OUT D HERE

// such as  d * e mod(phin) = 1

let decryptionsKeys = [];
let limit = 200;

function getDecryptionNumber(e, phin) {
  for (let i = 0; i < limit; i++) {
    if ((i * e) % phin == 1) {
      decryptionsKeys.push(i);
    }
  }
}
getDecryptionNumber(e, phin);

// This could be the line of code to get d but
// let d =
//   decryptionsKeys[Math.floor(Math.random(0, 1) * (decryptionsKeys.length - 1))];

// But since Javascript Int are limited, we'll use the lowest value possible of d atm
let d = decryptionsKeys[1];

// In Order to Decrypt the message, we will elevate all the number to the power of d, and mod them to n
// We'll then transform all numbers to letters, such as a = 1, b = 2, c = 3 ... etc

let NumbersDecrypted = textEncrypted.map(number => Math.pow(number, d) % n);

let textDecrypted = numberLetter(NumbersDecrypted);

console.log(textDecrypted);
