const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);          // 수의 개수
const arr = input[1].split(" ").map(Number);  // N개의 수

let answer = 0;

for (let i = 0; i < N; i++) {
  if (arr[i] === 1) {  
    continue;
  }
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
    if (arr[i] % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    answer++;
  }
}
console.log(answer);