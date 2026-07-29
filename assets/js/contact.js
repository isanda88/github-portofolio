const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

emailjs.init({
    publicKey: "kVek1Xe6s7uQlLIJs",
});

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_8ax3f12",
            "template_y3aa7aw",
            "#contact-form"
        )
        .then(() => {
            contactMessage.textContent = "Message sent successfully!";

            contactMessage.style.color = "green";

            contactForm.reset();

            setTimeout(() => {
                contactMessage.textContent = "";
            }, 5000);
        })
        .catch(() => {
            contactMessage.textContent = "Message could not be sent.";

            contactMessage.style.color = "red";
        });
});