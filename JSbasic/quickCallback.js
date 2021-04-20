let x = () => console.log('message from func x');

let y  = (n1, n2, callback) => {
    callback();
    console.log('num printed from func y: ' + n1 + " " +n2);
}


let a = 100

y(a, 20, x);
console.log()

y(10, 20, () => console.log(2+3))