function changeMe(arr) {
  // you can only write your code here!
  if (arr.length === 0){
    console.log('""')
  }

  var counter = 1

  for (var i = 0; i < arr.length; i++){
    var obj = {}
    console.log(counter++ + '. ' + arr[i][0] + ' ' + arr[i][1])
    obj.firstname = arr[i][0]
    obj.lastname = arr[i][1]
    obj.gender = arr[i][2]
    if (arr[i][3] === undefined){
      obj.age = 'Invalid Birth Year'
    } else {
      obj.age = Math.abs(2019 - arr[i][3])
    }
    console.log(obj)
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""