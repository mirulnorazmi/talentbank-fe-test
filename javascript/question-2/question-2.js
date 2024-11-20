function removeDuplicates(array) {
  return [...new Set(array)];
}

// debug
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
