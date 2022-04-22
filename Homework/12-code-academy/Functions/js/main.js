
/*functionKeyword identifier(){
  function body
}*/

function greetWorld(){
    console.log('Hello World')
  }
  
  /* 
  functionKeyword identifier(parameter1,parameter2){
    function  body
    console.log(parameter1 + parameter2)
    parameters are treated like variables within a function
  }
  */
  
  function calculateArea(width,height){
    console.log(width*height)
  }
  
  /* function call*/
  
  greetWorld()
  
  /*default parameter */
  
  function totalCost(cost,number=5){
    return cost*number
  }
  
  console.log(totalCost(1,10))
  
  
  /* function expressions*/
  
  /* 
  variableKeyword(often const) identifier = functionKeyword(parameters) {
    function body
  }
  */
  
  const totalChickens = function(chickenLegs){
    return chickenLegs/2
  }
  
  console.log(`total chickens ${totalChickens(4)}`)
  
  /* arrow function notation*/
  
  /* 
  variableKeyword(often const) identifier = (parameters) => {
    functionBody
  }
  */
  
  const totalCows = (cowHoofs) =>{
    return cowHoofs/4
  }
  console.log(`total cows = ${totalCows(4)}`)
  
  /* above function and below function are the same */
  /* because the function body is one line. return statement can be omitted and if there is only one parameter we can omit the parantheses around the parameter. if we had 0 or more than 1 parameters we couldnt omit them */
  
  const totalGoats = goatHoofs => goatHoofs/4
  
  console.log(`total goats = ${totalGoats(8)}`)
  
  /* consise arrow notation */
  
  /* single line block*/
  
  /* 
  functionKeyword(often const) identifier = parameter => OneLineFunctionBody (return statement can be omitted)
   */
  
  const square = num => num*num 
  console.log(`square = ${square(2)}`)
  
  const multiplyNums = (num1,num2) => num1*num2
  console.log(`multiplication of numbers = ${multiplyNums(2,4)}`)
  
  /* multiline block */
  /* 
  functionKeyword identifier = params => {
    functionKeyword identifier = function body
  }
  */
  
  const sumNums = num => {
    const sum = num+num
    return sum
  }
  
  console.log(`num sums = ${sumNums(1)}`)
  
  const ezSumNums = num => num+num
  console.log(`Ez num sums = ${ezSumNums(5)}`)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  