let p = new Promise((resolve, reject) =>{
    let sum = 1+2
    if (sum==3){
        resolve(sum);
    }else{
        reject('Failed...')
    }
})

p.then((value)=>{
    console.log('success... ' + value);
}).then((value) =>{
    if(value%2==0)
    console.log(value+ ' is an even number');
}).catch((value)=> {
    console.log('Printing results withing "catch"... ' + value)
})