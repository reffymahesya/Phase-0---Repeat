function pasanganTerbesar(num) {
  // you can only write your code here!
var strSplit = num.toString().split('')
var max = strSplit[0]+strSplit[1]

  for (var i = 0; i < strSplit.length; i++){
    if (max < strSplit[i]+strSplit[i+1]){
      max = Number(strSplit[i]+strSplit[i+1])
    }
  }
  return max
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99