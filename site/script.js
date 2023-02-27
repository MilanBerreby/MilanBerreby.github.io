const button = document.getElementById("switch-style");
const link = document.getElementById("style-sheet");

button.addEventListener("click", function() {
  if (link.getAttribute("href") === "style.css") {
    link.setAttribute("href", "style_2.css");
  } else {
    link.setAttribute("href", "style.css");
  }
});