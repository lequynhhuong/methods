const number = ['yi', 'er', 'san']

const _reference = number
// used to change the value of the array

_reference[0] = 'one'

console.log(number)

const arr = {0: 'yi', 1: 'er'}

let a = 0

let b = a
/*
in this case the command has no effect on the value of a,
in contrast to the former example
*/
b = 6

console.log(a)

let yi = 'yi'

let er = 'er'

let array = [yi, er]