// var i = 10;

// if (true) {
//   var j = 20;
//   console.log(i);
// }

// console.log(j);

function sum() {
  let a = 5;
  let b = 10;
  let c = "apple";
console.log(typeof c)
  return a+b;
}

// const sumValue = sum();
// console.log(sumValue)

const sum1 = (a, b) => {
  console.log(" this is arrow function")
  const sum = a+b;
  console.log(sum)
}

sum1(5, 10);

