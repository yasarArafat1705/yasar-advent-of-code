import fs from "fs";
// read file synchronously
const readData = fs.readFileSync("./input.txt", "utf8").split("\r\n\r\n");

const list = readData.map((item) => {
  return item.split("\r\n").map((s) => {
    return parseInt(s);
  });
});
const maxValue = Math.max(...list.map((r) => r.reduce((a, b) => a + b, 0)));
console.log("Max Calories is " + maxValue);

const topThreeCalories = list
  .map((r) => r.reduce((a, b) => a + b, 0))
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((a, b) => {
    return a + b;
  });
console.log("Top Tree Calories Total is " + topThreeCalories);
