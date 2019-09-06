const quitSpaces = (str) => {
  let result = "";
  let arrayA = str.split(" ");

  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== "") result += arrayA[i];
  }
  return result;
};

const palindrome = (string) => {
  let str = quitSpaces(string);

  let len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(palindrome("anita lava la tina"));
