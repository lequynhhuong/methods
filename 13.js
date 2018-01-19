const currentDate = new Date();

console.log(currentDate.getFullYear());

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

const sayHello = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('test');
    }, 2000);
  });
};

promise.
    then(() => {
      console.log('hello');
      return sayHello();
    }).
    then((hello) => {
      console.log(hello);
    }).
    then(() => {
      console.log(7);
    });
