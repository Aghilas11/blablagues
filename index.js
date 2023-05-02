//http://api.blablagues.net/?rub=blagues
const header = document.getElementById("header");
const content = document.getElementById("content");
const app = document.querySelector("body > div");

function getJoke() {
  fetch("http://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.data.content;

      header.textContent = joke.text_head;
      if (joke.text === "") {
        content.textContent = joke.text_hidden;
      } else {
        content.textContent = joke.text;
      }
    });
}

app.addEventListener("click", () => {
  getJoke();
});
