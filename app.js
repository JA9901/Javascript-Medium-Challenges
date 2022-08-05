// Question number 1 
// Given two values, return the first one if it is falsy,
// otherwise return the second one.

function filterOutFalsy (first, second){
    console.log(!first ? first : second)
}

filterOutFalsy(0, 500)
filterOutFalsy(false, 100)
filterOutFalsy([true,'Dog'])

// Question number 2
// Given an array, return its length

function arrlength(arr){
    console.log(arr.length)
}

arrlength([1,2,3])
arrlength([5,0,-4,1])
arrlength([])

// Question number 3
// Given an array, return the first element

function lastElem(array){
    console.log(array[array.length -1])
}

lastElem([3,2,0,6,2])
lastElem(['dog','cat','bull'])
lastElem([null,5,false])

// Question number 4
// Given an array, return the sum of every element.

function arrSum(arrayAddition){
    let sum = 0
    for (let i = 0; i < arrayAddition.length; i++)
    sum = sum + arrayAddition[i];
    console.log(sum)
}

arrSum([2,2,2])
arrSum([100,200,500])
arrSum([0,-5,-10])

// Question number 5
// Given a number, add up all the numbers from the one to the number
// that is given. E.g. An input of 4 will give you 1+2+3+4, which equals 10.

function progressiveSum (number){
    let sumOfAll = 0
    for (let i = 1; i <= number; i++)
    sumOfAll = sumOfAll + i;
    console.log(sumOfAll)
}

progressiveSum(3)
progressiveSum(4)
progressiveSum(600)

//Question number 6
// Given a number in seconds, return this number in mm:ss format.

function calcTime(time){
    let minutes = Math.floor(time / 60)
    let seconds = time % 60
    if (minutes.toString().length === 1){
        minutes = `0${minutes}`
    }
    if (seconds.toString().length === 1){
        seconds = `${seconds}0`
    }
    

    console.log(`${minutes}:${seconds}`)
}

calcTime(66)
calcTime(50)
calcTime(300)

// Question number 7
// Given an array of numbers, return the largest number of that array

function getMax(max){
    let maxValue = max[0];
    for(let i = 0; i < max.length; i++){
        if (max[i]> maxValue){
            maxValue = max[i];
        }
    }
    console.log(maxValue)
}

getMax([5,100,0])
getMax([12,10,-20])
getMax([-300,-100,-200])

// Question number 8
// Given a string, return the reversed string

function reverseString(words){
    let reversedWords = '';
    for (let i = 0; i < words.length; i++){
        reversedWords = words[i] + reversedWords;
    }
    console.log(reversedWords)

// How to solve using a decrementing for loop
    // for (let i = words.length - 1; i >= 0; i--){
    //     reversedWords += words[i]
    // }
    // console.log(reversedWords)
// How to solve using reverse array property
    // console.log(words.split('').reverse().join(''))
}

reverseString('abc')
reverseString('David')
reverseString('This is cool')

// Question number 9
// Given an array of elements, return the same length array 
// filled with 0's.

function convertToZeros(numbers){
    for (let i = 0; i < numbers.length; i++){
        numbers[i] = 0
    }
    console.log(numbers)
}
// How to solve by using a new array
    // function convertToZeros(numbers){
    //     let newArr = []
    //     for (let i = 0; i < numbers.length; i++){
    //         newArr[i] = 0
    //     }
    //     console.log(newArr)
    // }
// How to solve using array.fill
    // function convertToZeros(numbers){
    //     console.log(new Array(numbers.length).fill(0))
    // }
// How to solve using array.map
    // function convertToZeros(numbers){
    //     console.log(numbers.map(elem => 0))
    // }

convertToZeros([5,100,0])
convertToZeros([12])
convertToZeros([1,2,3,4,5])

// Question number 10
// Given an array of fruits, if it is an apple remove it from the array.

// How to solve using for loop
function removeApples(apples){
    let noApples = []
    for(let i = 0; i < apples.length; i++){
        // if element is not equal to Apple we add it to the new array
        if (apples[i] !== 'Apple'){
            noApples.push(apples[i])
        }
    }
    console.log(noApples)
}

// How to Solve using array 'filter
    // function removeApples(apples){
    //     console.log(apples.filter(elem => elem !== 'Apple'))
    // }

removeApples(['Banana','Apple','Orange','Apple'])
removeApples(['Tomato','Orange','Banana'])
removeApples(['Banana','Orange','Apple'])

// Question number 11
// Given an array of values, filter out all the falsy values and only
// return the truthy values.

// How to solve using for loop
function filterOutFalsyValues(falsy){
    let truthyArr = []
    for(let i = 0; i < falsy.length; i++){
        if (!!falsy[i] === true){
            truthyArr.push(falsy[i])
        }
    }
    console.log(truthyArr)
}

// How to solve using array filter
    // function filterOutFalsyValues(falsy){
    //     console.log(falsy.filter(elem => !!elem === true))
    // }

filterOutFalsyValues(["",[],0,null,undefined,"0"])
filterOutFalsyValues(['Tomato','Orange','Banana',false])
filterOutFalsyValues(['Banana','Orange','Apple'])

// Question number 12
// Given an array of truthy and falsy values, return the same array of
// elements into its boolean value.

function convertToBoolean(bowl){
    console.log(bowl.map(elem => !!elem))
}

convertToBoolean([500,0,"David","",[]])