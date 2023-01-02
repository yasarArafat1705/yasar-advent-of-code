import fs from "fs";
// read file synchronously
const readData = fs
  .readFileSync("./input.txt", "utf8")
  .replace(new RegExp("[\r\n]", "gm"), " ")
  .trim()
  .replace(/[ ,]+/g, ",")
  .split(",");

function getMaxCaloriesValue() {
  return Math.max.apply(
    Math,
    readData.map((e) => {
      return parseInt(e);
    })
  );
}
console.log("Max Calories is " + getMaxCaloriesValue());
