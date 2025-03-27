function shiftZerosToRight(arr) {
    let lastNonZeroIndex = 0; // 1

    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== 0) {                    
            arr[lastNonZeroIndex] = arr[i];  //arr[0]=34   
            if (i != lastNonZeroIndex) { //0 != 0
              arr[i] = 0; ////arr[i]=0
            }
            lastNonZeroIndex++;    //0 to 1
            
        }
    }
    return arr;
}
let arr = [34, 0, 23, 45, 0, 2, 4];
console.log(shiftZerosToRight(arr));
