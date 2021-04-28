function createDeck(){
    var suits = ['Blue', 'Red', 'Yellow', 'Green'];
    var ranks = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    var uniqueCards = ['Wild', 'Wild', 'Skip'];
    var deck = [];

    for (let suitCount=0; suitCount< 4; suitCount++){
        for (let numCount=0; numCount < 12; numCount++){
            //console.log(ranks[numCount] + suits[suitCount]);
            deck.push(ranks[numCount]+ suits[suitCount]);
            deck.push(ranks[numCount]+ suits[suitCount]);
        }
        for (let unique=0; unique<3; unique++){
            deck.push(uniqueCards[unique])
        }
    }
    return deck
}
function shuffle(deck){
    for (let i=0; i<108; i++){
        let tempCard= deck[i]; 
        let randomCard = Math.floor(Math.random()*108);
        deck[i] = deck[randomCard];
        deck[randomCard] = tempCard;
    }
}

let testDeck = createDeck();
shuffle(testDeck);
console.log(testDeck);

//create a 10 card hand
let tenCardHand = testDeck.splice(0, 10);
//console.log(tenCardHand)

let tenCardHandString = tenCardHand.join(' ')
console.log(tenCardHandString)



//console.log(deck)
//console.log(deck.length)