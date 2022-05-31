// triangle
// let counter = "#"

// for (i=1;i<=7;i++){
//     console.log(counter)
//     counter += "#"
// }

// // fizzBuzz
// for(i=1;i<=100;i++){
//     if (i%3 == 0 && i%5 == 0){
//         console.log(i + ' fizzBuzz')
//     }else if(i%3 == 0){
//         console.log(i+ ' fizz')
//     }else if (i%5 == 0){
//         console.log(i + ' buzz')
//     }
// }

// debugger;  // tried to understand the chess board example

// let size = 8; //this is the letiable setting

// let board = "";//this is the empty string we're going to add either ' ' , '#' or newline

// for (let y = 1; y <= size; y++) {   /*in the outer loop we add newline to seperate rows*/

//   for (let x = 1; x <= size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
//     if ((x + y) % 2 == 0)
//       board += " ";
//     else
//       board += "#";

//   } 
//   board += "\n";
// }

// console.log(board);


// let size = 8
// let board = ''

// for (i = 1; i <= size; i++){
//   for (j=1; j<=size; j++){
//     if((i+j)%2==0){
//       board += '■'
//     }else{
//       board += '□'
//     }
//   }
//   board += '\n'
// }

// console.log(board)

// const makeNoise = function() {
//   console.log("Pling!");
// };

// makeNoise();
// // → Pling!

// const power = function(base, exponent) {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// };

// console.log(power(2, 10));
// → 1024

//make noise function

// const makeNoise = function(){
//   console.log('bling')
// }

// makeNoise()


// power function

// const power = function(base,exponent){
//   let total=1
//   for(i=1;i<=exponent;i++){
//     total *= base
//   }
//   console.log(total)
// }

// power(4,2)

// let x = 10
// if(true){
//   let y = 20
//   var z = 30
//   console.log(x+y+z)
// }

// const hummus = function (factor) {
//   const ingredient = function (amount, unit, name) {
//     let ingredientAmount = amount * factor
//     if (ingredientAmount > 1) {
//       unit += 's'
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`)
//   }
//   ingredient(1, 'can', 'chickpeas')
//   ingredient(.25, 'cup', 'chickpeas')
//   ingredient(.25, 'cup', 'chickpeas')
//   ingredient(1, 'clove', 'chickpeas')
//   ingredient(2, 'tablespoon', 'chickpeas')
//   ingredient(.5, 'teaspoon', 'chickpeas')
// }


// const square1 = (x) =>{return x*x}
// const square2 = x => x*x

// const horn = () => {
//   console.log('toot')
// }

// horn()

//// recursion
// debugger
// function power(base, exponent) {
//   if (exponent == 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// }

// console.log(power(2, 4));


// function findSolution(target) {
//   function find(current, history) {
//     if (current == target) {
//       return history;
//     } else if (current > target) {
//       return null;
//     } else {
//       return find(current + 5, `(${history} + 5)`) ||
//              find(current * 3, `(${history} * 3)`);
//     }
//   }
//   return find(1, "1");
// }

// console.log(findSolution(24));
// // → (((1 * 3) + 5) * 3)


//// exercises

// function min(n1, n2){
//   if(n1<n2){
//     return n1
//   }else if(n1>n2){
//     return n2
//   }else{
//     return n1
//   }
// }

//   console.log(min(0, 10));
//   // → 0
//   console.log(min(0, -10));
// // → -10

////recursive even and odd

// function isEven(n) {
//   if (n > 0) {
//     if (n % 2 == 0) {
//       return true
//     } else if (n % 2 != 0) {
//       return false
//     } else {
//       return n
//     }
//   }
//   else{
//     return "?"
//   }
// }


// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → ??

////bean counter


//Your function will need a loop that looks at every character in the string. It can run an index from zero to one below its length (< string.length). If the character at the current position is the same as the one the function is looking for, it adds 1 to a counter variable. Once the loop has finished, the counter can be returned.

//Take care to make all the bindings used in the function local to the function by properly declaring them with the let or const keyword.


// function countBs(string) {
//   let counter = 0
//   for (i = 0; i < string.length; i++) {
//     if (string[i] == 'B') {
//       counter += 1
//     }
//   }
//   return counter
// }

// console.log(countBs("BBC"));
// // → 2

// function countChar(string, char) {
//   let counter = 0
//   for (i = 0; i < string.length; i++) {
//     if (string[i] == char) {
//       counter += 1
//     }
//   }
//   return counter
// }

// console.log(countChar("kkakerlak", "k"));
// // → 4

// console.log('string'.length)
// console.log('string'.charAt(0))


// console.log('string'[0])

// console.log('Hey'.startsWith('h')) 

// console.log('      Bilgehan         Arici   '.trim())

// console.log(Math.random() * 50)


// if (true){
//   let letVariable = 'hello world';
//   var varVariable = 'hello world';
//   amVariable = 'hello world';
// }
// console.log(varVariable);
// console.log(letVariable); 
// console.log(amVariable); 


// if (walkSignal === 'Walk') {
//   console.log('You may walk!'); 
// } else {   
//   console.log('Do not walk!');
// }

// walkSignal==='walk' ? console.log('you may walk') : console.log('do not walk')



// // sum of range

// function range(start, end, step = start <= end ? 1 : -1) {
//     let result = []
//     for (let i = start; step >= 0 ? i <= end : i >= end; i += step) {
//         result.push(i)
//     }
//     return result
// }

// function sum(numbers) {
//     result = 0
//     for (let num of numbers) {
//         result += num
//     }
//     return result
// }

// console.log(sum(range(1,10,1)))


// Exercises
// The sum of a range
// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
// function range(start, end) {
//     let arr = []
//     for (i = start; i <= end; i++) {
//         arr.push(i)
//     }
//     return arr
// }

// // Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
// function sum(arrayOfNums) {
//     let sum = 0
//     arrayOfNums.forEach(num => {
//         sum += num
//     })
//     return sum
// }

// // As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
// function modifiedRange(start, end, step = 1) {
//     let arr = []
//     if (step == 1) {
//         for (i = start; i <= end; i++) {
//             arr.push(i)
//         }
//     } else if (step > 1) {
//         for (i = start; i <= end; i += step) {
//             arr.push(i)
//         }
//     } else if (step < 1) {
//         for (i = start; i >= end; i += step) {
//             arr.push(i)
//         }
//     }
//     return arr
// }

// // // Your code here.

// console.log(modifiedRange(1, 10));
// // // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(modifiedRange(5, 2, -1));
// // // → [5, 4, 3, 2]
// console.log(sum(modifiedRange(1, 10)));
// // // → 55

// let words = ['never', 'fully']
// console.log(['will', ...words, 'understand'])


// Reversing an arraysays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

// // Your code here.
// function reverseArray(array){
//     return array.reverse()
// }

// function reverseArrayInPlace(array){
//     return array.reverse()
// }

// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]

// A list
// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };
// The resulting objects form a chain, like this:

// A linked list
// A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.


//Also write a listToArray function that produces an array from a list. 
//Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 

// function arrayToList(array) {
//     let list = null
//     for (let i = array.length - 1; i>=0; i--){
//         list = {value: array[i], rest:list}
//     }
// }

// console.log(arrayToList([10, 20, 30, 40]));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20

// Deep comparison
// The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

// To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

// The Object.keys function will be useful when you need to go over the properties of objects to compare them.

// // Your code here.

// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true