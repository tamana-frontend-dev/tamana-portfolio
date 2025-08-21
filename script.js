// --- Tabs ---
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // remove active from all
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // add active to clicked tab
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// --- Accordion --
const accBtns = document.querySelectorAll(".accordion-btn");

accBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// --- Modal---
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector(".close");

openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// --- Contact Form Validation ----
const form = document.getElementById("contactForm");
form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert("Thank you! Your message has been sent.");
    form.reset();
  } else {
    alert("Please fill in all fields.");
  }
});
