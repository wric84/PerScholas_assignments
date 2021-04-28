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