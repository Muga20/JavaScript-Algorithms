{/*
Problem 

Given a sorted array of 'n' elements and  a target element 't' find the index of 't' in the array.
Return -1 if the largest element is not found. 

*/}

function binarySearch (arr , target ) {

    let left = 0;
    let right = arr.length -1;

    while (left <= right){
        let mid = Math.floor((left + right) /2)

        if (arr[mid] === target){
            return mid
        }
    }

    if (arr[mid] < target ){
        left = mid + 1 
    } else {
        right = mid - 1 
    }

    return -1 

}

console.log(binarySearch([5,8,10,5,8,9] , 10))


//Big-o = o(log n )