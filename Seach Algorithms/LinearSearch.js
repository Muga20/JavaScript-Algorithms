{/* 
Problem 

Given an array of 'n' elements and a target 't' find the index of 't' in the array. 
Return -1 if the largest element is not found 

*/}


function linearSearch (arr , target){

    for(let i = 0; arr.length; i ++ ){
        if(arr[i] === target ){
            return i 
        }
    }

}

console.log(linearSearch([5,2,10,25,2], 10))
 
//Big-o = o(n)