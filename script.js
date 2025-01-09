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

document.querySelectorAll('#menu-options a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('menu-options');
        menu.classList.add('hidden');
        menu.classList.remove('active');
        const hamburger = document.getElementById('hamburger-menu');
        hamburger.classList.remove('active');
        if (window.scrollY === 0) {
            setNavbarStyle(false);
        }
    });
});

function scrollDown() {
    const arrow = document.getElementById("arrow");
    window.scroll({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add("loaded");
        setTimeout(() => {
            document.getElementById("loading-screen").remove();
        }, 1000);
    }, 500);
});
       
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
        changeLanguage(selectedLang);
    });
});

function changeLanguage(language) {
    const languageData = {
        en: {
            logoText: "ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ",
            menu: {
                about: "About",
                register: "Register",
                contact: "Contact"
            },
            faBtn: "فارسی",
            psBtn: "پښتو",
            enBtn: "English",
            start: {
                title: "Islamic Madrasa",
                description: "Empowering the next generation with knowledge and value"
            },
            scrollDown: "&darr;",
            about: {
                title: "About Us",
                description: "At [School Name], we are dedicated to fostering a nurturing and inclusive environment where Afghan children can thrive academically."
            },
            learnMore: "Learn More &rarr;",
            register: {
                title: "Register",
                description: "Registration form and details."
            },
            contact: {
                title: "Contact Us",
                description: "Contact information and form."
            }
        },
        fa: {
            logoText: "ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ",
            menu: {
                about: "درباره ما",
                register: "ثبت نام",
                contact: "تماس"
            },
            faBtn: "فارسی",
            psBtn: "پښتو",
            enBtn: "English",
            start: {
                title: "مدرسه اسلامی",
                description: "توانمندسازی نسل بعد با دانش و ارزش‌ها"
            },
            scrollDown: "&darr;",
            about: {
                title: "درباره ما",
                description: "در [نام مدرسه]، ما به ایجاد یک محیط پرورشی و فراگیر متعهد هستیم که در آن کودکان افغان می‌توانند از نظر علمی، معنوی و فرهنگی شکوفا شوند..."
            },
            learnMore: "یادگیری بیشتر &rarr;",
            register: {
                title: "ثبت نام",
                description: "فرم ثبت نام و جزئیات."
            },
            contact: {
                title: "تماس با ما",
                description: "اطلاعات تماس و فرم."
            }
        },
        ps: {
            logoText: "ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ",
            menu: {
                about: "زموږ په اړه",
                register: "د راجسټری",
                contact: "موږ سره اړیکه"
            },
            faBtn: "فارسی",
            psBtn: "پښتو",
            enBtn: "English",
            start: {
                title: "اسلامي مدرسه",
                description: "د بل نسل لپاره د پوهې او ارزښتونو سره ځواکمن کول"
            },
            scrollDown: "&darr;",
            about: {
                title: "زموږ په اړه",
                description: "په [مدرسه نوم] کې، موږ د یو ملاتړ کونکي او ټولشموله چاپیریال رامینځته کولو ته ژمن یو..."
            },
            learnMore: "نور زده کړئ &rarr;",
            register: {
                title: "د راجسټری",
                description: "د ثبت نام فورمه او تفصیل."
            },
            contact: {
                title: "موږ سره اړیکه",
                description: "د اړیکو معلومات او فورمه."
            }
        }
    };

    const elements = document.querySelectorAll('[data-key]');

    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        element.innerHTML = languageData[language][key]; 
    });
}


    

