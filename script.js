const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

//91 characters

let generateBtnEl = document.getElementById("generateBtn");
let output1 = document.querySelector("#password1");
let output2 = document.querySelector("#password2");
let password1 = [];
let passwordLength = 12;

generateBtnEl.addEventListener("click", generateRandomPassword);
generateBtnEl.addEventListener("click", generateRandomPassword2);

function getPass() {
  let randomChar = Math.floor(Math.random() * 91);
  return characters[randomChar];
}

function generateRandomPassword() {
  let randomPassword = "";
  output1.innerText = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += getPass();
  }
  output1.textContent = randomPassword;
}

function generateRandomPassword2() {
  let randomPassword = "";
  output2.innerText = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += getPass();
  }
  output2.textContent = randomPassword;
}
