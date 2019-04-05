function groupAnimals(animals) {
  // you can only write your code here!
  for (var i = 0; i < animals.length; i++){
   for (var j = 0; j <= (animals.length - i - 1); j++){
      if (animals[j] > animals[j + 1]){
         var temp = animals[j]
         animals[j] = animals[j + 1]
         animals[j + 1] = temp
      }
    }
  }

  var result = []
  for (var k = 0; k < animals.length; k++){
    // console.log(animals[k])
    var found = false
    for (var l = 0; l < result.length; l++){
      if (animals[k][0] === result[l][0][0]){
        found = true
        result[l].push(animals[k])
      } 
    } if (found == false){
        result.push([animals[k]])
      }
  }
  return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


//SORT
//HURUF AWAL NOT DUPLICATE