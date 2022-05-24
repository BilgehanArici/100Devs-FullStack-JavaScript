//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements

function containsFromOneToGivenNumber(num){
    let givenNum = []
    let counter = 0
    for(i=1;i<=num;i++){
        counter += 1
        givenNum.push(counter)
    }
    return givenNum
}

console.log(containsFromOneToGivenNumber(5))
