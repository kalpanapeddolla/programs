function isPrimeNumber(num) {
    // 1 and 0 are not prime numbers
    if(num < 2) { return false; }
    for (var i = 2; i < num; i++) {
        // check if dividiable by any other number, if yes it is not a prime number
        if(num % i == 0){ return false; }
    }
    return true;
}

var arr = [];
var x = 0;
while(arr.length < 100){
    if(isPrimeNumber(x)) { arr.push(x); }
    x++;
}

console.log(arr);
console.log(arr.length)