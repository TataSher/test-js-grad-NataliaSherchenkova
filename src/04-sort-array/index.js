/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is:
// LEVEL2 solution: O(n^2)
// LEVEL3 solution: Average O(n log n), worst (n^2)
// Explain:
// LEVEL2: 
// Function                     |    Average          | Worst Case
// isNotInteger                 |      O(n)           |  O(n)
// arr.some(isNotInteger)       |      O(n)           |  O(n)
// bubbleSort(arr)              |      O(n^2)         |  O(n^2)
// LEVEL3: 
// Function                     |    Average          | Worst Case
// isNotInteger                 |      O(n)           |  O(n)
// arr.some(isNotInteger)       |      O(n)           |  O(n)
// quickSort( )                 |      O(n log n)     |  O(n^2)

// LEVEL1 solution:
var check = require('check-types');

module.exports = function sortArray(arr) {
  if (!check.array.of.integer(arr)) {
    throw new TypeError;
  }
  return arr.length === 0 ? arr : arr.sort((a, b) => a - b );
};

// LEVEL2 solution (Bubble Sort):
module.exports = function sortArray(arr) {
  const isNotInteger= (element) => isNaN(element) || !Number.isInteger(element)
  if (!Array.isArray(arr) || arr.some(isNotInteger)) {
    throw new TypeError;
  }
  return arr.length === 0 ? arr : bubbleSort(arr)
};

function bubbleSort(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}

// LEVEL3 solution (QuickSort):

module.exports = function sortArray(arr) {
  const isNotInteger= (element) => isNaN(element) || !Number.isInteger(element)
  if (!Array.isArray(arr) || arr.some(isNotInteger)) {
    throw new TypeError;
  }
  return arr.length === 0 ? arr : quickSort(arr, 0, arr.length - 1);
};

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], 
        i       = left, 
        j       = right; 
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); 
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) { 
            quickSort(items, left, index - 1);
        }
        if (index < right) { 
            quickSort(items, index, right);
        }
    }
    return items;
}
