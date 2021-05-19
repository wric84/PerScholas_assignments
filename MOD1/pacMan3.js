let map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //1
        [1, 5, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1], //2
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1], //3
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1], //4
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1], //5
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1], //6
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1], //7
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1], //8
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 2, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1], //9
        [1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 6, 2, 7, 2, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1], //10
        [1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 2, 8, 2, 2, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1], //11
        [1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1], //12
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1], //13
        [1, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1], //14
        [1, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1], //15
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1], //16
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1], //17
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1], //18
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1], //19
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] //20
    ]

    let map1= map;

    let pacman = {
        x: 1,
        y: 1
    }
    let inky = {
        x: 10,
        y: 9
    }
    let blinky = {
        x: 12,
        y: 9
    }
    let dot = {
        x: 11,
        y: 10
    }
    //let div = document.createElement('div');
    //let div = document.createElement('div')

    function drawWorld() {
        world.innerHTML = '';
        for (let y = 0; y < map.length; y = y + 1) {
            console.log(map[y])
            for (let x = 0; x < map[y].length; x = x + 1) {
                console.log(map[y][x])
                if (map[y][x] === 1) {
                    //document.getElementById('world').insertAdjacentHTML('beforeend', '<div class="wall"></div>');
                    let div = document.createElement('div');
                    div.setAttribute("class", "wall")
                    //div.appendChild(document.createTextNode("wall"));
                    world.appendChild(div)
                }
                else if (map[y][x] === 3) {
                    //document.getElementById('world').insertAdjacentHTML('beforeend', '<div class="coin"></div>');
                    let div = document.createElement('div');
                    div.setAttribute("class", "coin")
                    //div.appendChild(document.createTextNode("coin"));
                    world.appendChild(div)
                }
                else if (map[y][x] === 2) {
                    //document.getElementById('world').insertAdjacentHTML('beforeend', '<div class="ground"></div>');
                    let div = document.createElement('div');
                    div.setAttribute("class", "ground")
                    //div.appendChild(document.createTextNode("ground"));
                    world.appendChild(div)
                }
                else if (map[y][x] === 5) {
                    //document.getElementById('world').insertAdjacentHTML('beforeend', '<div class="pacman"></div>');
                    let div = document.createElement('div');
                    div.setAttribute("class", "pacman")
                    //div.appendChild(document.createTextNode("pacman"));
                    world.appendChild(div)
                }
                else if (map[y][x] === 6) {
                    //document.getElementById('world').insertAdjacentHTML('beforeend', '<div class="inky"></div>');
                    let div = document.createElement('div');
                    div.setAttribute("class", "inky")
                    //div.appendChild(document.createTextNode("inky"));
                    world.appendChild(div)
                }
                else if (map[y][x] === 7) {
                    let div = document.createElement('div');
                    div.setAttribute("class", "blinky")
                    world.appendChild(div)
                }
                else if (map[y][x] === 8) {
                    let div = document.createElement('div');
                    div.setAttribute("class", "dot")
                    world.appendChild(div)
                }
            }
            let div = document.createElement('br');
            world.appendChild(div)
        }
    }
    drawWorld()
    

    document.onkeydown = function (e) {
        if (e.keyCode === 37) {
            //left
            if (map[pacman.y][pacman.x - 1] !== 1) {
                map[pacman.y][pacman.x] = 2//blank spot;
                pacman.x = pacman.x - 1;
                map[pacman.y][pacman.x] = 5
                if(map[pacman.y][pacman.x] == map[inky.y][inky.x]){
                    pacman = inky
                };
                if (map[inky.y][inky.x - 1] !== 1) {
                    let tempSpace = map[inky.y][inky.x -1]
                    map[inky.y][inky.x -1] = map[inky.y][inky.x];
                    map[inky.y][inky.x] = tempSpace
                    inky.x = inky.x - 1;
                    map[inky.y][inky.x] = 6
                }
                let tempMap = map;
                    map = map1;
                    map1 = tempMap;
                //drawWorld()
            }
        }
        else if (e.keyCode === 38) {
            //up
            if (map[pacman.y - 1][pacman.x] !== 1) {
                map[pacman.y][pacman.x] = 2;
                pacman.y = pacman.y - 1;
                map[pacman.y][pacman.x] = 5
                if(map[pacman.y][pacman.x] == map[inky.y][inky.x]){
                    pacman = inky};
                if (map[inky.y-1][inky.x] !== 1) {
                    let tempSpace = map[inky.y-1][inky.x]
                    map[inky.y-1][inky.x] = map[inky.y][inky.x];
                    map[inky.y][inky.x] = tempSpace
                    inky.y = inky.y - 1;
                    map[inky.y][inky.x] = 6
                }
                //drawWorld()
            }
        }
        if (e.keyCode === 39) {
            //right
            if (map[pacman.y][pacman.x + 1] !== 1) {
                map[pacman.y][pacman.x] = 2;
                pacman.x = pacman.x + 1;
                map[pacman.y][pacman.x] = 5
                if(map[pacman.y][pacman.x] == map[inky.y][inky.x]){
                    pacman = inky;}
                if (map[inky.y][inky.x + 1] !== 1) {
                    let tempSpace = map[inky.y][inky.x +1]
                    map[inky.y][inky.x +1] = map[inky.y][inky.x];
                    map[inky.y][inky.x] = tempSpace
                    inky.x = inky.x + 1;
                    map[inky.y][inky.x] = 6
                }   
                
                //drawWorld()
            }
            
        }
        if (e.keyCode === 40) {
            //down
            if (map[pacman.y + 1][pacman.x] !== 1) {
                map[pacman.y][pacman.x] = 2;
                pacman.y = pacman.y + 1;
                map[pacman.y][pacman.x] = 5;
                if(map[pacman.y][pacman.x] == map[inky.y][inky.x]){
                    pacman = inky};
                if (map[inky.y+1][inky.x] !== 1) {
                    // if (map[inky.y+1][inky.x] === 3) { <--- How to get coins or ground to be unaffected by ghost
                    let tempSpace = map[inky.y+1][inky.x]
                    map[inky.y+1][inky.x] = map[inky.y][inky.x];
                    map[inky.y][inky.x] = tempSpace
                    inky.y = inky.y + 1;
                    map[inky.y][inky.x] = 6
                }
                //drawWorld()
            }
        }
        drawWorld()
        //return map
    }



























