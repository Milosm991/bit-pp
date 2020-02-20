function position(str, a, n) {
    var res = " ";
    for (i = 0; i < str.length; i++) {
        if (i === n) {
            res += a + " ";
        }
        res += str[i];

    }
    return res;
}
var c = position("My random string", "JS", 0)
console.log(c);
