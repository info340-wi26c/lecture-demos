"use strict";

function log_things(a, b, c, ...others) {
  console.log(a);
  console.log(b);
  console.log(c);

  console.log(others);
}

// If parameters are unspecified, they are assigned `undefined`
// log_things()
// log_things(1)

// This is the "standard" usage
// log_things(1, 2, 3);

// "Normal" functions like this will just ignore additional parameters
// log_things(1, 2, 3, 4, 5, 6, 7);

// ... but what if they are important?
log_things(1, 2, 3, "really", "important", "things");

// ... or, what if they are more complex, like an object?
// function print_person(person) {
//   let {role, name} = person;
//   console.log(`${name} is a ${role}.`);
// }

// let person = {
//   'name': 'Rania',
//   'role': 'TA',
// }

// print_person(person);
