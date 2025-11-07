// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dark / Light Mode Toggle
const toggleButton = document.getElementById("mode-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggleButton.textContent = body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Doubt Form Handler
document.getElementById("doubt-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("response-msg").textContent =
    "✅ Thank you! Your doubt has been received. I’ll get back to you soon.";
  this.reset();
});
