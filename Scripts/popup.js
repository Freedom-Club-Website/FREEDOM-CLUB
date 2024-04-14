// Get the form element
const form = document.getElementById("contactForm");

// Add event listener to the form submission
form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values entered in the form
    const name = document.getElementById("name").value;
    const name2 = document.getElementById("secondname").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Display the form data in a popup window
    const popupMessage = `Name: ${name}<br> Second name: ${name2}<br>Email: ${email}<br>Subject: ${subject}<br>Message: ${message}`;
    document.getElementById("popup-message").innerHTML = popupMessage;
    document.getElementById("popup").style.display = "block";
});

// Close the popup window when the close button is clicked
document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});
