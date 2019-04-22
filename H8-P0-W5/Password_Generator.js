function changeVocals (str) {
  //code di sini
  var abjad = 'aiueoAIUEO'
  var abjad2 = 'bjvfpBJVFP'
  var nextAbjad = ''

  for (var i = 0; i < str.length; i++) {
    var found = false
    for (var j = 0; j < abjad.length; j++) {
      if (str[i] === abjad[j]) {
        nextAbjad += abjad2[j]
        found = true
      } 
    }
    if (found === false) {
      nextAbjad += str[i]
    }
  }
  return nextAbjad
}

function reverseWord (str) {
  //code di sini
  var balik = ''
  for (var i = str.length - 1; i >= 0; i--) {
    balik += str[i]
  }
  return balik
}

function setLowerUpperCase (str) {
  //code di sini
  var low = 'abcdefghijklmnopqrstuvwxyz'
  var up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var result = ''

  for (var i = 0; i < str.length; i++) {
    var found = false
    for (var j = 0; j < low.length; j++)
    if (str[i] === low[j]) {
      result += up[j]
      found = true
    } else if (str[i] === up[j]) {
      result += low[j]
      found = true
    }
    if (found === false) {
      result += str[i]
    }
  }
  return result
}

function removeSpaces (str) {
  //code di sini
  var hilang = str.replace(/ /, "")
  return hilang
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
    return changeVocals(reverseWord(setLowerUpperCase(removeSpaces(name))))
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'