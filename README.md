# Hey i am trying to implement THE RSA KEYS Algo in Javascript.

Just for fun

I pushed .env Variables. Both are are small, cause of Javascript Limitations. But these should never be shared.

Python Version of this code coming soon, that will work with any Pair Of Primes Numbers.

# When assigning the value of text

## (Checkout how to get Phinn in explanation.js)

Won't work with letters above m, because a = 1, m = 13 and phin = 14.

Didnt find a solution for now, might be due to the int limit of javascript

# When assigning the value of d

## (Checkout how to get Phinn in explanation.js)

This could be the line of code to get d but
let d =
decryptionsKeys[Math.floor(Math.random(0, 1) * (decryptionsKeys.length - 1))];
But since Javascript Int are limited, we'll use the lowest value possible of d atm
