let arr = [34, 30, 25, 98, 100];                //34      30 25 98 100       30 34 25 98 100
for (let i = 0; i < arr.length; i++) {          //30      25  98 100         25 30 34 98 100
  for (let j = 0; j < arr.length - 1 - i; j++)  //25       98 100            
    if (arr[j] > arr[j + 1]) {                  //98       100
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }

console.log(arr);
