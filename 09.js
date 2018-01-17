const number = [1, 2, 3, 4, 5]

const plus = number.map(x => {
  return x + 1
})

console.log(plus)

console.log(number)

console.log(number.concat(plus))

console.log(number)
// those two properties don't change the value of the original array

const _number = number

_number.push(1, 2, 3)
// however with this properties .push, the original value of the array
// when pushing the value of the array, it's important to know whether
// the original value of the array will be changed or not

console.log(_number)
console.log(number)

const newArray = ['hello', ...number, 2]
// this is called Deep copy