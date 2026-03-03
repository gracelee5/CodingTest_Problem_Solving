const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let T = Number(input[0]);
let answer = "";

for (let i = 1; i <= T; i++) {
  let arr = input[i].split(" ").map(Number);

  arr.sort((a, b) => b - a);

  answer += arr[2] + "\n";
}

console.log(answer.trim());