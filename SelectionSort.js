let arr = [34, 56, 23, 87, 65];

function selectionSort() {
  

  for (let i = 0; i < arr.length - 1; i++) {       
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap arr[i] and arr[minIndex]
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

selectionSort(arr);
console.log('Sorted array:', arr);


// How This Works?
// Initial Array:
// [34, 56, 23, 87, 65]

// Pass 1: (Find min in [34, 56, 23, 87, 65], swap with 34)
// → [23, 56, 34, 87, 65]

// Pass 2: (Find min in [56, 34, 87, 65], swap with 56)
// → [23, 34, 56, 87, 65]

// Pass 3: (Find min in [56, 87, 65], swap with 56)
// → [23, 34, 56, 87, 65] (No change)

// Pass 4: (Find min in [87, 65], swap with 87)
// → [23, 34, 56, 65, 87]

// Final Sorted Array: [23, 34, 56, 65, 87]

