function setNavbarStyle(isScrolled) {
    const navbar = document.getElementById("navbar");
    const logoLink = document.getElementById('logo').querySelector('a');
    const lines = document.getElementsByClassName("line");

    if (isScrolled) {
        navbar.classList.add('scrolled');
        logoLink.classList.add('scrolled-text');
        Array.from(lines).forEach(line => line.classList.add('scrolled-line'));
        navbar.style.background = "white"; 
    } else {
        navbar.classList.remove('scrolled');
        logoLink.classList.remove('scrolled-text');
        Array.from(lines).forEach(line => line.classList.remove('scrolled-line'));
        navbar.style.background = "transparent"; 
    }
}

function toggleMenue() {
    const menu = document.getElementById('menu-options');
    const hamburger = document.getElementById('hamburger-menu');
    const navbar = document.getElementById("navbar");

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('active');
        hamburger.classList.add('active');
        navbar.classList.add('menu-open'); 
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('active');
        hamburger.classList.remove('active');
        navbar.classList.remove('menu-open'); 
        if (window.scrollY === 0) {
            setNavbarStyle(false);
        }
    }
}

window.addEventListener('scroll', () => {
    setNavbarStyle(window.scrollY > 0); 
});


function hideMenu() {
    const links = document.querySelectorAll('#menu-options a');
    
    links.forEach(link => {
            const menu = document.getElementById('menu-options');
            menu.classList.add('hidden');
            menu.classList.remove('active');
            
            const hamburger = document.getElementById('hamburger-menu');
            hamburger.classList.remove('active');
            
            if (window.scrollY === 0) {
                setNavbarStyle(false);
            }
    });
}

const links = document.querySelectorAll('#menu-options a');
links.forEach(link => {
    addEventListener('click', hideMenu());
});

