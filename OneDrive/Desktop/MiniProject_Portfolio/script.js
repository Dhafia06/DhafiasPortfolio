// Smooth scrolling for menu links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Typing animation
const words = ["Dhafia", "Frontend Developer", "Student", "Creator"];
let wordIndex = 0;
let charIndex = 0;

function typingEffect() {
  if (charIndex < words[wordIndex].length) {
    document.getElementById("typing").textContent += words[wordIndex][charIndex];
    charIndex++;
    setTimeout(typingEffect, 120);
  } else {
    setTimeout(() => {
      document.getElementById("typing").textContent = "";
      charIndex = 0;
      wordIndex = (wordIndex + 1) % words.length;
      typingEffect();
    }, 1500);
  }
}
typingEffect();

// Contact form validation
function sendMessage() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let msg = document.getElementById("message").value.trim();

  if (name === "" || email === "" || msg === "") {
    document.getElementById("msg").style.color = "red";
    document.getElementById("msg").textContent = "⚠ Please fill all fields!";
  } else {
    document.getElementById("msg").style.color = "lightgreen";
    document.getElementById("msg").textContent = "✔ Message sent successfully!";
  }
}

// Resume Download
function downloadResume() {
  window.open("resume.pdf", "_blank");
}
