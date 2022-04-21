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


if (true){
  let letVariable = 'hello world';
  var varVariable = 'hello world';
  amVariable = 'hello world';
}
console.log(varVariable);
console.log(letVariable); 
console.log(amVariable); 


if (walkSignal === 'Walk') {
  console.log('You may walk!'); 
} else {   
  console.log('Do not walk!');
}

walkSignal==='walk' ? console.log('you may walk') : console.log('do not walk')