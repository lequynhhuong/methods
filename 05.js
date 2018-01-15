const array = [1, 2, 3][0]

console.log(array)


/* return function from array
  () => '2': this is a function
  fn = [() => '2']: a function nested in the array
  [0] with this, the first item in the array is shown
  () with this marukakko, the function inside the array is performed
  Without the marukakko, the value shown is just (function),
  but it's because of the () that the result of the function is performed
  */
const fn = [() => '2'][0]()

console.log(fn)