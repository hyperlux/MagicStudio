document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    en: {
      "nav-home": "Home",
      "nav-about": "About",
      "nav-portfolio": "Portfolio",
      "nav-services": "Services",
      "nav-contact": "Contact",
      "nav-contact-cta": "Contact Us",
      "hero-title": "What Shape Will Your Idea Take?",
      "hero-subtitle": "Transform your vision into a stunning, user-friendly website.",
      "hero-button": "Let’s Find Out",
      "section-about": "From Vision to Victory",
      "about-text": "Every idea starts as a spark. At Magic Studio, we take that spark and sculpt it into a digital masterpiece. With expertise in design and a passion for innovation, we craft websites that don’t just exist—they inspire, engage, and deliver results. Our approach is collaborative and creative, ensuring your website is a true reflection of your brand's unique identity and goals. We believe in building not just websites, but lasting digital experiences that resonate with your audience and drive meaningful connections.",
      "section-portfolio": "Our Latest Projects",
      "portfolio-title-1": "Carrera Rallye",
      "portfolio-description-1": "We worked closely with Stéphane, the creator of Carrera Rallye - Expérience Porsche, to bring his idea to life through a user-friendly website. Through careful design and strategic development, we built a polished platform featuring striking visuals, a seamless registration system, and detailed event information—schedule, eligible vehicles, routes, and premium accommodations. This refined digital solution enhances engagement, drives participation, and captures the thrill of the rally experience.",
      "portfolio-link-1": "View Project",
      "service-title-1": "Web Design & Development",
      "service-description-1": "Crafting visually stunning and highly functional websites tailored to your brand.",
      "service-title-2": "User Experience & Interface",
      "service-description-2": "Creating intuitive and engaging user experiences that keep visitors coming back.",
      "service-title-3": "Branding & Identity",
      "service-description-3": "Developing a strong and memorable brand identity that resonates with your target audience.",
      "section-contact": "Let's Create Magic Together",
      "contact-name": "Your Name",
      "contact-email": "Your Email",
      "contact-message": "Your Message",
      "contact-button": "Send Message",
      "footer-text": "© 2023 Magic Studio. All rights reserved.",
      "alert-success": "Thank you for your message! We’ll get back to you soon.",
      "alert-error": "Please fill out all fields."
    },
    fr: {
      "nav-home": "Accueil",
      "nav-about": "À Propos",
      "nav-portfolio": "Portfolio",
      "nav-services": "Services",
      "nav-contact": "Contact",
      "nav-contact-cta": "Contactez-Nous",
      "hero-title": "Quelle Forme Prendra Votre Idée ?",
      "hero-subtitle": "Transformez votre vision en site web époustouflant et convivial.",
      "hero-button": "Découvrons-le",
      "section-about": "De la Vision à la Victoire",
      "about-text": "Chaque idée commence par une étincelle. Chez Magic Studio, nous prenons cette étincelle et la sculptons en un chef-d'œuvre numérique. Forts de notre expertise en design et de notre passion pour l'innovation, nous créons des sites web qui ne se contentent pas d'exister, ils inspirent, engagent et produisent des résultats. Notre approche est collaborative et créative, garantissant que votre site web est un véritable reflet de l'identité unique et des objectifs de votre marque. Nous croyons en la construction non seulement de sites web, mais d'expériences numériques durables qui résonnent auprès de votre public et favorisent des connexions significatives.",
      "section-portfolio": "Nos Derniers Projets",
      "portfolio-title-1": "Carrera Rallye",
      "portfolio-description-1": "Nous avons travaillé en étroite collaboration avec Stéphane, le créateur de Carrera Rallye - Expérience Porsche, pour donner vie à son idée grâce à un site web convivial. Grâce à une conception soignée et un développement stratégique, nous avons construit une plateforme polie présentant des visuels saisissants, un système d'inscription fluide et des informations détaillées sur l'événement - calendrier, véhicules éligibles, itinéraires et hébergements haut de gamme. Cette solution numérique raffinée améliore l'engagement, stimule la participation et capture le frisson de l'expérience du rallye.",
      "portfolio-link-1": "Voir le Projet",
      "service-title-1": "Conception et Développement Web",
      "service-description-1": "Création de sites web visuellement époustouflants et très fonctionnels adaptés à votre marque.",
      "service-title-2": "Expérience utilisateur et interface",
      "service-description-2": "Création d'expériences utilisateur intuitives et engageantes qui incitent les visiteurs à revenir.",
      "service-title-3": "Marque et Identité",
      "service-description-3": "Développement d'une identité de marque forte et mémorable qui résonne auprès de votre public cible.",
      "section-contact": "Créons de la Magie Ensemble",
      "contact-name": "Votre Nom",
      "contact-email": "Votre Email",
      "contact-message": "Votre Message",
      "contact-button": "Envoyer le Message",
      "footer-text": "© 2023 Magic Studio. Tous droits réservés.",
      "alert-success": "Merci pour votre message ! Nous vous répondrons bientôt.",
      "alert-error": "Veuillez remplir tous les champs."
    }
  };

  const languageLink = document.getElementById('language-switcher-link');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const contactButton = document.getElementById('contact-btn');
  const contactForm = document.querySelector('.contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const sections = document.querySelectorAll('section, footer');

  // --- Language Switcher ---
  function updateLanguageLink(currentLang) {
    if (!languageLink) return;
    if (currentLang === 'en') {
      languageLink.textContent = 'Français';
      languageLink.onclick = () => changeLanguage('fr');
    } else {
      languageLink.textContent = 'English';
      languageLink.onclick = () => changeLanguage('en');
    }
  }

  function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        element.placeholder = translations[lang][key];
      }
    });

    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    updateLanguageLink(lang);
  }

  // --- Mobile Menu ---
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  }

  // --- Contact Form ---
  if (contactButton && contactForm && nameInput && emailInput && messageInput) {
    contactButton.addEventListener('click', (e) => {
      e.preventDefault();
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();
      const currentLang = localStorage.getItem('language') || 'en';

      console.log('Form submission started:', { name, email, message });

      if (name && email && message) {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzOnanBnuV8YNKTLH0uQ3dPBqVzejeRFxAgorEmdzkO5DTJqxfTFZr4I7WPLTZ3qCgw/exec';
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        console.log('Sending fetch request to Google Apps Script...');

        fetch(scriptURL, {
          method: 'POST',
          body: formData
        })
        .then(response => {
          console.log('Response received:', response);
          if (response.ok) {
            return response.json();
          } else {
            // Handle HTTP errors
            return response.text().then(text => { throw new Error(`HTTP error! status: ${response.status}, body: ${text}`); });
          }
        })
        .then(data => {
          console.log('Success:', data);
          if (data.status === 'success') {
            alert(translations[currentLang]['alert-success']);
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
          } else {
            alert(translations[currentLang]['alert-error'] + ': ' + data.message);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert(translations[currentLang]['alert-error'] + ': ' + error.message);
        });
      } else {
        alert(translations[currentLang]['alert-error']);
      }
    });
  }

  // --- Intersection Observer for Sections ---
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  if (sections.length > 0) {
    sections.forEach(section => {
      observer.observe(section);
    });
  }

  // --- Initial Language Setup ---
  const savedLang = localStorage.getItem('language') || 'en';
  changeLanguage(savedLang);
});