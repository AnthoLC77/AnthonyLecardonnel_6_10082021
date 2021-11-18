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

const heartWhite = document.querySelector(".white");
const heartRed = document.querySelector(".fa");
console.log(heartRed);





heartWhite.addEventListener("click", () => {
  heartWhite.classList.remove("white");
  heartRed.classList.add("red");
})


heartRed.addEventListener("click", () => {
  heartRed.classList.remove("red");
  heartWhite.classList.add("white");
});
