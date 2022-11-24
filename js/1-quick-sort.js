function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([1, 8, 8, 5, 3, 9, 4, 2, 1, 7]));
console.log(quickSort([5, 3, 8, 4, 6, 3, 2]));
