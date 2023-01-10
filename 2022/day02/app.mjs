import fs from "fs";

const combinations = [
  "A X",
  "A Y",
  "A Z",
  "B X",
  "B Y",
  "B Z",
  "C X",
  "C Y",
  "C Z",
];
const round1score = [4, 8, 3, 1, 5, 9, 7, 2, 6];
const round2score = [3, 4, 8, 1, 5, 9, 2, 6, 7];
let round1total = 0;
let round2total = 0;
fs.readFileSync("./input.txt", "utf8")
  .split("\r\n")
  .filter((n) => n)
  .forEach((r) => {
    round1total += Number(round1score.at(combinations.indexOf(r)));
    round2total += Number(round2score.at(combinations.indexOf(r)));
  });
console.log("Round 1 Total score is " + round1total);
console.log("Round 2 Total score is " + round2total);
