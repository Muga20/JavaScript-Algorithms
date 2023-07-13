{
  /* 
    Problem 
    Given an array of integer sort the arrays * from smallest to largest /ascending order*.
    */
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

const arr = [1, 5, 3, 2, 4];
console.log(insertionSort(arr));

//bog o = o(n^2) worst case
