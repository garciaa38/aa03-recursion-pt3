/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  // Your code here
  let array = [];
//Base Case: When no more elements exist in arr, we return our flattened array.
   if (arr === undefined || arr.length === 0) {
     return array;
   }

//Set the first element of the array to the variable "shift".
let shift = arr;
   if (Array.isArray(shift)) {
  shift = arr.shift();
  //console.log("TEST 1" , shift);
  //array.unshift(shift);
  }

  //If shift is NOT an array, we'll unshift it into "array".
  if (!Array.isArray(shift)) {
    array.unshift(shift);
    //console.log("TEST 2", arr);
    //console.log('TEST 3', arr.slice(0));
    //let newArr = arr.slice(1);
    //console.log(newArr);
    return array.concat(flatten(arr));
  } 


  }


//Once the integer has been added to our array, we want to invoke and return the function with arr sliced at 1.



  // console.log("TEST 1", array);
  // console.log("TEST 2", shift);
  // console.log("TEST 3", arr);



// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
// console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
console.log(flatten([1, 2, [3, [4]]]));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
