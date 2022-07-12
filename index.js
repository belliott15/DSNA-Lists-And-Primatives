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

function oddishOrEvenish(number) {
  const numberToString = number
    .toString()
    .split('')
    .map((number) => Number(number))
    .reduce((sum, number) => sum + number, 0);
  if (numberToString % 2 !== 0) return 'Oddish';
  return 'Evenish';
}

function at(arr, index) {
  if (index >= 0) return arr[index];
  const negativeNumber = arr.length + index;
  return arr[negativeNumber];
}

// function fizzBuzz(number) {
//   const n = Number(number);
//   const fizzBuzzArray = Array.from({ length: n }, (_, i) => i + 1).map(number => {if (number % 3 === 0 && number % 5 === 0 ) return "FizzBuzz")}
//   {if (number % 3 === 0 && number % 5 === 0 ) return "FizzBuzz";)}

//   console.log(fizzBuzzArray);
// }

function fizzBuzz(number) {
  const n = Number(number);
  const fizzBuzzArray = Array.from({ length: n }, (_, i) => i + 1).map(
    (number) => {
      if (number % 15 === 0) return 'FizzBuzz';
      else if (number % 3 === 0) return 'Fizz';
      else if (number % 5 === 0) return 'Buzz';
    }
  );
  return fizzBuzzArray;
}

module.exports = { reverseWords, titleCase, oddishOrEvenish, at, fizzBuzz };
