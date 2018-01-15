//return function in function
const kansuu = () => () => 2

const result = kansuu()()

console.log(result)

// return array in function
const returnArray = () => [5]

const result1 = returnArray()[0]

/*
It's important to know the type of data declared in the code
  when seeing . : object
  when seeing []: array
  when seeing (): function

 */

const returnObject = () => ({
  myCar: 'Saturn',
  special: {
    test: 40
  }
})

const result2 = returnObject().special.test

console.log(result2)