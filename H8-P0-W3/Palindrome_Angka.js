function angkaPalindrome(num) {
  for (var i = 0; i < num; i++){
      num++
  var str = num.toString()
  var a = str.length
  var string = ''
    for (var j = a - 1; j >= 0; j--){
      string += str[j]
    }
    if(str === string){ 
              
      return num
      
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001