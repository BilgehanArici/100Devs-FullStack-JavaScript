
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// Loops perform repetitive actions so we don’t have to code that process manually every time.
for(let counter1 =1 ; counter1<=5 ; counter1++){
  console.log(counter1)
}

let counter2 = 1
while(counter2<=5){
  console.log(counter2)
  counter2++
}

// How to write for loops with an iterator variable that increments or decrements
for(let iterator = 5 ; iterator >= 1 ; iterator--){
  console.log(iterator)
}

// How to use a for loop to iterate through an array
console.log('placeholder')

let myArr = [1,[2,3],[4,[5,6]]]

for (let i1=0 ; i1<myArr.length ; i1++){
  console.log(myArr[i1])
}

// A nested for loop is a loop inside another loop
let bigoPros = ['smart','good-looking','can sing']
let bigoTalents = ['juggling','can sing','empathy']
let mutualProsAndTalents = []

for(let i = 0; i<bigoPros.length; i++){
  for(let j = 0 ; j<bigoTalents.length;j++){
    if(bigoPros[i] === bigoTalents[j]){
      mutualProsAndTalents.push(bigoPros[i])
    }
  }
}
console.log(mutualProsAndTalents)

// while loops allow for different types of stopping conditions
// Stopping conditions are crucial for avoiding infinite loops.

while (true != false){
  console.log('infinite loop')
  break
}

// do...while loops run code at least once— only checking the stopping condition after the first execution
let cakeCounter = 0
do{
  console.log('i need more cake')
  cakeCounter += 1
}while(cakeCounter<5)

// The break keyword allows programs to leave a loop during the execution of its block