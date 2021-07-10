//1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
/* For the last problem I made a function to check to see if the values are numbers, I am using 
it here to filter out any values that aren't numbers, so it can do all the math properly. */
ages = ages.filter(isNumber);

//made a function for the subtraction so it is easier to do multiple times
function lastMinusFirst(array) {
    var lastValue = array[array.length - 1];
    var firstValue = array[0];
    return lastValue - firstValue;
}

//1a
console.log(lastMinusFirst(ages));

//1b
ages.push(26);

console.log(lastMinusFirst(ages));

//1c
var sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
var avgerageAge = sum / ages.length;

console.log(avgerageAge);

//2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//2a
var total = 0;
for (let i = 0; i < names.length; i++) {
    total += names[i].length;
}
var averageLength = total / names.length;

console.log(averageLength);

//2b
var list = "";
for (let i = 0; i < names.length; i++) {
    list += (names[i] + " ");
}

console.log(list);

//5
let nameLengths = [];
for (i = 0; i < names.length; i++) {
    nameLengths[i] = names[i].length;
}

//6
var theSum = 0;
for (i = 0; i < nameLengths.length; i++) {
    theSum += nameLengths[i];
}

console.log(theSum);

//7
function multipliedWords(word, n) {
    var concWord = '';

    for (let i = 0; i < n; i++) {
        concWord += word;
    }
    return concWord;
}

//7 test
var string = 'who';
var amount = 11;

console.log(multipliedWords(string, amount));

//8
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

//8 test
var firstName = 'Nick';
var lastName = 'Croci';

console.log(fullName(firstName, lastName));

//9
function greaterThanC(numArray) {
    var total = 0;
    var greater = false;

    for (let i = 0; i < numArray.length; i++) {
        total += numArray[i];
    }

    if (total > 100) {
        greater = true;
    }

    return greater;
}

//9 test
let testArray1 = [6, 23, 56, 21, 42]; //this one is greater than 100
let testArray2 = [1, 5, 23, 6, 43]; //this one is less than 100
testArray1 = testArray1.filter(isNumber);
testArray2 = testArray2.filter(isNumber);

console.log(greaterThanC(testArray1));
console.log(greaterThanC(testArray2));

//10
function averageArray(numArray) {
    var average = 0;
    var total = 0;

    for (let i = 0; i < numArray.length; i++) {
        total += numArray[i];
    }

    average = total / numArray.length;
    return average;
}

//10 test
console.log(averageArray(testArray1));

//11
function compareArray(array1, array2) {
    var average1 = 0;
    var average2 = 0;
    var total1 = 0;
    var total2 = 0;
    var check = false;

    for (let i = 0; i < array1.length; i++) {
        total1 += array1[i];
    }

    average1 = total1 / array1.length;

    for (let i = 0; i < array2.length; i++) {
        total2 += array2[i];
    }
    average2 = total2 / array2.length;

    if (average1 > average2) {
        check = true;
    }

    return check;
}

//11 test
console.log(compareArray(testArray1, testArray2));
console.log(compareArray(testArray2, testArray1)); //flipped them to see both results

//12
function willBuyDrink(isHotOutside, moneyInPocket) {
    var buyDrink = false;

    if (isHotOutside == true && moneyInPocket >= 10.5) {
        buyDrink = true;
    }

    return buyDrink;
}

//12 test
var isHotOutside = true;
var moneyInPocket = 8;

console.log(willBuyDrink(isHotOutside, moneyInPocket));

//13
//This function I used in all the problems that involved arrays will numeric calculations
//It is used in the filter method to get rid of any datatypes that aren't a number.
function isNumber(num) {
    return typeof num === 'number';
}

//13 test

let messyArray = [13, true, 'hello', 42, undefined, 95, null, -100, .002];
messyArray = messyArray.filter(isNumber);

console.log(messyArray);