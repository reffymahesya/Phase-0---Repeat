function groupAnimals(animals) {
  // you can only write your code here!
  var result = []
  var insideA = []
  var insideC = []
  var insideK = []
  var insideU = []

  for (var i = 0; i < animals.length; i++){
    if (animals[i][0][0] === 'a'){
      insideA.push(animals[i])
    } else if (animals[i][0][0] === 'c'){
      insideC.push(animals[i])
    } else if (animals[i][0][0] === 'k'){
      insideK.push(animals[i])
    } else if (animals[i][0][0] === 'u'){
      var foundU = true
      if (foundU){
        insideU.push(animals[i])
        result.push(insideU)
      }
    }
  }
  result.push(insideA, insideC, insideK)
  return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]