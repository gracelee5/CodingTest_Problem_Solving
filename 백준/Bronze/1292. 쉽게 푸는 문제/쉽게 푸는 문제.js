const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [A, B] = input[0].split(" ").map(Number);

let problems = [];
for (let i = 1; problems.length < B; i++) {
  for (let j = 0; j < i; j++) {
    problems.push(i);
  }
}
let answer = problems.slice(A - 1, B).reduce((sum, cur) => sum + cur, 0);
console.log(answer);
