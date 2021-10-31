function fab(n) {
    if (n === void 0) { n = 3; }
    if (n === 1)
        return [0];
    if (n === 2)
        return [0, 1];
    else {
        var a = fab(n - 1);
        a.push(a[n - 2] + a[n - 3]);
        return a;
    }
}
console.log(fab(100));
