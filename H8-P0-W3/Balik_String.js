function balikString(words){
var balik = ''
  for (var i = words.length - 1; i >= 0; i--){
    balik += words[i]
  }
  return balik
}

console.log(balikString('Hello word!'))