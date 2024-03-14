document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
      }
  
      if (!validatePassword(password)) {
        alert('Please enter a valid password');
        return;
      }
  
  
      form.submit();
    });
  
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  
    function validatePassword(password) {
     
      return password.length >= 6;
    }
  });
  