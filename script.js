// Initialize EmailJS
emailjs.init({
    publicKey: 'VpYMcJO6hRdOPvKDT',
});

document.getElementById('contact-form')?.addEventListener('submit', function(event) {
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
});
