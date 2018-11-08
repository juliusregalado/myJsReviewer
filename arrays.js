console.log('arrays!!!')

// array.some()
//The some() method checks if any of the elements in an array pass a test implenented by the provided function.

//array.toString()
//The JavaScript method toString() converts an array to a string of (comma separated) array values.

//array.join()
// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:


let nums = [1,2,3,4,5, 'yey']

function checkAdult(age) {
    return age >= 18;
}

console.log(nums.some(checkAdult))