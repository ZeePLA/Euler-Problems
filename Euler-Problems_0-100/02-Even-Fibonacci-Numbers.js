function fiboEvenSum(n) {
    let fibonacciArray = []
    let sumOfEvenFibs= 0

    for (let i = 0; i < n; i++) {
        if (i <= 1) {
        fibonacciArray.push(i);
        } else {
        let nextFibNum = fibonacciArray[i-1] + fibonacciArray[i-2];
        fibonacciArray.push(nextFibNum);
        }
    }

    for (let i = 0; i < fibonacciArray.length; i++) {
        if (fibonacciArray[i] % 2 === 0 && fibonacciArray[i] <= n){
            sumOfEvenFibs += fibonacciArray[i];
        }
    }
    return sumOfEvenFibs;
    
};


console.log(fiboEvenSum(1000));
