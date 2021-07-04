/**
 * 
 * The some() tests whether at least one element in the array passes the test implemented by the callback function. 
 * The callback function will receive 3 arguments, the item, the index, and the full array.
 * Additionally, is possible to assign a value for this when executing the callback by using the argument thisArg.
 * 
 * 
 * arr.some(callback(element[, index[, array]])[, thisArg])
 * 
 */

const arr = [1,2,3,4,5,6,7,8,9]

arr.some((item, index, arr) => {
    console.log('item', item)
    console.log('index', index)
    console.log('arr', arr)
    return item > 20
})