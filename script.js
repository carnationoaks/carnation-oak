// Open Popup
function openPopup() {
  document.getElementById('popup').classList.add('active');
  document.querySelector('.popup-box').classList.add('active');
}

// Close Popup
function closePopup() {
  document.getElementById('popup').classList.remove('active');
  document.querySelector('.popup-box').classList.remove('active');
}

// Close when clicking outside the popup-box
document.getElementById('popup').addEventListener('click', function (event) {
  if (!document.querySelector('.popup-box').contains(event.target)) {
    closePopup();
  }
});

// Handle Form Submission
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Validate inputs
    if (!validateName(name)) {
      alert('Please enter a valid name without numbers or special characters.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (date === '' || time === '') {
      alert('Please select both date and time.');
      return;
    }

    // Display confirmation message
    alert(
      `Booking Confirmed! 🎉\n\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}`
    );

    // Optionally, close the popup after submission
    closePopup();

    // Reset form
    form.reset();
  });
});

// Name Validation Function
function validateName(name) {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(name);
}

// Email Validation Function
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function toggleMenu() {
  const menu = document.querySelector('.header-right');
  menu.classList.toggle('active');

  // Close the menu when clicking outside
  document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !event.target.closest('.burger-menu')) {
      menu.classList.remove('active');
    }
  });
}
