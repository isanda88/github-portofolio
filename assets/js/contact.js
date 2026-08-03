// const contactForm = document.getElementById("contact-form");
// const contactMessage = document.getElementById("contact-message");

// emailjs.init({
//     publicKey: "kVek1Xe6s7uQlLIJs",
// });

// contactForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     emailjs
//         .sendForm(
//             "service_chxvu88",
//             "template_y3aa7aw",
//             "#contact-form"
//         )
//         .then(() => {
//             contactMessage.textContent = "Message sent successfully!";
//             contactMessage.style.color = "green";
//             contactForm.reset();

//             setTimeout(() => {
//                 contactMessage.textContent = "";
//             }, 5000);
//         })
//         .catch((error) => {
//     console.error("EmailJS Error:", error.text || error);

//     contactMessage.textContent = "Error: " + (error.text || "Unknown error");
//     contactMessage.style.color = "red";
// });
// });