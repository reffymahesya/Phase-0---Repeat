function targetTerdekat(arr) {
  // you can only write your code here!
var temp = []

  for (var i = 0; i < arr.length; i++){
    if (arr[i] === 'x'){
      var calculate = Math.abs(i - arr.indexOf('o'))
      temp.push(calculate)
      // console.log(temp)
    } 
  }

  if (calculate === undefined){
    return 0
  }

var min = temp[0]
  for (var j = 0; j < temp.length; j++){
    if (temp[j] < min){
      min = temp[j]
    }
  }
  return min
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2


// function targetTerdekat(arr) {
//   // you can only write your code here!

// var simpan = 0
// var a = arr
// var posisiO = 0;
//   for (var i = 0; i < arr.length; i++){
//     if (arr[i] === 'o'){
//       posisiO = i;
//     }
//   }
  
//   var foundXLeft = false;
//   var xStepLeft = 0;
//   for(var i = posisiO; i >=0; i--){
   
//     if(arr[i] === 'x'){
//       foundXLeft = true;
//       break;
//     }
//      xStepLeft++;
//   }

//   var foundXRight = false;
//   var xStepRight = 0;
//   for(var i = posisiO; i < arr.length; i++){
//     if(arr[i] === 'x'){
//       foundXRight = true;
//       break;
//     }
//         xStepRight++;
//   }

//   if( foundXLeft && foundXRight){
//     if(xStepLeft < xStepRight){
//       return xStepLeft;
//     }
//     else{
//       return xStepRight;
//     }
//   }

//   if(foundXRight){
//     return xStepRight;
//   }
//   if(foundXLeft){
//     return xStepLeft;
//   }
//   if(foundXRight ===  false && foundXLeft === false){
//     return 0;
//   }
//   // return simpan
// }

// // TEST CASES
// console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2