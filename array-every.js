/**
 * The every() method is in a way similar to the some() method, 
 * but it tests whether all the elements in the array pass the test implemented by the callback function.
 * 
 * 
 * arr.every(callback(element[, index[, array]])[, thisArg])
 * 
 * 
 */

const arr = [190, 2340,3,4235,23,2,4,2123,1]

console.log(arr.every((num, index, arr)=>{
    // console.log(`${index}::${num}`)
    return num > 209021 
}))

const a = [10, 9, 8, 7, 6].every(item => item > 5)

