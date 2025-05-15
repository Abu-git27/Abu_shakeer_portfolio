document.getElementById("whatsappBtn").addEventListener("click", function() {
    var phoneNumber = "+91 7010597945";  // Replace with your WhatsApp number
    var message = "Hello! I would like to connect with you.";  // Optional message you want to pre-fill
    var whatsappLink = "https://web.whatsapp.com" + 7010597945 + "?text=" + encodeURIComponent(message);
    window.open(whatsappLink, "https://web.whatsapp.com");
});

document.querySelector('#resumeBtn').addEventListener('click', function() {
  // Open resume in a new tab
  window.open('Resume.pdf', 'https://drive.google.com/file/d/1-HD-v51OH_jx8iBIxR_-dyKHGBd999Lh/view?usp=sharing'); // Replace with your correct path if it's different
});

// Smooth scroll to sections when navbar links are clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior

    const targetId = this.getAttribute('href').substring(1); // Extract the section id
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 50, // Adjust for navbar height (if needed)
      behavior: 'smooth' // Smooth scroll
    });
  });
});