function scrollDown() {
    const arrow = document.getElementById("arrow");
    window.scroll({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

function loadScreen() {
        setTimeout(() => {
            document.body.classList.add("loaded");
            document.getElementById("loading-screen").style.opacity = '0';
        }, 1000);
}

window.addEventListener("load", loadScreen);

       
window.addEventListener("load", () => {
    const taglines = [
        "Inspiring growth through knowledge and integrity.",
        "Shaping tomorrow's leaders with wisdom and virtue.",
        "Nurturing minds with education and ethical values.",
        "Cultivating the future through learning and character.",
        "Empowering young minds with knowledge and respect.",
        "Building a brighter future with education and morals.",
        "Igniting passion for learning and ethical living.",
        "Educating with purpose, inspiring with integrity.",
        "Developing the leaders of tomorrow with wisdom and care.",
        "Unlocking potential with knowledge and strong values.",
        "Enlightening the path to success with knowledge and virtue.",
        "Fostering minds of strength and wisdom for the future.",
        "Guiding the next generation through education and morals.",
        "Creating change through knowledge, compassion, and values.",
        "Encouraging growth through learning and honor.",
        "Inspiring students to lead with knowledge and compassion.",
        "Educating future leaders with wisdom and character.",
        "Cultivating curiosity and values for lifelong success.",
        "Transforming lives through learning and ethical principles.",
        "Developing character and intellect for a brighter tomorrow."
    ];

    const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
    const qualityText = document.getElementById("quality-text");
    qualityText.textContent = '';

    let index = 0;
    const typewriterEffect = () => {
        if (index < randomTagline.length) {
            qualityText.textContent += randomTagline.charAt(index);
            index++;
            setTimeout(typewriterEffect, 60); 
        } else {
            qualityText.style.borderRight = 'none'; 
        }
    };

    typewriterEffect();
});

document.querySelectorAll('.language-btn').forEach(button => {
    button.addEventListener('click', function() {
        const selectedLang = this.getAttribute('data-lang');
        setTimeout(() => {
        changeLanguage(selectedLang);
    }, 800);
    });
});

function changeLanguage(language, events = [hideMenu, loadScreen]) {

    document.body.classList.remove("loaded");
    window.scrollTo(0, 0);
    const loader = document.getElementById("loading-screen");
    loader.style.opacity = '1';

    events.forEach(callback => {
        if (typeof callback === "function") {
            callback();
        }

    });
    const languageData = {
        en: {
            logoText: "ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ",
            "menu-about": "About",
            "menu-register": "Register",
            "menu-contact": "Contact",
            "fa-btn": "فارسی",
            "ps-btn": "پښتو",
            "en-btn": "English",
            "start-title": "Islamic Madrasa",
            "start-description": "Empowering the next generation with knowledge and value",
            "scroll-down": "&darr;",
            "about-title-header": "About Us",
            "about-description": "At [School Name], we are dedicated to fostering a nurturing and inclusive environment where Afghan children can thrive academically.",
            "learn-more": "Learn More &rarr;",
            "register-title": "Register",
            "register-description": "Registration form and details.",
            "contact-title": "Contact Us",
            "contact-description": "Contact information and form."
        },
        fa: {
            logoText: "ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ",
            "menu-about": "درباره ما",
            "menu-register": "ثبت نام",
            "menu-contact": "تماس",
            "fa-btn": "فارسی",
            "ps-btn": "پښتو",
            "en-btn": "English",
            "start-title": "مدرسه اسلامی",
            "start-description": "توانمندسازی نسل بعد با دانش و ارزش‌ها",
            "scroll-down": "&darr;",
            "about-title-header": "درباره ما",
            "about-description": ".ر مدرسه اسلامی، ما متعهد به پرورش یک محیط پرورش دهنده و فراگیر هستیم جاییکه اطفال افغان بتوانند از نظر علمی، معنوی و فرهنگی رونق یابند ",
            "learn-more": "یادگیری بیشتر &rarr;",
            "register-title": "ثبت نام",
            "register-description": "فرم ثبت نام و جزئیات",
            "contact-title": "تماس با ما",
            "contact-description": "اطلاعات تماس و فرم"
        },
        ps: {
            logoText: "ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ",
            "menu-about": "زموږ په اړه",
            "menu-register": "د راجسټری",
            "menu-contact": "موږ سره اړیکه",
            "fa-btn": "فارسی",
            "ps-btn": "پښتو",
            "en-btn": "English",
            "start-title": "اسلامي مدرسه",
            "start-description": "د بل نسل لپاره د پوهې او ارزښتونو سره ځواکمن کول",
            "scroll-down": "&darr;",
            "about-title-header": "زموږ په اړه",
            "about-description": "په اسلامي مدرسو کې، موږ د روزنې او ټول شموله چاپیریال رامینځته کولو ته وقف شوي یو چیرې چې افغان ماشومان په علمي، روحاني او کلتوري توګه وده کولی شي",
            "learn-more": "نور زده کړئ &rarr;",
            "register-title": "د راجسټری",
            "register-description": "د ثبت نام فورمه او تفصیل",
            "contact-title": "موږ سره اړیکه",
            "contact-description": "د اړیکو معلومات او فورمه"
        }
    };

    if (!languageData[language]) {
        console.error(`Language '${language}' not supported.`);
        return;
    }
    const elements = document.querySelectorAll('[data-key]');
    const selectedLanguageData = languageData[language];
    const rtlEligibleElements = document.querySelectorAll('[data-rtl]');

    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        
        if (selectedLanguageData[key]) {
            element.innerHTML = selectedLanguageData[key];
            
            rtlEligibleElements.forEach(rtlElement => {
                if (language === 'fa' || language === 'ps') {
                  document.body.classList.add('lang-mefaps');
                  rtlElement.style.textAlign = 'right';
                } else {
                  rtlElement.style.textAlign = 'left';
                }
              });
            
        } else {
            console.warn(`Key '${key}' not found for language '${language}'.`);
        }
    });
}



    

