{
  /* 
Problem 
Given an array of integer sort the arrays * from smallest to largest /ascending order*.
*/
}

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

const arr = [1, 5, 3, 2, 4];
console.log(bubbleSort(arr));

//big o = o(n^2) worst case
