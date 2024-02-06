// let a = prompt('Fill the first number','')
// let b = prompt('Fill the second numbe','')
// let operation = prompt('choose the operation: add, multi, subtract','')

let a = 1
let b = 1
let operation = 'add'

function iSNumber() {
    if (typeof a != 'number' || typeof b != 'number' || typeof operation != 'string') {
        return false
    } else {
        return true
    }
}

let checkNumber = iSNumber()
// console.log(checkNumber)

function calc(a,b,operation) {
    if (checkNumber === true) {
        if (operation === 'add') {
            return a + b
        } else if (operation === 'multi') {
            return a * b
        } else if (operation === 'subtract') {
            return a - b
        } else {
            console.log('Please choose the operation from the list below')
            // alert('Please choose the operation from the list below')
        }

    } else {
        console.log('ERROR')
        // alert('Error')
    }
}

console.log(calc(a,b,operation))

