/*
1/ Type of data in javascipt
2/ How to declare function
(functions will always give out a value)
3/ How can we differentiate different type of data in Javascript

--> after being able to differentiate, you can read library without
having to understand what the code is about ?

4/ function argument
 */

const fn = (a, b) => a + b
// arrow
const arrayFn = array => array[0]
console.log(arrayFn([2]))
// since there is an argument inside, the [] inside the ()  is necessary


const functionfn = (a) => a()

console.log(
  functionfn(() => 3)
)
/* call back function from a function
a () this is used to perform a function
 */
