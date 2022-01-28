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

function decode(expr) {
  let str = "";
  for (let i = 0; i < expr.length; i + 10) {
    let letter = expr.slice(i, i + 10);
    if (letter === "**********") {
      str += " ";
    }
    let morse = "";
    for (let j = 0; j < letter.length; j++) {
      morseElement = letter.slice(j, j + 2);
      if (morseElement !== "00") {
        morse = morseElement === "10" ? "." : "-";
      }
    }
    str += MORSE_TABLE[morse];
  }
  return str;
}

module.exports = {
  decode,
};
