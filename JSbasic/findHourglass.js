array1 = [
    [11, 22, 33, 44, 55, 1],
    [34, 34, 34, 34, 34, 1],
    [23, 56, 68, 23, 14, 1],
    [11, 33, 54, 14, 9, 14],
    [27, 54, 34, 24, 98, 1],
    [23, 56, 68, 23, 14, 1]
]

array1 = [
    [x, J, x, J, X, J],
    [23, x, J, x, J, 1],
    [x, J, x, J, x, J],
    [27, 54, 34, 24, 98, 1],
    [23, 56, 68, 23, 14, 1]
]
function diagonalDifference(arr){
    let num = arr.length
    let topRow = arr[0][0] + arr[0][1] + arr[0][2]
    let btmRow = arr[2][0] + arr[2][1] + arr[2][2]
    let mid = arr[1][1]
    // let leftDiag = arr[0][0] + arr[num-1][num-1]
    // let rightDiag = arr[0][num-1] + arr[num-1][0]
    // let mid = num-2

    for (let i=1; i<=mid; i++){
        topRow += arr[i+1]
        console.log(topRow)
        btmRow += arr[i][num-1-i]
    }

    // if (leftDiag > rightDiag)
    //     return (leftDiag-rightDiag)
    // else   
    //     return(rightDiag - leftDiag)
}

console.log(diagonalDifference(array1))