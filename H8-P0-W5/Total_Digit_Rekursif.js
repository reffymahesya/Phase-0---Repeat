function totalDigitRekursif(angka) {
  // you can only write your code here!
  var string = angka.toString()

  if (string.length === 1) {
    return angka
  } else {
    var angkaPertama = Number(string[0])
    var potong = Number(string.slice(1))
    return angkaPertama + totalDigitRekursif(potong)
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5