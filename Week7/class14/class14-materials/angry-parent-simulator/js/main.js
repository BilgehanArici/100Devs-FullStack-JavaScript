// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//   //Add what you should be doing - conditionals go here

//   document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }


document.querySelector('#yell').addEventListener('click',run)

function run(){
  const firstName=document.querySelector('#firstName').value
  const firstMiddleName=document.querySelector('#firstMiddle').value
  const lastMiddleName=document.querySelector('#lastMiddle').value
  const lastName=document.querySelector('#lastName').value

  document.querySelector('#placeToYell').innerHTML = `${firstName} ${firstMiddleName} ${lastMiddleName} ${lastName}`
}
