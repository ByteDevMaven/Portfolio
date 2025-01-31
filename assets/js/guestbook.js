document.getElementById("guestbook").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    let form = this;
    let formData = new FormData(this);
    let responseMessage = document.getElementById("response-message");

    [...form.elements].forEach(el => el.disabled = true);

    fetch("https://script.google.com/macros/s/AKfycbxu2GockNboNp3naYA3StcoGI19UG2OGOndXTyR7j3zz8mS-2twBN8zLoBm4Fxm8rOQ0w/exec", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            responseMessage.textContent = "Thank you! Your message has been sent.";
            responseMessage.style.color = "green";
            document.getElementById("guestbook").reset(); // Reset the form
        })
        .catch(error => {
            responseMessage.textContent = "Error sending message. Please try again.";
            responseMessage.style.color = "red";
            console.error(error);
        })
        .finally(() => {
            // Re-enable form elements
            [...form.elements].forEach(el => el.disabled = false);
        });
});