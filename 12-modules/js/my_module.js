export function log(msg) {
  console.log(`[my_module] ${msg}`);
}

export function id(id_str) {
  return document.getElementById(
    prependHash(id_str)
  );
}

export function qs(selector) {
  return document.querySelector(selector);
}

function prependHash(str) {
  if (str[0] !== '#') {
    return '#' + str;
  }

  return str;
}