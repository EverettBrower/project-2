// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};

//Reverse a single words function
let reverseWord = word => {
  var newString = "";
  for (var i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
};

//RevWords1

let revWords1 = sentence => {
  let wordsArr = sentence.split(" ");
  let result = " ";
  for (var i = 0; i < wordsArr.length; i++) {
    result = result + reverseWord(wordsArr[i] + " ");
  }
  return result;
};

//revWords2

let revWords2 = sentence => {
  let wordsArr = sentence.split(" ");
  let result = " ";
  wordsArr.forEach(word => {
    result = result + reverseWord(word) + " ";
  });
  return result;
};

//revWords3

let revWords3 = sentence => {
  let wordsArr = sentence.split(" ");
  let result = " ";
  for (var word of wordsArr) {
    result = result + reverseWord(word) + " ";
  }
  return result;
};
