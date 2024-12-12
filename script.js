document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function (event) {      
        setTimeout(function () {
            form.reset();
        }, 1000);
    });
});

const dropdowns = document.querySelectorAll('nav ul li.dropdown');
    
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', function() {
        this.classList.toggle('active');
        
        dropdowns.forEach(otherDropdown => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove('active');
          }
        });
      });
    });

    document.addEventListener('click', function(event) {
      if (!event.target.closest('nav ul li.dropdown')) {
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('active');
        });
      }
    });