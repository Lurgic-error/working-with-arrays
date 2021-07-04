/**
 * The reduce() method executes a callback function once for each assigned value present in the array, taking 4 arguments:
 * 
 * accumulator
 * currentValue
 * currentIndex
 * array
 * 
 * 
 */

const arr = [0, 1, 2, 3, 4]

console.log(arr.reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue))

const initialValue = 10
console.log(arr.reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue, initialValue))