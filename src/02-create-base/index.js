// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is:
// O(1)
// Explain:
//
// Function               |    Average          | Worst Case
// const add              |      O(1)           |  O(1)


module.exports = function createBase(integer) {
  const add = (a) => a + integer;
  return add
};
