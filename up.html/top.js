const btn = document.querySelector(".btn");
console.log(window.scrollY);
console.log(window);

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    btn.classList.add("pop");
  } else {
    btn.classList.remove("pop");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
