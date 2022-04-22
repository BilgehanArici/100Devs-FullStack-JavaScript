
// Arrays are lists that store data in JavaScript.
// Arrays are created with brackets [].
bigo = ['handsome','charismatic',24]
// Each item inside of an array is at a numbered position, or index, starting at 0.
// We can access one item in an array using its index, with syntax like: myArray[0].
console.log(bigo[0])
// We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
bigo[1]='jacked'
console.log(bigo)
// Arrays have a length property, which allows you to see how many items are in an array.
console.log(bigo.length)
// Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
console.log(bigo.pop())
console.log(bigo)

console.log(bigo.push('smart'))
console.log(bigo)

// Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the Mozilla Developer Network website.
console.log(bigo.slice(1,2)) // end is not included

// Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
// Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.
let bigoMuscles = ['traps','abs','pecs']
console.log(bigoMuscles)

const bigoTalents = ['singing','being awesome','godlike reflexes']
console.log(bigoTalents)

bigoMuscles[1] = 'LATS'
console.log(bigoMuscles)

bigoMuscles = ['LATS']
console.log(bigoMuscles)

bigoTalents[1] = 'FUNNY'
console.log(bigoTalents)

// bigoTalents = ['FUNNY']
// console.log(bigoTalents)

// Arrays mutated inside of a function will keep that change even outside the function.
greeting = ['hi','hello','oy!']

function addToArray(arr){
  greeting.push(arr)
}

addToArray('ola')
console.log(greeting)

// Arrays can be nested inside other arrays.
myArray = [[1,2,3,['abo','mination']],[4,5],[6],7]

// To access elements in nested arrays chain indices using bracket notation.
console.log(myArray[0][3])
console.log(myArray[0][3][1])

// Learning how to work with and manipulate arrays will help you work with chunks of data!

// Instructions
// Looking for more ways to practice? Consider trying these:

// Use the .length property to find the last element of an array.
myArr = ['may','she','help','you']
const lastElement = myArr[myArr.length-1]
console.log(lastElement)

// Use the other methods in MDN documentation not mentioned in the lesson.
// Take all the elements in an array and make a string.
console.log('PLACEHOLDER')

for(i=myArr[0];i<=myArr[myArr.length-1];i++){
  console.log(i)
}

console.log(myArr.join(' '))
console.log(myArr.join('+'))

console.log(`${myArr[0]}${myArr[1]}${myArr[2]}${myArr[3]}`)

// Find the return value of calling .push() on an array.
console.log('PLACEHOLDER')

function pushNothingToArr(arr){
  return arr.push()
}
console.log(pushNothingToArr(myArr))
console.log(myArr)

console.log('PLACEHOLDER')

function pushSomethingToArr(arr){
  return arr.push('something')
}
console.log(pushSomethingToArr(myArr))
console.log(myArr)

// Nest an array within an array.
arrayIcindeArraySankiInception = [1,[2,3],[[4,5,6]],[[[7,8,9,10]]]]

// Access an element in the nested array.
console.log(arrayIcindeArraySankiInception[3])
console.log(arrayIcindeArraySankiInception[3][0])
console.log(arrayIcindeArraySankiInception[3][0][0])
console.log(arrayIcindeArraySankiInception[3][0][0][0])