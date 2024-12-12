document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            console.log('Response status:', response.status);
            console.log('Response body:', response);

            if (response.ok) {
                alert('Your message has been sent successfully! Mia will get back to you soon!');
                form.reset();
            } else {
                alert('There was an error sending your message. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error: Could not send the message. Please try again.');
        });
    });
});
