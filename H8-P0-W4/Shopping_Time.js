function shoppingTime(memberId, money) {
  // you can only write your code here!
  var itemList = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone']
  var itemPrice = [1500000, 500000, 250000, 175000, 50000]

  var obj = {}
    obj.memberId = memberId
    obj.money = money
    obj.listPurchased = []
    obj.changeMoney = 0
  var sisaUang = 0
  var totalBeli = 0

  if (memberId === '' || memberId === undefined){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } if (money < 50000){
    return 'Mohon maaf, uang tidak cukup'
  }

  for (var i = 0; i < itemList.length; i++) {
    if (money >= itemPrice[i]){
      totalBeli += itemPrice[i]
      sisaUang = money - totalBeli
      
      obj.listPurchased.push(itemList[i])
      obj.changeMoney = sisaUang
    }
  }
  return obj
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja