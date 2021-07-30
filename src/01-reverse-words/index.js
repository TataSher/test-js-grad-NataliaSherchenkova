/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is:
// O(n2)
//
// Explain:
//
// Function                     |    Average          | Worst Case
// inputWord.split('')          |      O(n)           |  O(n)
// inputWord.reverse()          |      O(n)           |  O(n)
// inputWord.join('')           |      O(n)           |  O(n)
// input.split('')              |      O(n)           |  O(n)
// input.map()                  |      O(n)           |  O(n)
// reverseArray.join(' ')       |      O(n)           |  O(n) 
// reverseWord(inputWord)       |      O(n)           |  O(n) 
// reverseArray()               |      O(n)           |  O(n)
//reverseWordsInSentence(input) |      O(n)           |  O(n)


module.exports = function reverseWordsInSentence(input) {
  function reverseWord(inputWord) {
  return inputWord.split('').reverse().join('')
  }

  const reverseArray = input.split(' ').map(word => reverseWord(word));
  return reverseArray.join(' ');
};


                                                                                                                                                                                                                                                                                                                                                                      