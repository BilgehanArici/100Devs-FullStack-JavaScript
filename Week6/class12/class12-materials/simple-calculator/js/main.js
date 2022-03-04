let total = 0

document.querySelector('#add1').addEventListener('click', add1f)
document.querySelector('#add2').addEventListener('click', add2f)
document.querySelector('#add3').addEventListener('click', add3f )
document.querySelector('#sub1').addEventListener('click',sub1f)
document.querySelector('#sub2').addEventListener('click', sub2f)
document.querySelector('#sub3').addEventListener('click', sub3f)
document.querySelector('#mult2').addEventListener('click', mult2f)
document.querySelector('#clear').addEventListener('click', clearf)

function add1f() {
  total += 1
  document.querySelector('#placeToPutResult').innerHTML = total
}
function add2f() {
  total += 2
  document.querySelector('#placeToPutResult').innerHTML = total
}
function add3f() {
  total += 3
  document.querySelector('#placeToPutResult').innerText = total
}
function sub1f() {
  total -= 1
  document.querySelector('#placeToPutResult').innerText = total
}
function sub2f() {
  total -= 2
  document.querySelector('#placeToPutResult').innerText = total
}
function sub3f() {
  total -=3
  document.querySelector('#placeToPutResult').innerText = total
}
function mult2f() {
  total = total*2
  document.querySelector('#placeToPutResult').innerHTML = total
}
function clearf() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}