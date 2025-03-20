let arr = [45, 23, 90, 20]
for (let i = 0; i < arr.length-1; i++){   //45  
  let MinimumIndex = i;                //i=0,1,2,3  
  for (let j = i + 1; j < arr.length; j++){  //23,90,20
    if (arr[j] < arr[MinimumIndex]) {   //23,90,20<45    23<45 true   90<45false   20<45true
      MinimumIndex = j;                                  //j=1  minimumindex=1 //j=3 minimumindex=3
    }                                           // minimumindex=i=0,1,2,3   j=1,2,3 //45,23,90,20
                                             //20,23,45,90   
  }
  let temp = arr[i]
  arr[i] = arr[MinimumIndex]
  arr[MinimumIndex] = temp
}

console.log(arr);