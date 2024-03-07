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

// Select the parent element that contains all the cards
const cardContainer = document.querySelector(".products");

cardContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("card")) {
    const card = event.target;
    const image = card.querySelector(".image");
    image.style.height = "250px";
    // Set pointer capture to track the pointer events even if the pointer moves outside the element
    image.setPointerCapture(event.pointerId);
  }
});

// Email validation
const validateEmail = (mail) => {
  // define a basic regular expression
  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegEx.test(mail);
};

const mail = document.querySelector("#mail");
const subscribeBtn = document.querySelector("#subscribe-btn");

mail.addEventListener("keyup",(event)=>{
  if(validateEmail(event.target.value)){
    mail.style.border = "1px solid green";
  }else{
    mail.style.border = "1px solid red";
  }
})

