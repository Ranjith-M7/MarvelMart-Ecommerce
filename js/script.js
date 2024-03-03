// Add sticky navigation bar
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-desktop a,.mobile-nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Activate the hamburger menu and mobile navigation
const hamb = document.querySelector(".hamb");
const nav = document.querySelector(".mobile-nav");
hamb.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("slide");
});

// website scrollReveal effect
const sr = ScrollReveal({
  distance: "85px",
  duration: 2000,
  reset: false,
});
sr.reveal(".hero .desc", { delay: 250, origin: "bottom" });
sr.reveal(".newsletter .content", { delay: 250, origin: "bottom" });