//wall = 1
//ground = 2
//coin = 3
//pacman = 5

// let score = 0
// // let wall = '<div class="wall"></div>'
// let map = [ //Grid
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 5, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1],
//     [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
//     [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1],
//     [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
//     [1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 1, 3, 3, 3, 3, 3, 1],
//     [1, 3, 3, 3, 3, 3, 3, 1, 2, 2, 1, 3, 1, 3, 3, 3, 3, 3, 1],
//     [1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1],
//     [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
//     [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
//     [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
//     [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// ]

// let pacman = { //where pacman starts in array by element#
//     x: 1,
//     y: 1,
// }

// function drawWorld() {
//     document.getElementsByClassName('world').innerHTML = "";
//     for (let y = 0; y < map.length; y = y+1) {
//         console.log(map[y])
//         for (let x = 0; x < map[y].length; x = x+1) {
//             console.log(map[y][x])
//             if (map[y][x] === 1) {
//                 //console.log(map[y][x]===1)
//                 document.getElementsByClassName('world').innerHTML += '<div class="wall"></div>';
//             }
//             else if (map[y][x] === 3) {
//                 document.getElementsByClassName('world').innerHTML += '<div class="coin"></div>';
//             }
//             else if (map[y][x] === 2) {
//                 document.getElementsByClassName('world').innerHTML += '<div class="ground"></div>';
//             }
//             else if (map[y][x] === 5) {
//                 document.getElementsByClassName('world').innerHTML += '<div class="pacman"></div>';
//             }
//         }
//         document.getElementsByClassName('world').innerHTML += "<br>";
//         //console.log(map)
//     }
// }

// document.onkeydown = function (e) {
//     if (e.keyCode === 37) {
//         //left
//         if (map[pacman.y][pacman.x - 1] !== 1) {
//             if (map[pacman.y][pacman.x - 1] === 3) {
//                 score = score + 100;
//             }
//             map[pacman.y][pacman.x] = 2;
//             pacman.x = pacman.x - 1;
//             map[pacman.y][pacman.x] = 5
//             drawWorld()
//             //document.querySelectorAll("h1").innerHTML="score"
//         }
//     }
//     else if (e.keyCode === 38) {
//         //up
//         if (map[pacman.y - 1][pacman.x] !== 1) {
//             if (map[pacman.y - 1][pacman.x] === 3) {
//                 score = score + 100;
//             }
//             map[pacman.y][pacman.x] = 2;
//             pacman.y = pacman.y - 1;
//             map[pacman.y][pacman.x] = 5
//             drawWorld()
//         }
//     }
//     if (e.keyCode === 39) {
//         //right
//         if (map[pacman.y][pacman.x + 1] !== 1) {
//             if (map[pacman.y][pacman.x + 1] === 3) {
//                 score = score + 100;
//             }
//             map[pacman.y][pacman.x] = 2;
//             pacman.x = pacman.x + 1;
//             map[pacman.y][pacman.x] = 5
//             drawWorld()
//         }
//     }
//     if (e.keyCode === 40) {
//         //down
//         if (map[pacman.y + 1][pacman.x] !== 1) {
//             if (map[pacman.y + 1][pacman.x] === 3) {
//                 score = score + 100;
//             }
//             map[pacman.y][pacman.x] = 2;
//             pacman.y = pacman.y + 1;
//             map[pacman.y][pacman.x] = 5
//             drawWorld()
//         }
//     }
// }

// drawWorld()

        // function updateScore(){
        //     let count = score

        // }
        // window.onload = (function () { drawWorld() });
        // document.getElementById("para1").innerHTML=drawWorld();