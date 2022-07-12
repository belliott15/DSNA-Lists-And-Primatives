function reverseWords(sentence) {
  // //reversing letters, word order remains
  // const word = sentence.split(' ');
  // // split the words indepentently

  // const reverse = word.split('');
  // //join words in reverse
  // console.log(reverse);

  const word = sentence
    .split('')
    .reverse()
    .join('')
    .split(' ')
    .reverse()
    .join(' ');

  //   console.log(word);
  return word;
}

function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  // const words = sentence.split(' ');
  // const end = words.map(char => char[0].toUpperCase() + char.slice(1).toLowerCase());
  // return end.join(' ');
}

// function oddishOrEvenish(number) {
//   const numberToString = number
//     .toString()
//     .split('')
//     .map((number) => Number(number));
//   console.log(numberToString);
//   let sum = 0;
//   for (let i = 0; i < numberToString.length; i++) {
//     const sum = +numberToString[i];
//     if (numberToString.length === numberToString.length - 1) return sum;
//   }
// }

function oddishOrEvenish(number) {
  const numberToString = number
    .toString()
    .split('')
    .map((number) => Number(number))
    .reduce((sum, number) => sum + number, 0);
  if (numberToString % 2 !== 0) return 'Oddish';
  return 'Evenish';
}

module.exports = { reverseWords, titleCase, oddishOrEvenish };
