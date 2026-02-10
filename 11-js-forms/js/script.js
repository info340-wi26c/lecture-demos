// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   let email = document.querySelector("#exampleInputEmail1").ariaValueMax;
//   console.log(email)
// })


let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  let email = document.querySelector("#exampleInputEmail1").value;
  console.log(email)
})