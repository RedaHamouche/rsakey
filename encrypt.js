require("dotenv").config();
const { letterValue, numberLetter } = require("./utils");

// NEED TO FIND OUT E HERE
let p = process.env.p;
let q = process.env.q;

let n = p * q;

let phin = (p - 1) * (q - 1);

let e;

let text = "cc ca";

// Won't work with letters above 13, cause phin = 14.
// Didnt find a solution for now, might be due to the int limit of javascript

text = text.toLowerCase();
if (text.length < 2) {
  return console.log("please enter more than one letter");
}

function gcd(a, b) {
  if (a == 0 || b == 0) return;
  if (a == b) return a;

  if (a > b) return gcd(a - b, b);
  return gcd(a, b - a);
}

function coprime(n, phin) {
  return gcd(n, phin) == 1;
}

let first_primes = [];
let second_primes = [];
function getFirstPrimes(n) {
  for (let i = 0; i < n; i++) {
    if (gcd(n, i) == 1 && i != 1) {
      first_primes.push(i);
    }
  }
}

function getSecondPrimes(phin) {
  for (let i = 0; i < phin; i++) {
    if (gcd(phin, i) == 1 && i != 1) {
      second_primes.push(i);
    }
  }
}
let coPrimesMatched;
function getCoPrimesList() {
  let map = {};
  first_primes.forEach(i => (map[i] = false));
  second_primes.forEach(i => map[i] === false && (map[i] = true));
  let coPrimesList = Object.keys(map).map(k => ({ name: k, matched: map[k] }));

  coPrimesMatched = coPrimesList.filter(el => el.matched == true);
}

getFirstPrimes(n);
getSecondPrimes(phin);
getCoPrimesList();

function getRandomE(arrayOfPrimes) {
  if (arrayOfPrimes[0].matched != true) {
    return console.log("your number isnt a co prime of " + n + "and " + phin);
  }
  let size = coPrimesMatched.length - 1;

  e = coPrimesMatched[Math.floor(Math.random(0, 1) * size)].name;
}
getRandomE(coPrimesMatched);

// We'll  transform all numbers to letters, such as a = 1, b = 2, c = 3 ... etc
let textToNumber = letterValue(text);
// Then, In Order to Encrypt the message, we will elevate all the number to the power of e, and mod them to n
let textEncrypted = textToNumber.map(number => Math.pow(number, e) % n);

// REMEMBER : p, q  NEVER GET SHARED IN PRACTISE

exports.e = e;
exports.n = n;
exports.phin = phin;
exports.textEncrypted = textEncrypted;
