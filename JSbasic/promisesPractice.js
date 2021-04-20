let timesDadNeverKeptPromises = ['Christmas', 'Last Sunday', 'Birthday', 'Disney Land']
let timesDadDidKeepPromises = ['siblings birthday']
let count = timesDadNeverKeptPromises.length

let p = new Promise((resolve, reject) =>{
    for (i=0; i<=count; i++){
        if (i<timesDadDidKeepPromises.length){
            resolve(count);
        }else{
            reject(timesDadDidKeepPromises.length)
        }
    }
});

p.then((value) => {
    console.log('dad was a liar this many times: ' + value);
}).catch((value)=>{
    console.log('guess which promises were more important? ' + timesDadDidKeepPromises[0])
})
