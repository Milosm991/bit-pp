//////////              1       //////////////
// Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

function skip(a) {
    var minIndex = 0;
    var maxIndex = 0;
    newArray = [];
    for (i = 0; i < a.length; i++) {
        if (a[minIndex] > a[i]) {
            minIndex = i
        }
        if (a[maxIndex] < a[i]) {
            maxIndex = i
        }
    }
    var b = a[minIndex];
    a[minIndex] = a[maxIndex];
    a[maxIndex] = b;
    return a
}
var res = skip([3, 500, 12, 149, 53, 414, 1, 19])
console.log(res)