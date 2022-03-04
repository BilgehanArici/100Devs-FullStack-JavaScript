// event listener (olay dinleyicisi)

document.querySelector('#check').addEventListener('click', daySelector)

function daySelector() {
  const day = document.querySelector('#day').value

  if(day === 'saturday' || day === 'sunday'){
    alert('weekend')
  }else if(day === 'tuesday' || day=== 'thursday'){
    alert('class day')
  }else if(day === 'monday' || day==='wednesday' || day === 'friday'){
    alert('boring day')
  }else {
    alert('TRY AGAIN')
  }
}