document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       HASEEF LANGUAGE SYSTEM
    ========================================= */

    const languageBtn = document.getElementById("languageBtn");

    let currentLanguage =
        localStorage.getItem("haseefLanguage") || "ar";


    /* =========================================
       UPDATE LANGUAGE
    ========================================= */

    function updateLanguage() {

        /* Page direction */
        document.documentElement.lang = currentLanguage;

        document.documentElement.dir =
            currentLanguage === "ar" ? "rtl" : "ltr";

        document.body.classList.toggle(
            "en",
            currentLanguage === "en"
        );


        /* =====================================
           CHANGE ELEMENTS WITH DATA ATTRIBUTES
        ===================================== */

        document
            .querySelectorAll("[data-ar][data-en]")
            .forEach(function (element) {

                const arabic =
                    element.getAttribute("data-ar");

                const english =
                    element.getAttribute("data-en");


                /*
                 * innerHTML is intentional here.
                 *
                 * It allows the existing HTML structure
                 * such as <span> and <em> to remain.
                 */

                if (currentLanguage === "ar") {
                    element.innerHTML = arabic;
                } else {
                    element.innerHTML = english;
                }

            });


        /* =====================================
           LANGUAGE BUTTON
        ===================================== */

        if (languageBtn) {

            languageBtn.textContent =
                currentLanguage === "ar"
                    ? "EN"
                    : "AR";

        }


        /* =====================================
           SAVE LANGUAGE
        ===================================== */

        localStorage.setItem(
            "haseefLanguage",
            currentLanguage
        );


        /* =====================================
           TRANSLATE COMMON STATIC ELEMENTS
        ===================================== */

        translateStaticContent();

    }


    /* =========================================
       STATIC CONTENT TRANSLATIONS
    ========================================= */

    function translateStaticContent() {

        /* -------------------------------------
           SECTION LABELS
        ------------------------------------- */

        const staticTranslations = {

            "ABOUT HASEEF": {
                ar: "عن حصيف",
                en: "ABOUT HASEEF"
            },

            "WHAT WE DO": {
                ar: "ماذا نقدم",
                en: "WHAT WE DO"
            },

            "GLOBAL MARKETS": {
                ar: "الأسواق العالمية",
                en: "GLOBAL MARKETS"
            },

            "OUR APPROACH": {
                ar: "منهجيتنا",
                en: "OUR APPROACH"
            },

            "START A CONVERSATION": {
                ar: "ابدأ محادثة",
                en: "START A CONVERSATION"
            },

            "EXPLORE": {
                ar: "استكشف",
                en: "EXPLORE"
            },

            "CONTACT": {
                ar: "تواصل",
                en: "CONTACT"
            },

            "SELECTED ADVISORY ECOSYSTEM": {
                ar: "منظومة استشارية مختارة",
                en: "SELECTED ADVISORY ECOSYSTEM"
            },

            "GLOBAL PERSPECTIVE": {
                ar: "منظور عالمي",
                en: "GLOBAL PERSPECTIVE"
            }

        };


        document
            .querySelectorAll("*")
            .forEach(function (element) {

                /*
                 * Only elements with a direct text node
                 * are considered.
                 */

                if (
                    element.children.length === 0 &&
                    element.textContent.trim()
                ) {

                    const text =
                        element.textContent.trim();


                    if (staticTranslations[text]) {

                        element.textContent =
                            staticTranslations[text][
                                currentLanguage
                            ];

                    }

                }

            });


        /* -------------------------------------
           SERVICES
        ------------------------------------- */

        const services = {

            "Market Entry": {
                ar: "دخول الأسواق",
                en: "Market Entry"
            },

            "Market Intelligence": {
                ar: "ذكاء الأسواق",
                en: "Market Intelligence"
            },

            "Growth Strategy": {
                ar: "استراتيجية النمو",
                en: "Growth Strategy"
            },

            "Investment Advisory": {
                ar: "الاستشارات الاستثمارية",
                en: "Investment Advisory"
            },

            "Commercial Due Diligence": {
                ar: "العناية الواجبة التجارية",
                en: "Commercial Due Diligence"
            },

            "International Partnerships": {
                ar: "الشراكات الدولية",
                en: "International Partnerships"
            }

        };


        document
            .querySelectorAll(".service h3")
            .forEach(function (element) {

                const key =
                    element.textContent.trim();

                if (services[key]) {

                    element.textContent =
                        services[key][currentLanguage];

                }

            });


        /* -------------------------------------
           SERVICE DESCRIPTIONS
        ------------------------------------- */

        const serviceDescriptions = {

            0: {
                ar: "اختيار السوق، استراتيجية الدخول والتخطيط التجاري للتوسع الدولي.",
                en: "Market selection, entry strategy and commercial planning for international expansion."
            },

            1: {
                ar: "حجم السوق، تحليل المنافسين، رؤى العملاء وأبحاث القطاعات.",
                en: "Market sizing, competitive analysis, customer insights and industry research."
            },

            2: {
                ar: "خطط نمو استراتيجية مبنية على الفرص السوقية والأولويات التجارية.",
                en: "Strategic growth plans built around market opportunities and commercial priorities."
            },

            3: {
                ar: "تقييم الفرص والرؤى الاستراتيجية للمستثمرين الذين يدرسون أسواقًا جديدة.",
                en: "Opportunity assessment and strategic insight for investors evaluating new markets."
            },

            4: {
                ar: "تحليل مستقل للأسواق والمنافسين والعملاء والإمكانات التجارية.",
                en: "Independent analysis of markets, competitors, customers and commercial potential."
            },

            5: {
                ar: "دعم استراتيجي لتحديد وتطوير الفرص التجارية الدولية.",
                en: "Strategic support for identifying and developing international commercial opportunities."
            }

        };


        document
            .querySelectorAll(".service p")
            .forEach(function (element, index) {

                if (serviceDescriptions[index]) {

                    element.textContent =
                        serviceDescriptions[index][
                            currentLanguage
                        ];

                }

            });


        /* -------------------------------------
           APPROACH
        ------------------------------------- */

        const approachTitles = {

            "Understand": {
                ar: "فهم",
                en: "Understand"
            },

            "Challenge": {
                ar: "تحدي",
                en: "Challenge"
            },

            "Define": {
                ar: "تحديد",
                en: "Define"
            },

            "Move": {
                ar: "تحرك",
                en: "Move"
            }

        };


        document
            .querySelectorAll(".approach-card h3")
            .forEach(function (element) {

                const key =
                    element.textContent.trim();

                if (approachTitles[key]) {

                    element.textContent =
                        approachTitles[key][
                            currentLanguage
                        ];

                }

            });


        const approachDescriptions = {

            0: {
                ar: "نفهم الأعمال والطموح والسوق والسؤال الاستراتيجي.",
                en: "We understand the business, ambition, market and strategic question."
            },

            1: {
                ar: "نختبر الافتراضات ونحدد المخاطر قبل أن تتحول إلى قرارات.",
                en: "We challenge assumptions and identify risks before they become decisions."
            },

            2: {
                ar: "نحوّل البحث والرؤى إلى اتجاه استراتيجي واضح.",
                en: "We translate research and insight into a clear strategic direction."
            },

            3: {
                ar: "نركز على خطوات عملية تحول الاستراتيجية إلى تقدم ملموس.",
                en: "We focus on practical actions that turn strategy into progress."
            }

        };


        document
            .querySelectorAll(".approach-card p")
            .forEach(function (element, index) {

                if (approachDescriptions[index]) {

                    element.textContent =
                        approachDescriptions[index][
                            currentLanguage
                        ];

                }

            });


        /* -------------------------------------
           MARKET LIST
        ------------------------------------- */

        const marketTranslations = {

            "Europe": {
                ar: "أوروبا",
                en: "Europe"
            },

            "Middle East": {
                ar: "الشرق الأوسط",
                en: "Middle East"
            },

            "Asia": {
                ar: "آسيا",
                en: "Asia"
            },

            "North America": {
                ar: "أمريكا الشمالية",
                en: "North America"
            },

            "Africa": {
                ar: "أفريقيا",
                en: "Africa"
            },

            "Oceania": {
                ar: "أوقيانوسيا",
                en: "Oceania"
            }

        };


        document
            .querySelectorAll(".market-list span")
            .forEach(function (element) {

                const key =
                    element.textContent.trim();

                if (marketTranslations[key]) {

                    element.textContent =
                        marketTranslations[key][
                            currentLanguage
                        ];

                }

            });


        /* -------------------------------------
           FORM
        ------------------------------------- */

        const nameInput =
            document.getElementById("name");

        const companyInput =
            document.getElementById("company");

        const emailInput =
            document.getElementById("email");

        const countryInput =
            document.getElementById("country");

        const messageInput =
            document.getElementById("message");


        if (nameInput) {

            nameInput.placeholder =
                currentLanguage === "ar"
                    ? "اسمك"
                    : "Your name";

        }


        if (companyInput) {

            companyInput.placeholder =
                currentLanguage === "ar"
                    ? "اسم الشركة"
                    : "Company name";

        }


        if (emailInput) {

            emailInput.placeholder =
                currentLanguage === "ar"
                    ? "name@company.com"
                    : "name@company.com";

        }


        if (countryInput) {

            countryInput.placeholder =
                currentLanguage === "ar"
                    ? "الدولة"
                    : "Country";

        }


        if (messageInput) {

            messageInput.placeholder =
                currentLanguage === "ar"
                    ? "أخبرنا عن فرصتك أو احتياجك..."
                    : "Tell us about your opportunity...";

        }


        /* -------------------------------------
           SELECT
        ------------------------------------- */

        const interest =
            document.getElementById("interest");


        if (interest) {

            const firstOption =
                interest.querySelector("option");

            if (firstOption) {

                firstOption.textContent =
                    currentLanguage === "ar"
                        ? "اختر مجال الاهتمام"
                        : "Select an area";

            }

            const options =
                interest.querySelectorAll("option");

            const optionTranslations = [

                ["Market Entry", "دخول الأسواق"],
                ["Market Intelligence", "ذكاء الأسواق"],
                ["Growth Strategy", "استراتيجية النمو"],
                ["Investment Advisory", "الاستشارات الاستثمارية"],
                ["Commercial Due Diligence", "العناية الواجبة التجارية"],
                ["International Partnerships", "الشراكات الدولية"]

            ];

            options.forEach(function (option, index) {

                if (index === 0) return;

                const pair =
                    optionTranslations[index - 1];

                if (!pair) return;

                option.textContent =
                    currentLanguage === "ar"
                        ? pair[1]
                        : pair[0];

            });

        }

    }


    /* =========================================
       LANGUAGE BUTTON
    ========================================= */

    if (languageBtn) {

        languageBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                currentLanguage =
                    currentLanguage === "ar"
                        ? "en"
                        : "ar";

                updateLanguage();

            }
        );

    }


    /* =========================================
       CONTACT FORM
    ========================================= */

    const form =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");


    if (form) {

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document
                        .getElementById("name")
                        ?.value
                        .trim();


                const email =
                    document
                        .getElementById("email")
                        ?.value
                        .trim();


                if (!name || !email) {

                    if (formMessage) {

                        formMessage.textContent =
                            currentLanguage === "ar"
                                ? "يرجى تعبئة الاسم والبريد الإلكتروني."
                                : "Please enter your name and email.";

                        formMessage.style.color =
                            "#b42318";

                    }

                    return;

                }


                if (formMessage) {

                    formMessage.textContent =
                        currentLanguage === "ar"
                            ? "تم استلام طلبك بنجاح."
                            : "Your request has been received.";

                    formMessage.style.color =
                        "#087443";

                }


                form.reset();

            }
        );

    }


    /* =========================================
       NAVBAR SHADOW
    ========================================= */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener(
        "scroll",
        function () {

            if (!navbar) return;


            if (window.scrollY > 30) {

                navbar.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,.06)";

            } else {

                navbar.style.boxShadow =
                    "none";

            }

        }
    );


    /* =========================================
       START
    ========================================= */

    updateLanguage();

});
