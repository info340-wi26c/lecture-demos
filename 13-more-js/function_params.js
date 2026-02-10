function power(constant, base, exp) {
  return constant * (Math.pow(base, exp));
}

// What _should_ this return?
let result = power(2, 3, 2);
console.log(result);