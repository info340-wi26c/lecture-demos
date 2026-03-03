//send request for data to the url
const result = fetch('https://api.nasa.gov/planetary/apod?api_key=lgrydXsw993WpSXlnr9KocvTvGUdLjEUiHRFT9et');
result.then(response => {
  console.log("Everything ok? " + response.ok);
  if (!response.ok) {
    throw new Error("not ok");
  }
  return response;
}).then(response => {
  const resultJson = response.json();
  return resultJson;
}).then(json => {
  console.log(json.title);
  const img = document.querySelector("#statusImage");
  img.src = json.url;
}).catch(error => {
  console.log("AN ERROR HAPPENED OH NOES: " + error.message)
});