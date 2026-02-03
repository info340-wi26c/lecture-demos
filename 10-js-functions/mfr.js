const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach
// numbers.forEach((num) => console.log(num));

let doubled = []
for (let i = 0; i < numbers.length; i++) {
  // console.log(numbers[i]);
  if (numbers[i] % 2 == 0) {
    doubled.push(numbers[i] * 2);
  }
}

// map
let result = numbers.map((num) => num * 2);
// console.log(result);
// console.log(numbers);

// filter
result = numbers.filter((num) => num % 2 != 0);
// console.log(result);

// reduce

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
// console.log("For loop: " + sum);

// "previous" -> "accumulator"
result = numbers.reduce((prev, curr) => prev + curr);

// console.log("Reduce sum: " + result);

let foods = ["pizza", "pizza", "pizza", "donut", "donut", "pasta"];
result = foods.reduce((accumulator, current) => {
  if (accumulator[current] === undefined) {
    accumulator[current] = 1;
  } else {
    accumulator[current] += 1;
  }
  return accumulator;
}, {})
console.log(result);