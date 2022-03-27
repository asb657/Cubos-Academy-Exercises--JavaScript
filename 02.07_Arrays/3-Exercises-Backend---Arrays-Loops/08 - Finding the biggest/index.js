const numbersList = [3, 24, 1, 8, 11, 7, 15];

// method1 -  Math.max

console.log(Math.max(...numbersList));

// method2 - loop


function biggestNumberInArray(arr) {
  var m = -Infinity,
   i = 0,
    n = arr.length;
  
  
    for (; i != n; ++i) {
    if (arr[i] > m) {
      m = arr[i];
    }
  }
  return m;
}

console.log(biggestNumberInArray(numbersList));


