
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
        setTimeout(() => {
            menu.classList.add('hidden');
            menu.classList.remove('active');
            hamburger.classList.remove('active');
            navbar.classList.remove('menu-open'); 
            if (window.scrollY === 0) {
                setNavbarStyle(false);
            }
        }, 100); 
    }
}

function scrollUp() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
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
        { id: 0, text: "Inspiring growth through knowledge and integrity." },
        { id: 1, text: "Shaping tomorrow's leaders with wisdom and virtue." },
        { id: 2, text: "Nurturing minds with education and ethical values." },
        { id: 3, text: "Cultivating the future through learning and character." },
        { id: 4, text: "Empowering young minds with knowledge and respect." },
        { id: 5, text: "Building a brighter future with education and morals." },
        { id: 6, text: "Igniting passion for learning and ethical living." },
        { id: 7, text: "Educating with purpose, inspiring with integrity." },
        { id: 8, text: "Developing the leaders of tomorrow with wisdom and care." },
        { id: 9, text: "Unlocking potential with knowledge and strong values." },
        { id: 10, text: "Enlightening the path to success with knowledge and virtue." },
        { id: 11, text: "Fostering minds of strength and wisdom for the future." },
        { id: 12, text: "Guiding the next generation through education and morals." },
        { id: 13, text: "Creating change through knowledge, compassion, and values." },
        { id: 14, text: "Encouraging growth through learning and honor." },
        { id: 15, text: "Inspiring students to lead with knowledge and compassion." },
        { id: 16, text: "Educating future leaders with wisdom and character." },
        { id: 17, text: "Cultivating curiosity and values for lifelong success." },
        { id: 18, text: "Transforming lives through learning and ethical principles." },
        { id: 19, text: "Developing character and intellect for a brighter tomorrow." }
    ];

 const randomTaglineObj = taglines[Math.floor(Math.random() * taglines.length)];
    const theTagline = randomTaglineObj.text; 
    const theTaglineId = randomTaglineObj.id; 
    const qualityText = document.getElementById("quality-text");
    qualityText.textContent = ''; 
    let index = 0;
    const typewriterEffect = () => {
        if (index < theTagline.length) {
            qualityText.textContent += theTagline.charAt(index);
            index++;
            setTimeout(typewriterEffect, 60); 
        }
    };

    qualityText.setAttribute("data-key", theTaglineId);

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
            "contact-description": "Contact information and form.",
            "0": "Inspiring growth through knowledge and integrity",
            "1": "Shaping tomorrow's leaders with wisdom and virtue",
            "2": "Nurturing minds with education and ethical values",
            "3": "Cultivating the future through learning and character",
            "4": "Empowering young minds with knowledge and respect",
            "5": "Building a brighter future with education and morals",
            "6": "Igniting passion for learning and ethical living",
            "7": "Educating with purpose, inspiring with integrity",
            "8": "Developing the leaders of tomorrow with wisdom and care",
            "9": "Unlocking potential with knowledge and strong values",
            "10": "Enlightening the path to success with knowledge and virtue",
            "11": "Fostering minds of strength and wisdom for the future",
            "12": "Guiding the next generation through education and morals",
            "13": "Creating change through knowledge, compassion, and values",
            "14": "Encouraging growth through learning and honor",
            "15": "Inspiring students to lead with knowledge and compassion",
            "16": "Educating future leaders with wisdom and character",
            "17": "Cultivating curiosity and values for lifelong success",
            "18": "Transforming lives through learning and ethical principles",
            "19": "Developing character and intellect for a brighter tomorrow"
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
            "contact-description": "اطلاعات تماس و فرم",
            "0": "الهام‌بخشی رشد از طریق دانش و صداقت",
            "1": "شکل‌دهی رهبران فردا با حکمت و فضیلت",
            "2": "پرورش ذهن‌ها با آموزش و ارزش‌های اخلاقی",
            "3": "پرورش آینده از طریق یادگیری و شخصیت",
            "4": "توانمندسازی ذهن‌های جوان با دانش و احترام",
            "5": "ساختن آینده‌ای روشن با آموزش و اخلاق",
            "6": "شعله‌ور کردن اشتیاق به یادگیری و زندگی اخلاقی",
            "7": "آموزش با هدف، الهام‌بخشی با صداقت",
            "8": "پرورش رهبران آینده با حکمت و مراقبت",
            "9": "گشودن استعدادها با دانش و ارزش‌های قوی",
            "10": "روشن‌سازی مسیر موفقیت با دانش و فضیلت",
            "11": "پرورش ذهن‌های قوی و حکیم برای آینده",
            "12": "هدایت نسل بعد از طریق آموزش و اخلاق",
            "13": "ایجاد تغییر از طریق دانش، دلسوزی و ارزش‌ها",
            "14": "تشویق رشد از طریق یادگیری و افتخار",
            "15": "الهام‌بخشی دانش‌آموزان برای رهبری با دانش و دلسوزی",
            "16": "آموزش رهبران آینده با حکمت و شخصیت",
            "17": "پرورش کنجکاوی و ارزش‌ها برای موفقیت مادام‌العمر",
            "18": "تغییر زندگی از طریق یادگیری و اصول اخلاقی",
            "19": "پرورش شخصیت و عقل برای فردایی روشن"
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
            "contact-description": "د اړیکو معلومات او فورمه",
            "0": "د پوهې او صداقت له لارې وده هڅول",
            "1": "د سبا مشرانو ته د حکمت او فضیلت سره شکل ورکول",
            "2": "ذهنونه د زده‌کړې او اخلاقي ارزښتونو سره روزل",
            "3": "راتلونکی د زده‌کړې او شخصیت له لارې روزل",
            "4": "ځوان ذهنونه د پوهې او درناوي سره ځواکمنول",
            "5": "روښانه راتلونکی د زده‌کړې او اخلاقو سره جوړول",
            "6": "د زده‌کړې او اخلاقي ژوند لپاره جذبه هڅول",
            "7": "د موخې سره زده‌کړه کول، د صداقت سره الهام ورکول",
            "8": "د سبا مشران د حکمت او پاملرنې سره روزل",
            "9": "د پوهې او قوي ارزښتونو سره وړتیا خلاصول",
            "10": "د پوهې او فضیلت سره د بریالیتوب لاره روښانه کول",
            "11": "د راتلونکي لپاره قوي او حکیمانه ذهنونه روزل",
            "12": "د زده‌کړې او اخلاقو له لارې راتلونکي نسل ته لارښوونه",
            "13": "د پوهې، شفقت او ارزښتونو له لارې بدلون رامنځته کول",
            "14": "د زده‌کړې او عزت له لارې وده هڅول",
            "15": "د زده‌کړې سره زده‌کوونکي د پوهې او شفقت سره مشري ته هڅول",
            "16": "د حکمت او شخصیت سره د راتلونکي مشرانو روزنه",
            "17": "د اوږدمهاله بریالیتوب لپاره د تجسس او ارزښتونو روزنه",
            "18": "د زده‌کړې او اخلاقي اصولو له لارې ژوند بدلول",
            "19": "د روښانه سبا لپاره شخصیت او عقل وده ورکول"
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

const navbarHeight = document.querySelector("#navbar").offsetHeight;

function scrollForAbout() {
    const aboutSection = document.getElementById("about");
    const aboutOffsetTop = aboutSection.offsetTop - navbarHeight;
    window.scrollTo({
        top: aboutOffsetTop,
        behavior: "smooth"
    });
}

function scrollForContact() {
    const contactSection = document.getElementById("contact");
    const contactOffsetTop = contactSection.offsetTop - navbarHeight;
    window.scrollTo({
        top: contactOffsetTop,
        behavior: "smooth"
    });
}

function scrollForRegister() {
    const registerSection = document.getElementById("register");
    const registerOffsetTop = registerSection.offsetTop - navbarHeight;
    window.scrollTo({
        top: registerOffsetTop,
        behavior: "smooth"
    });
}



