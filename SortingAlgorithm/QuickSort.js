{
    /* 
    Problem 
    Given an array of integer sort the arrays * from smallest to largest /ascending order*.
    */
  }
  
  function quickSort(arr){
      if (arr.length <= 1){
          return arr 
      }
      
      let pivot = arr[arr.length -1]
      let left = []
      let right = []
      
      for (let i = 0 ; i < arr.length -1 ; i ++){
          if (arr[i] < pivot){
          left.push(arr[i])
          } else {
          right.push(arr[i])
          }
      }
      
      return [...quickSort(left) , pivot , ...quickSort(right)]
  }
  
  const arr = [1, 5, 3, 2, 4];
  console.log(quickSort(arr));
  
  //descending order
  
  //big o = o(n log n)
  //big o = o(n^2) worst case
  