/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
   e.preventDefault();

 
   emailjs.sendForm('service_k0po1wa', 'template_fwrppiu', '#contact-form', '0AMUeqCj8foXDrhDE')
      .then(() => {
        
         contactMessage.textContent = 'Message sent successfully ✅';
         contactMessage.style.color = 'hsl(140, 70%, 60%)';

        
         setTimeout(() => {
            contactMessage.textContent = '';
         }, 5000);

       
         contactForm.reset();
      }, (error) => {
        
         contactMessage.textContent = 'Message failed to send (service error) ❌';
         contactMessage.style.color = 'hsl(0, 70%, 60%)';
         console.error('EmailJS Error:', error);
      });
};

if (contactForm) {
   contactForm.addEventListener('submit', sendEmail);
}