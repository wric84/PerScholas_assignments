array1 = [-55, -1, -1, -1, -1]

function arraySearch(arr){
  let total = arr.length
  let positive = 0
  let negative = 0
  let zero = 0
  for (i=0; i<total; i++){
    if (arr[i] > 0){
      positive += 1
    } else if (arr[i] < 0){
      negative += 1
    } else {
      zero += 1
    } 
    } 

    console.log((positive/total + (positive/total == 1 ? '.0000':'0000')).slice(0,8))
    console.log((negative/total + (negative/total == 1 ? '.0000':'0000')).slice(0,8))
    console.log((zero/total + (zero/total == 1 ? '.0000':'0000')).slice(0,8))
  }

arraySearch(array1)