
function bubbleSort(arr) {

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {

    // set swapped flag
    let swapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      // If the current value is greater than its neighbor to the right
        // Swap those values
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;

       // Do not move this console.log
       console.log(arr.join(","));
      }
    }


    // If you get to the end of the array and no swaps have occurred, return
    // Otherwise, repeat from the beginning
    if (!swapped) return;
  }

}

module.exports = bubbleSort;
