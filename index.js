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

  console.log(word);
  return word;
}

module.exports = { reverseWords };
