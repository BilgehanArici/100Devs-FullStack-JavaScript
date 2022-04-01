//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value.toLowerCase()

//   if(day === "tuesday" || day === "thursday"){
//     console.log("YOU HAVE CLASS")
//   }else if( day === "saturday" || day === "sunday"){
//     console.log("Its The Weekend")
//   }else{
//     console.log("BORING")
//   }

// }


document.querySelector('#check').addEventListener('click', check)

function check(){
  const day = document.querySelector('#day').value.toLowerCase()

  if(day==='tuesday' || day==='thursday'){
    alert('class day')
  }else if(day==='saturday' || day==='sunday'){
    alert('weekend baby')
  }else if(day==='wednesday'){
    alert('humpday')
  }else{
    alert('it s my arch nemesis = monday')
  }
}



