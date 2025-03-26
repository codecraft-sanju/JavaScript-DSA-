 let arr = [34, 56, 23, 78, 23, 67, 56]; 

function dublicateValue(arr) {
  let dublicate = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // If a duplicate is found and it's not already in the duplicate array
      if (arr[i] == arr[j] && !dublicate.includes(arr[i])) {
        dublicate.push(arr[i]);
      }
    }
  }
  return dublicate;
}

console.log(dublicateValue(arr));

