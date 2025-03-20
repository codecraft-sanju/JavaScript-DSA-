//In Selection Sort, during each iteration, we find the smallest element and swap it into its correct position.

let arr = [45, 23, 90, 20]
for (let i = 0; i < arr.length-1; i++){   //45  
  let MinimumIndex = i;                //i=0,1,2,3  
  for (let j = i + 1; j < arr.length; j++){  //23,90,20
    if (arr[j] < arr[MinimumIndex]) {   //23,90,20<45    23<45 true   90<45false   20<45true
      MinimumIndex = j;                                  //j=1  minimumindex=1 //j=3 minimumindex=3
    }                                           // minimumindex=i=0,1,2,3   j=1,2,3 //45,23,90,20
                                             //20,23,45,90   
  }
  let temp = arr[i]   //temp=45  
  arr[i] = arr[MinimumIndex]   //arr[i]=20
  arr[MinimumIndex] = temp     //minimumindex=45
}

console.log(arr);



//1<0 j<i  23<45  true  i=minimumindex=0=23 //2<1  90<45  false //20<45 true 3<0  i=minimumindex=0=20     //23,_,_,_  //20,_,_,_ 