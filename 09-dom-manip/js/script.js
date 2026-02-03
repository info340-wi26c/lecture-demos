function logClick() {
  console.log("I am here!!");
  
  let photos = document.querySelector('#photos');
  let p = document.createElement('p');
  p.textContent = "Hello World!";

  photos.appendChild(p);
}

let dog = document.querySelector('#dog');
dog.addEventListener('click', logClick);

let cat1 = document.querySelector('#cat1');
cat1.addEventListener('click', logClick);

