function CharCount(str) {
    if (str) {
        var obj = {};
        for (let i = 0; i < str.length; i++) {
            if (obj[str[i]]) {
                obj[str[i]] += obj[str[i]];
            } else {
                obj[str[i]] = 1;
            }
        }
        console.log(obj);
    }
}
CharCount("TECHATCORE");