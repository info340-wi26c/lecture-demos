function createPara(text) {
  let p = document.createElement("p")
  p.innerHTML = "<strong>Hello</strong> World!";
  return p;
}


function logClick() {
  console.log("Click!");

  let photos = document.querySelector("#photos");
  photos.appendChild(createPara("Hello World"))
}

let btn = document.querySelector("#btn");
let btn = document.getElementById("btn");
btn.addEventListener("click", logClick)

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
  logClick();
})

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
  console.log("This is the third button to be clicked.")
  let imgs = document.querySelectorAll("img");
  for (const img of imgs) {
    img.style.display = "none";
  }
  logClick();
})


function createLinkItem(text, url) {
  const aElem = document.createElement('a');
  aElem.textContent = text;
  aElem.href = url;
  return aElem; //returns an element!
}

const linkArray = [
  {url: 'https://info340.github.io/', title: 'Course Textbook'},
  {url: 'https://ischool.uw.edu/', title: 'iSchool'},
  {url: 'https://www.google.com/search?q=puppies&tbm=isch', title: 'Puppies'}
];

function createLinkList(linkObjList) {
  const ulElem = document.createElement('ul');
  for(const linkObj of linkObjList) {
    //call the render function to create the child element
    const linkElem = createLinkItem(linkObj.title, linkObj.url);

    const liElem = document.createElement('li');
    liElem.appendChild(linkElem); //include the rendered element
    ulElem.appendChild(liElem);
  }
  return ulElem; //returns an element!
}

document.querySelector('nav').appendChild(createLinkList(linkArray));



















// function doSomething() {
//   return 3 + 2;
// }

// function doSomethingElse(parameter) {
//   console.log(parameter());
  
//   /* (2) equiv */
//   console.log(5())
// }

// let other = doSomething;

// // What's the difference here?
// doSomethingElse(other);   /* (1) */

// doSomethingElse(other()); /* (2) */







// function logClick() {
//   console.log("I am here!!");
  
//   let photos = document.querySelector('#photos');
//   let p = document.createElement('p');
//   p.textContent = "Hello World!";

//   photos.appendChild(p);
// }

// let dog = document.querySelector('#dog');
// dog.addEventListener('click', logClick);

// let cat1 = document.querySelector('#cat1');
// cat1.addEventListener('click', logClick);

