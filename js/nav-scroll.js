
const header = document.getElementById("header");
let lastScroll = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("scrolled-up", "scrolled-down");
    header.classList.add("default");
    return;
  }

  if (currentScroll > lastScroll) {
    header.classList.remove("scrolled-up", "default");
    header.classList.add("scrolled-down");
  } else {
    header.classList.remove("scrolled-down", "default");
    header.classList.add("scrolled-up");
  }

  lastScroll = currentScroll;
});