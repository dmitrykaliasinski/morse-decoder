const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

// function decode(expr) {
//   let str = "";
//   for (let i = 0; i < expr.length; i += 10) {
//     let letter = expr.slice(i, i + 10);
//     if (letter === "**********") {
//       str += " ";
//     }
//     let morse = "";
//     for (let j = 0; j < 10; j += 2) {
//       morseElement = letter.slice(j, j + 2);
//       if (morseElement !== "00") {
//         element = morseElement === "10" ? "." : "-";
//         morse += element;
//       }
//     }
//     str += MORSE_TABLE[morse];
//   }
//   return str;
// }

function decode(expr) {
  let str = "";
  for (let i = 0; i < expr.length; i += 10) {
    let letter = expr.slice(i, i + 10);
    if (letter === "**********") {
      str += " ";
    } else {
      let morse = letter
        .replace(/10/g, ".")
        .replace(/11/g, "-")
        .replace(/0/g, "");
      str += MORSE_TABLE[morse];
    }
  }
  return str;
}

module.exports = {
  decode,
};
