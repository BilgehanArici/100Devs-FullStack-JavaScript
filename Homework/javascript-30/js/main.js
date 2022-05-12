//filter map sort reduce methods are important


function find_average(array) {
    let sum = 0
    let avg = 0
    for (i = 0; i <= array.length; i++) {
        sum += array[i]
    }
    avg = sum / array.length
    return avg
}

console.log(find_average([1,2,3,4]))