/*document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var templateParams = {
        name: name,
        email: email,
        message: message
    };

    if (name && email && message) {
        emailjs.send("service_3mwnpty", "template_skzexkc", templateParams)
            .then(function(response) {
                alert("Message sent successfully!");
                console.log("Success:", response);
                document.getElementById('contact-form').reset();
            }, function(error) {
                alert("Failed to send message. Please try again.");
                console.log("Error:", error);
            });
    } else {
        alert('Please fill in all fields.');
    }
});*/

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
            if (response.ok) {
                alert('Your message has been sent successfully! Mia will get back to you soon!');
                form.reset();
            } else {
                alert('There was an error sending your message. Please try again.');
            }
        })
        .catch(error => {
            alert('Error: Could not send the message. Please try again.');
        });
    });
});
