const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const M = Number(input[0]);
const N = Number(input[1]);
let primenumbers = [];
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    primenumbers.push(i);
  }
}

if (primenumbers.length === 0) {
  console.log(-1);
} else {
  const sum = primenumbers.reduce((acc, cur) => acc + cur, 0);
  const min = Math. min(...primenumbers);
  console.log(sum);
  console.log(min);
} 