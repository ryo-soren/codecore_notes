// import chalk from "chalk"

// // const colour = process.argv[2]
// const width = process.argv[2]
// const height = process.argv[3]
// const outputStr = ""

// for (let h = 0; h < height; h++) {
//     for (let w = 0; w < width; w++) {
//         outputStr += chalk.bgRed(".")
//     }
//     outputStr += "\n"
// }

// console.log(outputStr);

import chalk from "chalk";
const color = process.argv[2];
const width = process.argv[3];
const height = process.argv[4];
let result = "";

// function stringToColor(str) {
//   let hash = 0;
//   for (let i = 0; i < str.length; i++) {
//     hash = str.charCodeAt(i) + ((hash << 5) - hash);
//   }
//   let colour = "#";
//   for (let i = 0; i < 3; i++) {
//     let value = (hash >> (i * 8)) & 0xff;
//     colour += ("00" + value.toString(16)).substr(-2);
//   }
//   return colour;
// }

// let colorHex = stringToColor(color);
// console.log(colorHex);

for (let h = 0; h < height; h++) {
  for (let w = 0; w < width; w++) {
    if (h % 2 == 0) {
      if (w % 2 == 0) {
        result += chalk.bgWhite(" ");
      } else {
        result += chalk.bgRed(" ");
      }
    } else {
      if (w % 2 == 0) {
        result += chalk.bgRed(" ");
      } else {
        result += chalk.bgWhite(" ");
      }
    }
  }
  result += "\n";
}

console.log(result);