function ubahHuruf(kata) {
  // you can only write your code here!
  var abjad = 'abcdefghijklmnopqrstuvwxyza'
  var result = ''

  for (var i = 0; i < kata.length; i++){
    for (var j = 0; j < abjad.length; j++)
    if (kata[i] === abjad[j]){
      result += abjad[j + 1]
      break
    } 
  }
  return result
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('kerenz')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu