import fs from "fs";

const readData = fs
  .readFileSync("./input.txt", "utf8")
  .split("\n")
  .map((s) => s.split(","));

function campCleanup(type) {
  let totalCount = 0;
  readData.forEach((item) => {
    let p1 = item[0].split("-").map((num) => Number(num));
    let p2 = item[1].split("-").map((num) => Number(num));
    if (p1[0] > p2[0]) {
      let temp = p1;
      p1 = p2;
      p2 = temp;
    }
    let result;
    if (type === "part1") {
      if (p1[0] == p2[0]) {
        result = true;
      } else {
        result = p1[1] >= p2[1];
      }
    } else {
      result = p1[1] >= p2[0];
    }

    if (result) {
      totalCount++;
    }
  });
  return totalCount;
}

console.log(
  campCleanup("part1") +
    " assignment pairs does one range fully contain the other"
);
console.log(campCleanup("part2") + " assignment pairs do the ranges overlap");
