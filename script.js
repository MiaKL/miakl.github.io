document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function (event) {      
        setTimeout(function () {
            form.reset();
        }, 1000);
    });
});
