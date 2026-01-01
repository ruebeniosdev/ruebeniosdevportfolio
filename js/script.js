let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");

  // Toggle menu icon animation (optional)
  menuIcon.classList.toggle("bx-x");
};

// READ MORE TOGGLE
const readMoreBtn = document.getElementById("read-more-btn");
const fullAbout = document.querySelector(".full-about");

readMoreBtn.onclick = () => {
  fullAbout.classList.toggle("show");

  if (fullAbout.classList.contains("show")) {
    readMoreBtn.textContent = "Show Less";
  } else {
    readMoreBtn.textContent = "Read More";
  }
};
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your message! I'll get back to you soon.");
  contactForm.reset();
});
