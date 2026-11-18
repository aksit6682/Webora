const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const yourEmail = "webora54@gmail.com";

  const name = document.getElementById("clientName").value.trim();
  const business = document.getElementById("clientBusiness").value.trim();
  const contact = document.getElementById("clientContact").value.trim();
  const message = document.getElementById("clientMessage").value.trim();

  const subject = encodeURIComponent(`Website enquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nBusiness: ${business}\nContact: ${contact}\n\nProject details:\n${message}`
  );

  window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
});
