var arr = [23, 45, 12, 67, 89];
function secondLargestElement(arr) {
    var first = -Infinity;
    var second = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        }
        else if (arr[i] > second && arr[i] != first) {
            second = arr[i];
        }
    }
    return second;
}
console.log(secondLargestElement(arr));
