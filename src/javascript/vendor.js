import copy from "copy-text-to-clipboard";
const button = document.querySelector('.button');
button.addEventListener("click", () => {
  copy('copy test text');
});
