function insertionSort (arr) {
    for(i = 1; i < arr.length; i++){
      let current = arr[i]
      for(j= i -1; j < arr.length; j--){ //looping through for comparison
        if (current < arr[j]){   
          arr[j + 1] = arr[j] // shifting the j value a step forward to the right
          arr[j] = current //putting the current val in the place of j val
        }else {
          break
        }
      }
    }
    return arr
  }
  
  let a = [3,1,7,9,2]
  
  console.log(insertionSort(a))