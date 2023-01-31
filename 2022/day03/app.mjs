import fs from "fs";
const readData = fs.readFileSync("./input.txt", "utf8").split("\r\n");

//part 1

console.log(
  "The sum of the items appears in both compartments is " + calculateItems()
);

function calculateItems() {
  let finalTotal = 0;
  (readData || []).forEach(async (r) => {
    let item = r
      .split("")
      .splice(0, Math.ceil(r.length / 2))
      .find(function (val) {
        return (
          r
            .split("")
            .splice(Math.ceil(r.length / 2))
            .indexOf(val) != -1
        );
      });
    const isUpperCase = (item) => /^[A-Z]*$/.test(item);
    finalTotal += Number(alphaValue(item, isUpperCase(item)));
  });
  return finalTotal;
}

//part 2

const readData2 = [...readData];
console.log(
  "The item type that corresponds to the badges of each three-Elf group total is " +
    calculateGroupItems()
);

function calculateGroupItems() {
  let array = [];
  let finalTotal = 0;
  while (readData2.length > 0) array.push(readData2.splice(0, 3));
  array.forEach((a) => {
    let y = a.map((b) => {
      return b.split("");
    });
    var result = y.shift().filter(function (v) {
      return y.every(function (a) {
        return a.indexOf(v) !== -1;
      });
    });
    const letterItem = [...new Set(result)].toString();
    const isUpperCase = (item) => /^[A-Z]*$/.test(item);
    finalTotal += Number(alphaValue(letterItem, isUpperCase(letterItem)));
  });
  return finalTotal;
}

//common functions

function alphaValue(val, type) {
  let letterVal = 0;
  const alphabets = generateAlphabet();
  if (type) {
    alphabets.forEach((s, idx) => {
      let index = 27 + idx;
      if (s.toUpperCase() == val) {
        letterVal = index;
      }
    });
  } else {
    letterVal = alphabets.indexOf(val) + 1;
  }
  return letterVal;
}

function generateAlphabet() {
  return [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
}
