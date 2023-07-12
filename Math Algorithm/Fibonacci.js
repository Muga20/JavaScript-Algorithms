{/*
Problem 

Give the 'n' of the first 'n' element of the fibonacci sequence 

*/}


function fibonacci (n) {

    let fib = [ 0 , 1 ];

    for (i = 2; i < n ; i ++ ){

        fib[i] = fib[i - 1] + fib[i -2 ]

    }

    return fib 
}

console.log(fibonacci(3))

//Big-o o(n)