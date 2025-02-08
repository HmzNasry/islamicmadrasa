function updateTime(language = 'en') {
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, 
    };
    
    let formattedTime = now.toLocaleTimeString(language, options);
    time.textContent = formattedTime;
}


document.addEventListener("DOMContentLoaded", () => {
    const time = document.getElementById('time');
    updateTime();
    setInterval(() => updateTime(), 60000);
});


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
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger-menu');
    const navbar = document.getElementById("navbar");
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('active');
        hamburger.classList.add('active');
        navbar.classList.add('menu-open'); 
        document.body.classList.add('no-scroll');
    } else {
        setTimeout(() => {
            document.body.classList.remove('no-scroll');
            menu.classList.add('hidden');
            menu.classList.remove('active');
            hamburger.classList.remove('active');
            navbar.classList.remove('menu-open'); 
            if (window.scrollY === 0) {
                setNavbarStyle(false);
            }
        }, 0); 
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



const links = document.getElementsByClassName('menu-options');
const langButtons = document.getElementsByClassName('language-btn');

Array.from(links).forEach(link => {
    link.addEventListener('click', () => {
        Array.from(links).forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        toggleMenue();
        console.log('Menu item clicked');
    });
});

if (window.scrollY === 0) {
    setNavbarStyle(false);
}

function scrollDown() {
    const aboutSection = document.getElementById("about");
    const aboutOffsetTop = aboutSection.offsetTop - navbarHeight;
    window.scrollTo({
        top: aboutOffsetTop,
        behavior: "smooth"
    });
}

function loadScreen() {
    document.body.classList.add("loading"); 
    setTimeout(() => {
        document.body.classList.remove("loading"); 
        document.body.classList.add("loaded"); 
        document.getElementById("loading-screen").style.opacity = '0';
        document.getElementById("loading-screen").style.pointerEvents = 'none'; 
    }, 1000); 
}

window.addEventListener("load", loadScreen);

       
window.addEventListener("load", () => {
    const taglines = [
        { id: 0, text: "Inspiring growth through knowledge and integrity" },
        { id: 1, text: "Shaping tomorrow's leaders with wisdom and virtue" },
        { id: 2, text: "Nurturing minds with education and ethical values" },
        { id: 3, text: "Cultivating the future through learning and character" },
        { id: 4, text: "Empowering young minds with knowledge and respect" },
        { id: 5, text: "Building a brighter future with education and morals" },
        { id: 6, text: "Igniting passion for learning and ethical living" },
        { id: 7, text: "Educating with purpose, inspiring with integrity" },
        { id: 8, text: "Developing the leaders of tomorrow with wisdom and care" },
        { id: 9, text: "Unlocking potential with knowledge and strong values" },
        { id: 10, text: "Enlightening the path to success with knowledge and virtue" },
        { id: 11, text: "Fostering minds of strength and wisdom for the future" },
        { id: 12, text: "Guiding the next generation through education and morals" },
        { id: 13, text: "Creating change through knowledge, compassion, and values" },
        { id: 14, text: "Encouraging growth through learning and honor" },
        { id: 15, text: "Inspiring students to lead with knowledge and compassion" },
        { id: 16, text: "Educating future leaders with wisdom and character" },
        { id: 17, text: "Cultivating curiosity and values for lifelong success" },
        { id: 18, text: "Transforming lives through learning and ethical principles" },
        { id: 19, text: "Developing character and intellect for a brighter tomorrow" }
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
    setTimeout(() => {
    typewriterEffect();
},1000);
});

document.querySelectorAll('.language-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.language-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        const selectedLang = this.getAttribute('data-lang');
        changeLanguage(selectedLang);
        updateTime(selectedLang);
    });
});

