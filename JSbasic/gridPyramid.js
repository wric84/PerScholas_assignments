let value = 1;
let amountRow=5;
let amountCol=5;
for(let row = 1; row <= amountRow; row++){
//For each row starting at 1 until 5
    for(let col = 1; col<= amountCol; col++){
    //then for each column
        if (col <= row){
            process.stdout.write(`${row}`);
        } 
        
    }
    console.log();
}