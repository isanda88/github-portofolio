/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/*===== MENU HIDDEN =====*/
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
   const header = document.getElementById('header')
   window.scrollY >= 50 ? header.classList.add('blur-header') 
                        : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
   e.preventDefault();

   // ATENȚIE: Înlocuiește valorile de mai jos cu cheile tale reale din EmailJS!
   // Exemplu: emailjs.sendForm('service_a1b2', 'template_x1y2', '#contact-form', 'user_12345')
   emailjs.sendForm('service_k0po1wa', 'template_fwrppiu', '#contact-form', '0AMUeqCj8foXDrhDE')
      .then(() => {
         contactMessage.textContent = 'Message sent successfully ✅';
         contactMessage.style.color = 'hsl(140, 70%, 60%)';

         setTimeout(() => {
            contactMessage.textContent = '';
         }, 5000);

         contactForm.reset();
      })
      .catch((error) => {
         contactMessage.textContent = 'Message failed to send (service error) ❌';
         contactMessage.style.color = 'hsl(0, 70%, 60%)';
         
         // Afișează eroarea ca text clar în consolă
         console.log('Eroare detaliată EmailJS:', JSON.stringify(error));
      });
};

if (contactForm) {
   contactForm.addEventListener('submit', sendEmail);
}

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
   const scrollUp = document.getElementById('scroll-up')
   window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
   const scrollY = window.pageYOffset

   sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if(sectionsClass) {
         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
         }else{
            sectionsClass.classList.remove('active-link')
         }
      }                                     
   })
}

window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.projects__card`, {interval: 100})