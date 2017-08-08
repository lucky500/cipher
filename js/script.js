var sentence = prompt('Please enter a sentence');
var firstLetter, lastLetter;


function capitalize(sentence){
  firstLetter = sentence.charAt(0).toUpperCase();
  lastLetter = sentence.charAt(sentence.length - 1).toUpperCase();
  return firstLetter + lastLetter;
}
capitalize(sentence);

function reverseLetters(sentence){
  return lastLetter + firstLetter;
}
reverseLetters(sentence);

function callFunctions(sentence){
  var capitalizedLetters = capitalize(sentence);
  var reversedLetters = reverseLetters(capitalizedLetters);
  return newSentence = sentence + reversedLetters;
}
callFunctions(sentence);

function countLetters(sentence){
  var countSentence = sentence.split('');
  countSentence = countSentence.filter(function(str){
    return /\S/.test(str);
  });
  var total = Math.floor(countSentence.length / 2);
  var joinedSentence = countSentence.join('');
  var letterFound = joinedSentence.charAt(total - 1);
  var letterConcatedToTitle = letterFound + sentence;

  return letterConcatedToTitle;
}

console.log('countSentence:' , countLetters(sentence));

function reverseString(sentence){
  var lastStop = countLetters(sentence);
  var lastFunction = callFunctions(lastStop);
  return lastFunction.split('').reverse().join('');
}

console.log(reverseString(sentence));
