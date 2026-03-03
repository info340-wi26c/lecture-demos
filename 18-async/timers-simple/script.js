function whatGetsLogged() {
  console.log("Hello");
  // setTimeout(() => console.log("World"), 0);
  console.log("World");
  console.log("All done!");
}

function delayedTimers() {
  whatGetsLogged();
  fibonacci(10);
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// whatGetsLogged()
// delayedTimers()