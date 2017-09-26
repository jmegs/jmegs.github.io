console.log("Commence the hacking");
const body = document.querySelector("body");

// Adds delay that stops event listener from firing constantly when resizing
// Ref: https://gist.github.com/james2doyle/2c0ddd5c0aba56131f8179c1894ce72d
function handleResize() {
  clearTimeout(this.delayer);
  this.delayer = setTimeout(setMargin(), 200);
}

function setMargin() {
  const header = document.getElementById("intro");
  const offset = header.offsetHeight;
  const margin = window.innerHeight - offset;

  header.style.marginTop = margin + "px";
}

setMargin();
window.addEventListener("resize", handleResize);
