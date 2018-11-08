console.log('arrays!!!')

// array.some()
// The some() method checks if any of the elements in an array pass a test implenented by the provided function.

// array.toString()
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

// array.join()
// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:

// pop, push and shifting
// The pop() method removes the last element from an array:
// The push() method adds a new element to an array (at the end):
// The push() method returns the new array length:

// Shifting is equivalent to popping, working on the first element instead of the last.
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

//Changing Elements

//Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete. NOTE: Using delete may leave undefined holes in the array. Use pop() or shift() instead.

// splice
// The splice() method can be used to add new items to an array:
// The first parameter defines the position where new elements should be added (spliced in).
// The second parameter defines how many elements should be removed.
// The rest of the parameters define the new elements to be added. (ommitted if not provideds)
// The splice() method returns an array with the deleted items:

// array.concat()
// The concat() method creates a new array by merging (concatenating) existing arrays:
 
// Slicing an Array
// The slice() method slices out a piece of an array into a new array.
// The slice() method can take two arguments like slice(1, 3).
// The method then selects elements from the start argument, and up to (but not including) the end argument.
// If the end argument is omitted, the slice() method slices out the rest of the array.

// array.toString()
// JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

// array.sort()
// The sort() method sorts an array alphabetically:

// reverse
// The reverse() method reverses the elements in an array.

// Numeric Sort
// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function: --> i.e.function(a, b){return a - b}
// Sorting an Array in Random Order
// use a math.random() in the compare function
// arr.sort(function(a, b){return 0.5 - Math.random()});

// Find the Highest (or Lowest) Array Value
// There are no built-in functions for finding the max or min value in an array.
// However, after you have sorted an array, you can use the index to obtain the highest and lowest values.
// Sorting ascending: 
                        // var points = [40, 100, 1, 5, 25, 10];
                        // points.sort(function(a, b){return a - b}); // reverse the logic for descending (b-a)
                        // now points[0] contains the lowest value
                        // and points[points.length-1] contains the highest value
// Using Math.max() /Math.min() on an Array
// Combined with a spread operator you can also use Math.max(or min) to find the highest number in an array: ex (Math.min(...points))
// combined with a spread operator there's no more need for apply part in Math.max.apply nor nedding of a loop

// Sorting Object Arrays
// Even if objects have properties of different data types, the sort() method can be used to sort the array.
// The solution is to write a compare function to compare the property values:
                        // var cars = [
                        //     {type:"Volvo", year:2016},
                        //     {type:"Saab", year:2001},
                        //     {type:"BMW", year:2010}
                        // ];
                        // cars.sort(function(a, b){return a.year - b.year});
// Comparing string properties is a little more complex:
                        // cars.sort(function(a, b){
                        //     var x = a.type.toLowerCase();
                        //     var y = b.type.toLowerCase();
                        //     if (x < y) {return -1;}
                        //     if (x > y) {return 1;}
                        //     return 0;
                        // });
//-----------------------------------------------------------------------------------------------

let numsArr = [13,45,1,2,3,4,5,100,90,80]

console.log(Math.min(...numsArr));

let strArr = ['a', 'b', 'c', 'd', 'e'];

// function checkAdult(age) {
//     return age >= 18;
// }

// console.log(numsArr.some(checkAdult))


// console.log(strArr.splice(2,2)); // returns c and d 
// console.log(strArr) // returns without c and d

// console.log(strArr.slice(1,3)) //returns b and c
// console.log(strArr) //returns the still complete array

// var points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort(function(a, b){return a - b}));

// function myArrayMax(arr) {
//     return Math.max.apply(null, arr);
// }
// console.log(myArrayMax(numsArr));