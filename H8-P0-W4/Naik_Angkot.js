function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var result = []

  if (arrPenumpang.length === 0){
    return []
  }

  for (var i = 0; i < arrPenumpang.length; i++){
    var obj = {}

    obj.penumpang = arrPenumpang[i][0]
    obj.naikDari = arrPenumpang[i][1]
    obj.tujuan = arrPenumpang[i][2]
    
    for (var j = 0; j < rute.length; j++){
      if (rute[j] === arrPenumpang[i][2]){
        var tujuan = j
      } else if (rute[j] === arrPenumpang[i][1]){
        var naik = j
      }
      bayar = (tujuan - naik) * 2000
    }

    obj.bayar = Math.abs(bayar)
    result.push(obj)
  }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]