function binarySearch(arr, key) {
  let left = 0;
  let right = arr.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.round((left + right) / 2);

    if (arr[middle] === key) {
      return `index of key: ${middle}`;
    } else if (arr[middle] < key) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return `key wasn't found`;
}

let array = [-1, 0, 3, 5, 7, 9, 12];

console.log(binarySearch(array, 0));
