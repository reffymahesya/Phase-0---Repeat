function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
var satu = arr.length - 1
var dua = arr.length - 2
console.log(satu + ' - ' + dua + ' ini length')
console.log(arr[satu] + ' - ' + arr[dua])

  for (var i = 0; i < arr.length; i++){
    // console.log(arr[i])
    if (arr[i + 1] - arr[i] === arr[satu] - arr[dua]){
      return true
    } else{
      return false
    }
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false