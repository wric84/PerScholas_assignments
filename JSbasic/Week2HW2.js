//5. Write a function that returns the number of arguments passed to the function when called.
function findArguments(...arg){
    return arg.length;
}
console.log(findArguments(2, 3, 1, 8, 99))
//6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
function flipItAndReverseIt(a){
    let aLength = (a.length-1);
    let drow = '';

    for (aLength; aLength>=0; aLength--){
        drow += a.charAt(aLength);
    } 
    return drow
}

console.log(flipItAndReverseIt("Colton Wright"))

//7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
string = ["bear", "twenty-two", "Mission to Mars"]
function findLongestWord(string){
    for (i=0; i<=string.length; i++){
        if (string[string.length-1].length <= string[i].length){
            var x = string[i]
            string[i] = string[array.length-1]
            string[string.length-1]=x
        }
    }
    return string[string.length-1]+ " "+ string[string.length -1].length
}
console.log(string)

//8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
let words = ["apple", "orange", "banana", "Pineapple", "Mango"]
function filterLongWords(x, y){
    let wordLength = y;
    let temp = [];
    for (let i=0; i<x.length; i++){
        if (x[i].length >= y){
            temp.push(x[i])
        }
    }
    return temp
}
console.log(words, 6)
//Bonus
//Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().

//Write a function that takes a string as argument and returns an object where:
//-the keys are the characters that occur in the string
//-the values are the number of occurrences for each letter, regardless of the case

const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!'
  };
  let total = 0;
  // ADD CODE HERE
  for (let property in sumMe){
    if (sumMe[property] > 0){
      total += sumMe[property]
    }
  }
  console.log(total)
