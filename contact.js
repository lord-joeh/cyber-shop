document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      // Basic form validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
      }

      const formData = {
        name,
        email,
        subject,
        message,
      };

      try {
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error sending your message. Please try again.');
      }
    });
  }
});
