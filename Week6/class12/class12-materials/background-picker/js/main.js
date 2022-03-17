// event listener for clicking

document.getElementById('red').onclick = redBackground

document.getElementById('green').onclick = greenBackground

document.getElementById('blue').onclick = blueBackground


document.querySelector('#orange').addEventListener('click', partyOrange)

function partyOrange() {
  document.querySelector('body').style.backgroundColor = 'orange'
  document.querySelector('body').style.color = 'white'
}


function redBackground() {
  document.querySelector('body').style.backgroundColor = 'red'
  document.querySelector('body').style.color = 'white'
}

function greenBackground () {
  document.querySelector('body').style.backgroundColor = 'green'
  document.querySelector('body').style.color = white
}

function blueBackground() {
  document.querySelector('body').style.backgroundColor = 'blue'
  document.querySelector('body').style.color = blue
}

