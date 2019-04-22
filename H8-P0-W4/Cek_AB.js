function checkAB(num) {
  // you can only write your code here!
  var temp = []

  for (var i = 0; i < num.length; i++){
  	if (num[i] === 'a'){
  		var calculate = Math.abs(i - num.indexOf('b')) - 1
  		temp.push(calculate)
  		// console.log(temp)
  	}
  }
  if (temp === 3){
  	return true
  } else {
  	return false
  }
  // for (var j = 0; j < temp.length; j++){
  // 	console.log(temp)
  // 	if (temp[j] === 3){
  // 		return true
  // 	} else {
  // 		return false
  // 	}
  // }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false