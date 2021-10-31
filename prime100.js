var num = 541;
var isPrime = function (num) {
    var count = 2;
    while (count < (num / 2) + 1) {
        if (num % count !== 0) {
            count++;
            continue;
        }
        ;
        return false;
    }
    ;
    return true;
};
var primeUpto = function (num) {
    if (num < 2) {
        return [];
    }
    ;
    var res = [2];
    for (var i = 3; i <= num; i++) {
        if (!isPrime(i)) {
            continue;
        }
        ;
        res.push(i);
    }
    ;
    return res;
};
console.log(primeUpto(num));
