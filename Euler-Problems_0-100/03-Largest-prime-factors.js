
function largestPrimeFactor(number) {
    let primesList = [];
    let primeFactorsOfNumber = [];
    
    
    for(let i = 2; i <= number; i++ ){
        let isPrime = true;
        
        for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++){
            if (i % j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime && number % [i] === 0){
            primeFactorsOfNumber.push(i);
        }
    }
    let lastIndex = primeFactorsOfNumber.length-1;
    return primeFactorsOfNumber[lastIndex];
};





console.log(largestPrimeFactor(6008));







/*
function largestPrimeFactor(number) {
    let primeFactorsOfNumber = [];
    
    // Function to generate prime numbers up to a given limit
    function generatePrimes(limit) {
        let primes = [];
        let sieve = Array(limit + 1).fill(true);
        sieve[0] = sieve[1] = false;

        for (let i = 2; i <= Math.sqrt(limit); i++) {
            if (sieve[i]) {
                primes.push(i);
                for (let j = i * i; j <= limit; j += i) {
                    sieve[j] = false;
                }
            }
        }

        for (let i = Math.sqrt(limit) + 1; i <= limit; i++) {
            if (sieve[i]) {
                primes.push(i);
            }
        }

        return primes;
    }

    // Generate prime numbers up to the square root of the given number
    let primes = generatePrimes(Math.floor(Math.sqrt(number)));

    // Check divisibility by prime numbers
    for (let i = 0; i < primes.length; i++) {
        while (number % primes[i] === 0) {
            primeFactorsOfNumber.push(primes[i]);
            number /= primes[i];
        }
    }

    // If the remaining number is greater than 1, it is also a prime factor
    if (number > 1) {
        primeFactorsOfNumber.push(number);
    }

    let lastIndex = primeFactorsOfNumber.length - 1;
    return primeFactorsOfNumber[lastIndex];
};
*/