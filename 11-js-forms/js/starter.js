let count = 0;

function renderText(event) {
  event.preventDefault();

  // find the list, as in the ul
  const list = document.querySelector('ul');

  // create an li
  const li = document.createElement('li');

  // get the input's text
  const input = document.querySelector('#text_input');

  // set li's textContent to input.value
  li.textContent = input.value;

  // add li to the ul
  list.appendChild(li);

  // reset the input text field
  input.value = '';

  count++;
  const button = event.target;
  button.textContent = `Clicked ${count} times`;
}

function addEventListeners() {
  let button = document.querySelector('button');
  button.addEventListener('click', renderText);
}

addEventListeners();