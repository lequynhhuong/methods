const number = {
  hello : 'yi',
  car : 'er',
  tst: {
    t: 0
  }
}
//this is shallow copy
const _number = number

const __number = {...number}
// spread operator (used for deep copy)

console.log(__number)
// please declare a variable that has 3 underlines
const ___number = Object.assign(number)

// this method is called sugar syntax (same as the ... above)
// (does not change the original value of the object)

console.log(___number)

_number.hello = 'hi'

// after being able to do deep copy, even the value of __number changes,
// the original value of number does not change at all
__number.hello = 'bye'
console.log(number)

