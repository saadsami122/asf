document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       LANGUAGE SYSTEM
    ========================================= */

    const languageBtn = document.getElementById("languageBtn");

    let currentLanguage =
        localStorage.getItem("haseefLanguage") || "ar";


    function updateLanguage() {

        /* لغة واتجاه الصفحة */
        document.documentElement.lang = currentLanguage;

        document.documentElement.dir =
            currentLanguage === "ar" ? "rtl" : "ltr";

        document.body.classList.toggle(
            "en",
            currentLanguage === "en"
        );


        /* -----------------------------------------
           تغيير النصوص
        ----------------------------------------- */

        document.querySelectorAll(
            "[data-ar][data-en]"
        ).forEach(function (element) {

            const translatedText =
                element.getAttribute(
                    "data-" + currentLanguage
                );

            if (translatedText !== null) {

                /*
                 * بعض العناصر تحتوي HTML مثل <br>
                 * لذلك نستخدم innerHTML إذا كان النص يحتوي
                 * على HTML.
                 */
                if (translatedText.includes("<")) {
                    element.innerHTML = translatedText;
                } else {
                    element.textContent = translatedText;
                }

            }

        });


        /* -----------------------------------------
           زر اللغة
        ----------------------------------------- */

        if (languageBtn) {

            languageBtn.textContent =
                currentLanguage === "ar"
                    ? "EN"
                    : "AR";

        }


        /* -----------------------------------------
           تحديث القوائم
        ----------------------------------------- */

        updateSelectOptions();

        /* -----------------------------------------
           تحديث نافذة الخدمات
        ----------------------------------------- */

        updateModalLanguage();


        /* حفظ اللغة */

        localStorage.setItem(
            "haseefLanguage",
            currentLanguage
        );

    }


    /* =========================================
       LANGUAGE BUTTON
    ========================================= */

    if (languageBtn) {

        languageBtn.addEventListener(
            "click",
            function () {

                currentLanguage =
                    currentLanguage === "ar"
                        ? "en"
                        : "ar";

                updateLanguage();

            }
        );

    }


    /* =========================================
       SELECT OPTIONS
    ========================================= */

    function updateSelectOptions() {

        const options =
            document.querySelectorAll(
                "#interest option[data-ar][data-en]"
            );

        options.forEach(function (option) {

            const text =
                option.getAttribute(
                    "data-" + currentLanguage
                );

            if (text !== null) {

                option.textContent = text;

            }

        });

    }


    /* =========================================
       SERVICES DATA
    ========================================= */

    const services = {

        "market-entry": {

            number: "01",

            ar: {
                title: "دخول الأسواق",

                description:
                    "نساعد الشركات على تقييم الأسواق الدولية واختيار المسار الأنسب للدخول والتوسع، من خلال دراسة السوق والمنافسة والعملاء والبيئة التجارية.",

                points: [
                    "اختيار الأسواق ذات الأولوية",
                    "تحليل حجم السوق وجاذبيته",
                    "تقييم المنافسين والبدائل",
                    "تحديد نموذج الدخول الأنسب",
                    "بناء خارطة طريق للتوسع"
                ]
            },

            en: {
                title: "Market Entry",

                description:
                    "We help companies assess international markets and define the right path to enter and scale through market, customer, competitive and commercial analysis.",

                points: [
                    "Market prioritization",
                    "Market sizing and attractiveness",
                    "Competitive landscape analysis",
                    "Entry model assessment",
                    "International expansion roadmap"
                ]
            }

        },


        "intelligence": {

            number: "02",

            ar: {
                title: "ذكاء السوق",

                description:
                    "نحوّل البيانات والمعلومات المتفرقة إلى رؤية واضحة تساعد الإدارة والمستثمرين على فهم السوق واتخاذ قرارات أفضل.",

                points: [
                    "تحليل السوق والقطاع",
                    "دراسة المنافسين",
                    "فهم العملاء واحتياجاتهم",
                    "تحليل الاتجاهات",
                    "رصد الفرص والمخاطر"
                ]
            },

            en: {
                title: "Market Intelligence",

                description:
                    "We turn fragmented information into clear market intelligence that helps executives and investors make better strategic decisions.",

                points: [
                    "Market and industry analysis",
                    "Competitive intelligence",
                    "Customer and demand insights",
                    "Trend analysis",
                    "Opportunity and risk assessment"
                ]
            }

        },


        "growth": {

            number: "03",

            ar: {
                title: "استراتيجية النمو",

                description:
                    "نساعد الشركات على تحديد محركات النمو وبناء خطط استراتيجية عملية ترتبط بأهدافها التجارية.",

                points: [
                    "تحديد فرص النمو",
                    "تطوير الاستراتيجية التجارية",
                    "تحديد الأولويات",
                    "بناء مبادرات النمو",
                    "مؤشرات الأداء وخارطة التنفيذ"
                ]
            },

            en: {
                title: "Growth Strategy",

                description:
                    "We help businesses identify growth drivers and build practical strategies aligned with their commercial ambitions.",

                points: [
                    "Growth opportunity identification",
                    "Commercial strategy",
                    "Strategic prioritization",
                    "Growth initiatives",
                    "Execution roadmap and KPIs"
                ]
            }

        },


        "investment": {

            number: "04",

            ar: {
                title: "الاستشارات الاستثمارية",

                description:
                    "نقدم منظورًا استراتيجيًا للمستثمرين الراغبين في تقييم أسواق أو فرص جديدة وفهم الإمكانات التجارية.",

                points: [
                    "دراسة جاذبية السوق",
                    "تقييم الفرصة التجارية",
                    "تحليل المنافسة",
                    "فهم ديناميكيات القطاع",
                    "دعم القرار الاستثماري"
                ]
            },

            en: {
                title: "Investment Advisory",

                description:
                    "We provide investors with strategic perspectives to evaluate new markets and opportunities and understand their commercial potential.",

                points: [
                    "Market attractiveness",
                    "Commercial opportunity assessment",
                    "Competitive analysis",
                    "Industry dynamics",
                    "Investment decision support"
                ]
            }

        },


        "diligence": {

            number: "05",

            ar: {
                title: "الفحص التجاري",

                description:
                    "تحليل مستقل للسوق والعملاء والمنافسين والإمكانات التجارية لمساعدة المستثمرين والشركات على اتخاذ قرارات أكثر وضوحًا.",

                points: [
                    "تحليل السوق",
                    "تقييم الطلب والعملاء",
                    "تحليل المنافسين",
                    "اختبار الفرضيات التجارية",
                    "تحديد المخاطر والفرص"
                ]
            },

            en: {
                title: "Commercial Due Diligence",

                description:
                    "Independent analysis of markets, customers, competitors and commercial potential to support confident business and investment decisions.",

                points: [
                    "Market assessment",
                    "Customer and demand analysis",
                    "Competitive landscape",
                    "Commercial hypothesis testing",
                    "Risk and opportunity assessment"
                ]
            }

        },


        "partnerships": {

            number: "06",

            ar: {
                title: "الشراكات الدولية",

                description:
                    "نساعد الشركات على فهم فرص التعاون الدولي وتطوير مسارات عملية لبناء علاقات وشراكات تجارية.",

                points: [
                    "تحديد فرص التعاون",
                    "تقييم الشركاء المحتملين",
                    "دراسة التوافق الاستراتيجي",
                    "تصميم نموذج التعاون",
                    "دعم تطوير الفرص التجارية"
                ]
            },

            en: {
                title: "International Partnerships",

                description:
                    "We support companies in identifying international partnership opportunities and developing practical paths toward strategic commercial relationships.",

                points: [
                    "Partnership opportunity mapping",
                    "Potential partner assessment",
                    "Strategic fit analysis",
                    "Partnership model design",
                    "Commercial opportunity development"
                ]
            }

        }

    };


    /* =========================================
       SERVICE MODAL
    ========================================= */

    const modal =
        document.getElementById("serviceModal");

    const modalClose =
        document.getElementById("modalClose");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalPoints =
        document.getElementById("modalPoints");

    const modalNumber =
        document.getElementById("modalNumber");

    const modalContact =
        document.getElementById("modalContact");

    const serviceCards =
        document.querySelectorAll(".service");

    let activeService = null;


    function renderModal(serviceKey) {

        const service =
            services[serviceKey];

        if (!service) return;

        const language =
            service[currentLanguage];

        if (modalNumber) {
            modalNumber.textContent =
                service.number;
        }

        if (modalTitle) {
            modalTitle.textContent =
                language.title;
        }

        if (modalDescription) {
            modalDescription.textContent =
                language.description;
        }

        if (modalPoints) {

            modalPoints.innerHTML = "";

            language.points.forEach(function (point) {

                const item =
                    document.createElement("div");

                item.className =
                    "modal-point";

                item.textContent =
                    "✓ " + point;

                modalPoints.appendChild(item);

            });

        }

        if (modalContact) {

            const contactText =
                modalContact.getAttribute(
                    "data-" + currentLanguage
                );

            if (contactText) {

                modalContact.textContent =
                    contactText;

            }

        }

    }


    function openService(serviceKey) {

        if (!services[serviceKey]) return;

        activeService =
            serviceKey;

        renderModal(serviceKey);

        if (modal) {

            modal.classList.add("active");

        }

        document.body.style.overflow =
            "hidden";

    }


    function updateModalLanguage() {

        if (!activeService) return;

        renderModal(activeService);

    }


    serviceCards.forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                const serviceKey =
                    card.getAttribute(
                        "data-service"
                    );

                openService(serviceKey);

            }
        );

    });


    function closeModal() {

        if (modal) {

            modal.classList.remove("active");

        }

        document.body.style.overflow = "";

        activeService = null;

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    const modalBackdrop =
        document.querySelector(
            ".modal-backdrop"
        );

    if (modalBackdrop) {

        modalBackdrop.addEventListener(
            "click",
            closeModal
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                modal &&
                modal.classList.contains("active")
            ) {

                closeModal();

            }

        }
    );


    if (modalContact) {

        modalContact.addEventListener(
            "click",
            function () {

                closeModal();

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
                            "#B42318";

                    }

                    return;

                }


                if (formMessage) {

                    formMessage.textContent =
                        currentLanguage === "ar"
                            ? "تم استلام طلبك بنجاح. سنتواصل معك قريبًا."
                            : "Your request has been received. We will be in touch shortly.";

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
                    "0 8px 30px rgba(11,36,27,.12)";

            } else {

                navbar.style.boxShadow =
                    "none";

            }

        }
    );


    /* =========================================
       INITIALIZE
    ========================================= */

    updateLanguage();

});
