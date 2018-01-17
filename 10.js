const number = ['mot', 'hai', 'ba']

const _number = number.concat([])

_number.push('yi')
//this is called deep copy
console.log(number)

const __number = number.slice()

console.log(__number)

__number.pop()

console.log(number)

const ___number = [...number]

___number.shift(1)

console.log(___number)

console.log(number)