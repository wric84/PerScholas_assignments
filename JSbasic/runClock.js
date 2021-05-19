/*let todayDate = new Date();
let hours = todayDate.getHours();
let minutes = todayDate.getMinutes();
let seconds = todayDate.getSeconds();


console.log(hours + ':' + minutes + ':' + seconds);
console.log(Date())

counter = todayDate.getSeconds()
for (counter=1; counter <=20; counter++){
        console.log(counter)
}
*/

/*
for(counter=1; counter=100000; counter++){
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    time = (h + ":" + m + ":" + s);
    console.log(time)
}
*/

let counter=60;
while(counter<=0){
    let d = new Date();
    let seconds = d.getSeconds();
    time = (seconds);
    currentTime=[]
    if (time != currentTime){
        currentTime.push(time)
        console.log(currentTime)
    }
    else if (time == currentTime){
        currentTime = time
    }
    counter--
}