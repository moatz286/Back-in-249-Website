  // Language translations
        const translations = {
            en: {
                app_name: "Back In 249",
                language: "العربية",
                nav_home: "Home",
                nav_about: "About",
                nav_contact: "Contact",
                hero_title: "Journey Through Our Memories in Sudan",
                hero_description: "Back in 249 is an innovative app designed to take you on a journey back in time. Share pictures, connect with fellow time travelers, and experience memories of Sudan like never before.",
                download_btn: "Download Now",
                learn_more: "Learn More",
                about_title: "About Back In 249",
                version: "Version: 1.0.1",
                app_description: "Back in 249 is a social sharing app designed to help you capture, cherish, and share special memories with your friends and loved ones. In a world where moments can easily slip away, Back in 249 ensures that the beautiful experiences we create are preserved and celebrated together.",
                features_title: "Key Features",
                feature1: "Share Pictures and photos",
                feature2: "Connect with friends",
                feature3: "Share experiences",
                feature4: "Discover exceptional memories",
                feature5: "Notifications and updates",
                contact_title: "Contact & Support",
                email_support: "Email Support",
                email_click: "Click to email us directly",
                website: "Website",
                visit_website: "Visit our official website",
                play_store: "Play Store",
                rate_app: "Rate Our App",
                leave_review: "Leave us a review on Google Play",
                feedback_title: "Your Feedback",
                feedback_prompt: "We'd love to hear what you think about Back In 249",
                rate_btn: "Rate Us on Play Store",
                thank_you: "Thank you for using Back in 249! We appreciate your support.",
                rights_reserved: "All rights reserved.",
                footer_message: "Relive your past, cherish your present, and look forward to your future."
            },
            ar: {
                app_name: "Back In 249",
                language: "English",
                nav_home: "الرئيسية",
                nav_about: "عن التطبيق",
                nav_contact: "اتصل بنا",
                hero_title: "رحلة عبر ذكرياتنا في السودان",
                hero_description: "Back in 249 هو تطبيق مبتكر مصمم لأخذك في رحلة عبر الزمن. شارك الصور، تواصل مع اصدقائك المسافرين عبر الزمن، واختبر ذكريات السودان كما لم يحدث من قبل.",
                download_btn: "حمل التطبيق الآن",
                learn_more: "اعرف المزيد",
                about_title: "عن Back In 249",
                version: "الإصدار: 1.0.1",
                app_description: "Back in 249 تطبيق مشاركة اجتماعية مصمم لمساعدتك على التقاط ذكرياتك المميزة والاحتفاظ بها ومشاركتها مع أصدقائك وأحبائك. في عالم تضيع فيه اللحظات بسهولة، يضمن Back in 249 الحفاظ على التجارب الجميلة التي نصنعها والاحتفال بها معًا.",
                features_title: "الميزات الرئيسية",
                feature1: "مشاركة الصور والصور الفوتوغرافية",
                feature2: "التواصل مع الأصدقاء",
                feature3: "مشاركة التجارب",
                feature4: "اكتشف ذكريات استثنائية",
                feature5: "الإشعارات والتحديثات",
                contact_title: "الاتصال والدعم",
                email_support: "الدعم عبر البريد الإلكتروني",
                email_click: "انقر لإرسال بريد إلكتروني مباشر",
                website: "الموقع الإلكتروني",
                visit_website: "قم بزيارة موقعنا الرسمي",
                play_store: "متجر Play",
                rate_app: "قيم تطبيقنا",
                leave_review: "اترك لنا تعليقًا على متجر Google Play",
                feedback_title: "ملاحظاتك",
                feedback_prompt: "نود أن نسمع رأيك في Back in 249",
                rate_btn: "قيمنا على متجر Play",
                thank_you: "شكرًا لاستخدامك Back in 249! نقدر دعمك.",
                rights_reserved: "جميع الحقوق محفوظة.",
                footer_message: "أعد عيش ماضيك، كنز حاضرك، وتطلع إلى مستقبلك."
            }
        };

        // Current language
        let currentLang = 'en';
        
        // Theme toggle
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            // Save preference to localStorage
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark);
        }
        
        // Language toggle
        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            document.body.classList.toggle('rtl', currentLang === 'ar');
            translatePage();
            localStorage.setItem('language', currentLang);
        }
        
        // Translate the page
        function translatePage() {
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                el.textContent = translations[currentLang][key];
            });
        }
        
        // Rating functionality
        function rateApp(rating) {
            // Highlight selected stars
            const stars = document.querySelectorAll('.star');
            stars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
            
            // Show thank you message
            alert(currentLang === 'en' 
                ? `Thank you for your feedback! You rated us ${rating} star${rating > 1 ? 's' : ''}.` 
                : `شكرًا على ملاحظاتك! لقد قيمتنا بـ ${rating} نجوم.`);
        }
        
        // Initialize page
        function init() {
            // Check for saved theme preference
            if (localStorage.getItem('darkMode') === 'true') {
                document.body.classList.add('dark-mode');
            }
            
            // Check for saved language preference
            const savedLang = localStorage.getItem('language');
            if (savedLang) {
                currentLang = savedLang;
                if (currentLang === 'ar') {
                    document.body.classList.add('rtl');
                }
            }
            translatePage();
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        }
        
        // Initialize when page loads
        window.onload = init;