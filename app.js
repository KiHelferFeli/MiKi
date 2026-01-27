const lyrics = document.getElementById("lyrics");
const sizeButtons = document.querySelectorAll("[data-size]");

sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const size = button.getAttribute("data-size");
    lyrics.setAttribute("data-size", size);

    sizeButtons.forEach((btn) => btn.classList.remove("is-active"));
    button.classList.add("is-active");
  });
});
