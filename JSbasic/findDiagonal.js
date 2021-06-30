array1 = [
    [1,2,3], //row 0
    [4,5,6], // row 1
    [7,8,9]] //row 2

array2 = [
    [11, 22, 33, 44, 55],
    [34, 34, 34, 34, 34],
    [23, 56, 68, 23, 14],
    [-11, 33, -54, 14, 9],
    [-27, 54, 3, 2, 98]
]

function diagonalDifference(arr){
    let num = arr.length
    let leftDiag = arr[0][0] + arr[num-1][num-1]
    let rightDiag = arr[0][num-1] + arr[num-1][0]
    let mid = num-2

    for (let i=1; i<=mid; i++){
        leftDiag += arr[i][i]
        console.log(leftDiag)
        rightDiag += arr[i][num-1-i]
    }

    if (leftDiag > rightDiag)
        return (leftDiag-rightDiag)
    else   
        return(rightDiag - leftDiag)
}

console.log(diagonalDifference(array1))