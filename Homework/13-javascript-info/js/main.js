
// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.



// function camelize(str) {
//     return str
//         .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//         .map(
//             // capitalizes first letters of all array items except the first one
//             // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//             (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
// }

// function camelize(str){
//     return str
//     .split('-')// splits 'my-long-word' into array ['my','long','word']
//     .map(
//         //capitalizes first letters of all array items except the first one
//         // converts['my','long','word'] into ['my','Long','Word']
//         (word,index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     ).join('')
// }

// function camelize(str){
//     return str
//     .split('-')
//     .map(
//         (item,index) => index==0? item : item[0].toUpperCase() + item.slice(1)
//     ).join('')
// }

// console.log(camelize('bilgehan-arici'))

// function camelize(str){
//     return str
//         .split('-')
//         .map(
//             (item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)
//         ).join('')
// }

// console.log(camelize('bilgehan-arici'))

// Filter range
// importance: 4
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

// let filtered = []
// let arr = [5, 3, 8, 1]

// function filter(arr, a, b) {
//     arr.forEach(element => {
//         if (element >= a && element <= b) {
//             filtered.push(element)
//         }
//         console.log(filtered)
//     });
// }

// filter(arr,1,4)
// console.log(arr)

// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]


// function filterRangeInPlace(arr, a, b) {

//     for (let i = 0; i < arr.length; i++) {
//       let val = arr[i];

//       // remove if outside of the interval
//       if (val < a || val > b) {
//         arr.splice(i, 1);
//         i--;
//       }
//     }

//   }

//   let arr = [5, 3, 8, 1];

//   console.log(filterRangeInPlace(arr, 1, 4)); // removed the numbers except from 1 to 4

//   console.log( arr ); // [3, 1]

// Sort in decreasing order
// importance: 4
// let arr = [5, 2, 1, -10, 8];

// // ... your code to sort it in decreasing order

// alert( arr ); // 8, 5, 2, 1, -10

// let arr = [5, 2, 1, -10, 8, 20];

// console.log(arr.sort((a,b)=> b-a))




// Copy and sort array
// importance: 5
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

// let arr = ["HTML", "JavaScript", "CSS"]

// function copySorted(arr){
//     return arr.slice().sort()
// }

// console.log(copySorted(arr))
// console.log(arr)

