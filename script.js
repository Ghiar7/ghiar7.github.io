document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Form validation
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return;
    }
    
    // Validate email format
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }
    
    // Success message
    document.getElementById("formMessage").textContent = "Thank you for contacting me, " + name + "!";
    document.getElementById("formMessage").classList.remove("hidden");
    
    // Clear form
    document.getElementById("contactForm").reset();
});
