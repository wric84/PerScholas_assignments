//1 = div wall
//2 = div ground
// 3= div coin
// 4 = 
// 5 = div pacman
let map = [[1, 1, 1, 1, 1],
            [1, 5, 3, 3, 1],
            [1, 3, 3, 3, 1],
            [1, 3, 3, 3, 1],
            [1, 3, 3, 3, 1],
            [1, 3, 3, 3, 1],
            [1, 3, 3, 3, 1],
            [1, 3, 3, 3, 1],
            [1, 3, 3, 3, 1],
            [1, 1, 1, 1, 1]];

function drawWorld(){
    for (var y=0; y<map.length; y=y+1){
        console.log(map[y])
        for (var x = 0; x< map[y].length; x=x+1){
            console.log(map[y][x])
            if(map[y][x] === 1){
                document.getElementsByClassName('world').innerHTML+='<div class="wall"></div>';
            }
            else if(map[y][x] === 3){
                document.getElementsByClassName('world').innerHTML+='<div class="coin"></div>';
            }
            else if(map[y][x] === 2){
                document.getElementsByClassName('world').innerHTML+='<div class="ground"></div>';
            }
            else if(map[y][x] === 5){
                document.getElementsByClassName('world').innerHTML+='<div class="pacman"></div>';
            }
        }
        document.getElementsByClassName('world').innerHTML+="<br>";
    }
}