function changeLanguage(language, events = [toggleMenue(), loadScreen]) {

    document.body.classList.remove("loaded");
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
            "about-description": "At Islamic Madrasa, we are dedicated to fostering a nurturing and inclusive environment where Afghan children can thrive academically.",
            "learn-more": "Learn More &rarr;",
            "register-title": "Register",
            "register-description": "Please use the button below to access the registration form<br>Students are divided into 3 classes<br>Grade 1 / Grade 2 / Grade 3<br>based on their age and knowledge",
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
            "19": "Developing character and intellect for a brighter tomorrow",
            "form-button": "Form&nbsp;&#x2197",
            "menu-class-info": "Class Info",
            "class-info-title": "Class Info",
            "class-info-description": "Information about the classrooms",
            "footer-d": "Icons made by <a href=\"https://www.svgrepo.com/\" target=\"_blank\">SVG Repo</a> under a <a href=\"https://creativecommons.org/publicdomain/zero/1.0/\" target=\"_blank\">CC0 License</a>.<br>Disclaimer: Image used does not represent the organization and is for visual purposes only"

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
            "about-description": "ر مدرسه اسلامی، ما متعهد به پرورش یک محیط پرورش دهنده و فراگیر هستیم جاییکه اطفال افغان بتوانند از نظر علمی، معنوی و فرهنگی رونق یابند ",
            "learn-more": "یادگیری بیشتر &rarr;",
            "register-title": "ثبت نام",
            "register-description": "لطفا از دکمه زیر برای دسترسی به فرم ثبت نام استفاده کنید<br>دانش آموزان بر اساس سن و دانش خود به ۳ تقسیم می شوند<br> صنف ۱ / صنف ۲ / صنف ۳ <br>",
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
            "19": "پرورش شخصیت و عقل برای فردایی روشن",
            "form-button":  "فورم&nbsp;&#x2197",
            "menu-class-info": "معلومات صنف",
            "class-info-title": "معلومات صنف",
            "class-info-description": "معلومات درباره صنف‌ها",
            "footer-d": "آیکون‌ها ساخته شده توسط <a href=\"https://www.svgrepo.com/\" target=\"_blank\">SVG Repo</a> تحت <a href=\"https://creativecommons.org/publicdomain/zero/1.0/\" target=\"_blank\">جواز CC0</a>.<br>سلب مسئولیت: تصویر استفاده شده نمایانگر سازمان نیست و فقط برای مقاصد بصری می‌باشد."
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
            "register-description": "لطفاً د لاندې تڼۍ څخه د راجستر فورم ته د لاسرسي لپاره استفاده وکړئ<br>زده کونکي په ۳ ټولګیو ویشل شوي دي<br> ټولګی ۱ / ټولګی ۲ / ټولګی ۳ <br>د عمر او پوهې پر بنسټ",
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
            "19": "د روښانه سبا لپاره شخصیت او عقل وده ورکول",
            "form-button": "فورم&nbsp;&#x2197",
            "menu-class-info": "ټولګی معلومات",
            "class-info-title":"ټولګی معلومات",
            "class-info-description": "د ټولګیو په اړه معلومات",
            "footer-d": "شمایلونه د <a href=\"https://www.svgrepo.com/\" target=\"_blank\">SVG Repo</a> لخوا جوړ شوي دي، د <a href=\"https://creativecommons.org/publicdomain/zero/1.0/\" target=\"_blank\">CC0 جواز</a> لاندې.<br>مسئولیت رد: کارول شوې انځور د سازمان استازیتوب نه کوي او یوازې د بصري موخو لپاره دی."
        }
    };
    if (!languageData[language]) {
        console.error(`Language '${language}' not supported.`);
        return;
    }
    
    const elements = document.querySelectorAll('[data-key]');
    const selectedLanguageData = languageData[language];
    const rtlEligibleElements = document.querySelectorAll('[data-rtl]');
    const menuOptions = document.querySelectorAll('.menu-options');
    
    if (language === 'fa' || language === 'ps') {
        document.body.classList.remove('lang-ltr');
        document.body.classList.add('lang-rtl');
    } else {
        document.body.classList.remove('lang-rtl');
        document.body.classList.add('lang-ltr');
    }
    
    setTimeout(() => {
        elements.forEach((element) => {
            const key = element.getAttribute('data-key');
            if (selectedLanguageData[key]) {
                element.innerHTML = selectedLanguageData[key];
            } else {
                console.warn(`Key '${key}' not found for language '${language}'.`);
            }
        });
    
        menuOptions.forEach((option) => {
            const svg = option.querySelector('svg');
            const span = option.querySelector('span');
            if (svg && span) {
                if (language === 'fa' || language === 'ps') {
                    option.appendChild(svg); 
                } else {
                    option.insertBefore(svg, span); 
                }
            }
        });
    }, 1000);
}

const navbarHeight = document.querySelector("#navbar").offsetHeight;

function scrollForAbout() {
    const aboutSection = document.getElementById("about");
    const aboutOffsetTop = aboutSection.offsetTop - navbarHeight;
    window.scrollTo({
        top: aboutOffsetTop,
        behavior: "smooth"
    });
    toggleMenue()
}

function scrollForContact() {
    const contactSection = document.getElementById("contact");
    const contactOffsetTop = contactSection.offsetTop - navbarHeight;
    window.scrollTo({
        top: contactOffsetTop,
        behavior: "smooth"
    });
    toggleMenue()
}

function scrollForRegister() {
    const registerSection = document.getElementById("register");
    const registerOffsetTop = registerSection.offsetTop - navbarHeight;
    window.scrollTo({
        top: registerOffsetTop,
        behavior: "smooth"
    });
    toggleMenue()
}

function scrollForClassInfo() {
    const classInfoSection = document.getElementById("class-info");
    const classInfoOffsetTop = classInfoSection.offsetTop - navbarHeight;
    window.scrollTo({
        top: classInfoOffsetTop,
        behavior: "smooth"
    })
    toggleMenue()
}

function setCookie(name, value, ttl) {
    const now = new Date();
    now.setTime(now.getTime() + ttl);
    document.cookie = `${name}=${value}; expires=${now.toUTCString()}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
}

// document.addEventListener("DOMContentLoaded", () => {
//     const correctPassword = "devpasskey123";
//     const popup = document.getElementById("betaPopup");
//     const closeBtn = document.getElementById("closePopup");
//     const body = document.body;

//     if (!getCookie("authorizedSession")) {
//         setTimeout(() => {
//             let attempts = 1;
//             while (attempts > 0) {
//                 const pw = prompt("Enter Access Key:");
//                 if (pw === correctPassword) {
//                     setCookie("authorizedSession", "true", 3600000);
//                     return;
//                 } else {
//                     break
//                 }
//             }

//             popup.classList.remove("hidden");
//             popup.classList.add("visible");
//             body.classList.add("no-scroll");
//         }, 1000);
//     }

//     closeBtn.addEventListener("click", () => {
//         popup.classList.remove("visible");
//         popup.classList.add("hidden");
//         body.classList.remove("no-scroll");
//     });
//});

document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 } 
    );
  
    fadeElements.forEach((el) => observer.observe(el));
  });
  
