const translations = {
  en: {
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-portfolio': 'Portfolio',
    'nav-services': 'Services',
    'nav-contact': 'Contact',
    'nav-contact-cta': 'Contact Us',
    'hero-title': 'What Shape Will Your Idea Take?',
    'hero-subtitle': 'Magic Studio transforms your vision into stunning, user-friendly websites.',
    'hero-button': 'Let’s Find Out',
    'section-about': 'From Vision to Victory',
    'about-text': 'Every idea starts as a spark. At Magic Studio, we take that spark and sculpt it into a digital masterpiece. With expertise in design and a passion for innovation, we craft websites that don’t just exist—they inspire, engage, and deliver results.',
    'section-portfolio': 'Ideas Brought to Life',
    'portfolio-text': 'See how we’ve turned concepts into stunning realities. Each project is a testament to our commitment to shaping your vision into a website that captivates and converts.',
    'portfolio-project1-title': 'Project 1',
    'portfolio-project1': 'A stunning website designed to elevate the client’s brand.',
    'portfolio-project2-title': 'Project 2',
    'portfolio-project2': 'A modern e-commerce platform with seamless user experience.',
    'portfolio-project3-title': 'Project 3',
    'portfolio-project3': 'A creative portfolio site showcasing artistic talent.',
    'portfolio-link': 'View Project',
    'section-services': 'Shaping Your Success',
    'services-text': 'Whether it’s a sleek website, an intuitive user experience, or a bold brand identity, we offer tailored solutions to make your idea shine. Let’s craft something that stands out.',
    'services-webdesign-title': 'Web Design',
    'services-webdesign': 'Custom, responsive websites that captivate and convert.',
    'services-uxui-title': 'UX/UI Design',
    'services-uxui': 'Intuitive interfaces that enhance user satisfaction.',
    'services-branding-title': 'Branding',
    'services-branding': 'Memorable identities that resonate with your audience.',
    'section-contact': 'Let’s Shape Your Future',
    'contact-text': 'Your idea deserves to take form. Reach out today, and let’s start building a digital experience that leaves a lasting impression.',
    'contact-name': 'Your Name',
    'contact-email': 'Your Email',
    'contact-message': 'Your Message',
    'contact-button': 'Send Message',
    'footer-copyright': '© 2025 Magic Studio. All rights reserved.',
    'alert-success': 'Thank you for your message! We’ll get back to you soon.',
    'alert-error': 'Please fill out all fields.'
  },
  fr: {
    'nav-home': 'Accueil',
    'nav-about': 'À propos',
    'nav-portfolio': 'Portfolio',
    'nav-services': 'Services',
    'nav-contact': 'Contact',
    'nav-contact-cta': 'Nous contacter',
    'hero-title': 'Quelle forme prendra votre idée ?',
    'hero-subtitle': 'Magic Studio transforme votre vision en sites web époustouflants et conviviaux.',
    'hero-button': 'Découvrons-le',
    'section-about': 'De la vision à la victoire',
    'about-text': 'Chaque idée commence par une étincelle. Chez Magic Studio, nous prenons cette étincelle et la sculptons en un chef-d’œuvre numérique. Avec une expertise en design et une passion pour l’innovation, nous créons des sites web qui ne se contentent pas d’exister : ils inspirent, engagent et produisent des résultats.',
    'section-portfolio': 'Des idées devenues réalité',
    'portfolio-text': 'Découvrez comment nous avons transformé des concepts en réalités époustouflantes. Chaque projet témoigne de notre engagement à façonner votre vision en un site web qui captive et convertit.',
    'portfolio-project1-title': 'Projet 1',
    'portfolio-project1': 'Un site web magnifique conçu pour sublimer la marque du client.',
    'portfolio-project2-title': 'Projet 2',
    'portfolio-project2': 'Une plateforme e-commerce moderne avec une expérience utilisateur fluide.',
    'portfolio-project3-title': 'Projet 3',
    'portfolio-project3': 'Un site de portfolio créatif mettant en valeur un talent artistique.',
    'portfolio-link': 'Voir le projet',
    'section-services': 'Façonner votre succès',
    'services-text': 'Qu’il s’agisse d’un site web élégant, d’une expérience utilisateur intuitive ou d’une identité de marque audacieuse, nous proposons des solutions sur mesure pour faire briller votre idée. Créons quelque chose qui se démarque.',
    'services-webdesign-title': 'Conception Web',
    'services-webdesign': 'Sites web personnalisés et responsifs qui captivent et convertissent.',
    'services-uxui-title': 'Design UX/UI',
    'services-uxui': 'Interfaces intuitives qui améliorent la satisfaction des utilisateurs.',
    'services-branding-title': 'Branding',
    'services-branding': 'Identités mémorables qui résonnent avec votre public.',
    'section-contact': 'Façonnons votre avenir',
    'contact-text': 'Votre idée mérite de prendre forme. Contactez-nous aujourd’hui, et commençons à construire une expérience numérique qui laisse une impression durable.',
    'contact-name': 'Votre nom',
    'contact-email': 'Votre email',
    'contact-message': 'Votre message',
    'contact-button': 'Envoyer le message',
    'footer-copyright': '© 2025 Magic Studio. Tous droits réservés.',
    'alert-success': 'Merci pour votre message ! Nous vous répondrons bientôt.',
    'alert-error': 'Veuillez remplir tous les champs.'
  }
};
function changeLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    console.log('Translating text content for key:', key, 'Element:', element); // Added log
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    console.log('Translating placeholder for key:', key, 'Element:', element); // Added log
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
  localStorage.setItem('language', lang);
}
const savedLang = localStorage.getItem('language') || 'en';
document.getElementById('language-switcher').value = savedLang;
changeLanguage(savedLang);
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });
const contactButton = document.getElementById('contact-btn'); // Added variable
console.log('Contact button element:', contactButton); // Added log
if (contactButton) { // Added check
  contactButton.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const lang = document.getElementById('language-switcher').value;
    if (name && email && message) {
      alert(translations[lang]['alert-success']);
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    } else {
      alert(translations[lang]['alert-error']);
    }
  });
}
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('active');
});
const sections = document.querySelectorAll('section, footer');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
console.log('Section intersected: Adding visible class to', entry.target.id);
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));