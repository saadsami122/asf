document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       LANGUAGE
    ========================================= */

    const languageBtn =
        document.getElementById("languageBtn");

    let currentLanguage =
        localStorage.getItem("haseefLanguage") || "ar";


    function updateLanguage() {

        document.documentElement.lang =
            currentLanguage;

        document.documentElement.dir =
            currentLanguage === "ar"
                ? "rtl"
                : "ltr";

        document.body.classList.toggle(
            "en",
            currentLanguage === "en"
        );


        document
            .querySelectorAll("[data-ar][data-en]")
            .forEach(function (element) {

                const arabic =
                    element.getAttribute("data-ar");

                const english =
                    element.getAttribute("data-en");

                element.innerHTML =
                    currentLanguage === "ar"
                        ? arabic
                        : english;

            });


        if (languageBtn) {

            languageBtn.textContent =
                currentLanguage === "ar"
                    ? "EN"
                    : "AR";

        }


        /* FORM PLACEHOLDERS */

        const placeholders = {

            name: {
                ar: "اسمك",
                en: "Your name"
            },

            company: {
                ar: "اسم الشركة",
                en: "Company name"
            },

            country: {
                ar: "الدولة",
                en: "Country"
            },

            message: {
                ar: "أخبرنا عن فرصتك أو احتياجك...",
                en: "Tell us about your opportunity..."
            }

        };


        Object.keys(placeholders).forEach(function (id) {

            const element =
                document.getElementById(id);

            if (!element) return;

            element.placeholder =
                placeholders[id][currentLanguage];

        });


        /* SELECT */

        document
            .querySelectorAll("#interest option")
            .forEach(function (option) {

                const arabic =
                    option.getAttribute("data-ar");

                const english =
                    option.getAttribute("data-en");

                if (arabic && english) {

                    option.textContent =
                        currentLanguage === "ar"
                            ? arabic
                            : english;

                }

            });


        localStorage.setItem(
            "haseefLanguage",
            currentLanguage
        );


        /* Update modal if it is open */

        if (
            serviceModal &&
            serviceModal.classList.contains("active") &&
            activeService
        ) {

            openService(activeService);

        }

    }


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
       SERVICE DATA
    ========================================= */

    const serviceData = {

        "market-entry": {

            number: "01",

            title: {
                ar: "دخول الأسواق",
                en: "Market Entry"
            },

            description: {
                ar: "نساعد الشركات على تقييم الأسواق الجديدة وتحديد أفضل طريقة للدخول إليها، من خلال دراسة جاذبية السوق والمنافسة والعملاء والبيئة التجارية.",
                en: "We help companies evaluate new markets and determine the right way to enter them through a structured assessment of market attractiveness, competition, customers and commercial dynamics."
            },

            details: {
                ar: `
                    <p>تشمل المنهجية:</p>
                    <ul>
                        <li>تقييم جاذبية السوق وحجمه وإمكانات النمو.</li>
                        <li>تحليل المنافسين واللاعبين الرئيسيين.</li>
                        <li>فهم العملاء والطلب والسلوك الشرائي.</li>
                        <li>تحديد نموذج الدخول الأنسب.</li>
                        <li>بناء خارطة طريق عملية للتوسع.</li>
                    </ul>
                `,

                en: `
                    <p>Our approach includes:</p>
                    <ul>
                        <li>Market attractiveness, size and growth potential.</li>
                        <li>Competitive landscape assessment.</li>
                        <li>Customer demand and purchasing behavior.</li>
                        <li>Assessment of suitable entry models.</li>
                        <li>A practical international expansion roadmap.</li>
                    </ul>
                `
            }

        },


        "market-intelligence": {

            number: "02",

            title: {
                ar: "ذكاء الأسواق",
                en: "Market Intelligence"
            },

            description: {
                ar: "نحوّل البيانات والمعلومات المتفرقة إلى فهم واضح للسوق يساعد الإدارة والمستثمرين على اتخاذ قرارات أكثر ثقة.",
                en: "We transform fragmented market information into clear intelligence that helps executives and investors make more informed decisions."
            },

            details: {
                ar: `
                    <p>يمكن أن تشمل الخدمة:</p>
                    <ul>
                        <li>حجم السوق ومعدلات النمو.</li>
                        <li>تحليل المنافسة واللاعبين الرئيسيين.</li>
                        <li>تحليل العملاء والشرائح المستهدفة.</li>
                        <li>دراسة الاتجاهات والتحولات في القطاع.</li>
                        <li>تحديد الفرص والمخاطر.</li>
                    </ul>
                `,

                en: `
                    <p>This may include:</p>
                    <ul>
                        <li>Market sizing and growth rates.</li>
                        <li>Competitive landscape and key players.</li>
                        <li>Customer and target segment analysis.</li>
                        <li>Industry trends and structural shifts.</li>
                        <li>Identification of opportunities and risks.</li>
                    </ul>
                `
            }

        },


        "growth-strategy": {

            number: "03",

            title: {
                ar: "استراتيجية النمو",
                en: "Growth Strategy"
            },

            description: {
                ar: "نساعد الشركات على تحديد محركات النمو وبناء استراتيجية واضحة تربط الفرص السوقية بالأولويات التجارية.",
                en: "We help companies identify growth drivers and build clear strategies that connect market opportunities with commercial priorities."
            },

            details: {
                ar: `
                    <p>نركز على:</p>
                    <ul>
                        <li>تحديد محركات النمو الرئيسية.</li>
                        <li>تحديد الأسواق والشرائح ذات الأولوية.</li>
                        <li>تقييم فرص المنتجات والخدمات.</li>
                        <li>بناء أولويات استراتيجية واضحة.</li>
                        <li>تحويل الاستراتيجية إلى مبادرات قابلة للتنفيذ.</li>
                    </ul>
                `,

                en: `
                    <p>Our focus includes:</p>
                    <ul>
                        <li>Identifying key growth drivers.</li>
                        <li>Prioritizing markets and customer segments.</li>
                        <li>Evaluating product and service opportunities.</li>
                        <li>Building clear strategic priorities.</li>
                        <li>Translating strategy into actionable initiatives.</li>
                    </ul>
                `
            }

        },


        "investment-advisory": {

            number: "04",

            title: {
                ar: "الاستشارات الاستثمارية",
                en: "Investment Advisory"
            },

            description: {
                ar: "نوفر للمستثمرين رؤى مستقلة تساعدهم على فهم الفرص والأسواق وتقييم الإمكانات التجارية قبل اتخاذ قراراتهم.",
                en: "We provide investors with independent insights to understand markets, opportunities and commercial potential before making investment decisions."
            },

            details: {
                ar: `
                    <p>يمكن أن تشمل الاستشارات:</p>
                    <ul>
                        <li>تقييم الفرص الاستثمارية.</li>
                        <li>تحليل الأسواق والقطاعات.</li>
                        <li>دراسة البيئة التنافسية.</li>
                        <li>تقييم الإمكانات التجارية.</li>
                        <li>تحديد المخاطر والافتراضات الرئيسية.</li>
                    </ul>
                `,

                en: `
                    <p>Advisory work may include:</p>
                    <ul>
                        <li>Investment opportunity assessment.</li>
                        <li>Market and sector analysis.</li>
                        <li>Competitive landscape assessment.</li>
                        <li>Commercial potential evaluation.</li>
                        <li>Identification of key risks and assumptions.</li>
                    </ul>
                `
            }

        },


        "commercial-due-diligence": {

            number: "05",

            title: {
                ar: "العناية الواجبة التجارية",
                en: "Commercial Due Diligence"
            },

            description: {
                ar: "تحليل مستقل للسوق والعملاء والمنافسين والإمكانات التجارية لمساعدة المستثمرين والشركات على اتخاذ قرارات مدروسة.",
                en: "Independent analysis of markets, customers, competitors and commercial potential to support informed investment and strategic decisions."
            },

            details: {
                ar: `
                    <p>نركز على:</p>
                    <ul>
                        <li>تحليل السوق والطلب.</li>
                        <li>فهم العملاء والشرائح.</li>
                        <li>تحليل المنافسة.</li>
                        <li>اختبار افتراضات النمو.</li>
                        <li>تقييم الإمكانات التجارية المستقبلية.</li>
                    </ul>
                `,

                en: `
                    <p>We assess:</p>
                    <ul>
                        <li>Market and demand dynamics.</li>
                        <li>Customer and segment understanding.</li>
                        <li>Competitive positioning.</li>
                        <li>Key growth assumptions.</li>
                        <li>Future commercial potential.</li>
                    </ul>
                `
            }

        },


        "international-partnerships": {

            number: "06",

            title: {
                ar: "الشراكات الدولية",
                en: "International Partnerships"
            },

            description: {
                ar: "ندعم الشركات في استكشاف وتطوير الشراكات التجارية الدولية التي يمكن أن تفتح فرصًا جديدة للنمو والتوسع.",
                en: "We support companies in identifying and developing international partnerships that can unlock new opportunities for growth and expansion."
            },

            details: {
                ar: `
                    <p>يشمل الدعم:</p>
                    <ul>
                        <li>تحديد فرص الشراكة المحتملة.</li>
                        <li>دراسة ملاءمة الشركاء.</li>
                        <li>تحليل القيمة التجارية للشراكة.</li>
                        <li>دعم استراتيجية التواصل والتفاوض.</li>
                        <li>تطوير نماذج التعاون المناسبة.</li>
                    </ul>
                `,

                en: `
                    <p>Support may include:</p>
                    <ul>
                        <li>Identifying potential partnership opportunities.</li>
                        <li>Partner-fit assessment.</li>
                        <li>Commercial value analysis.</li>
                        <li>Engagement and negotiation strategy.</li>
                        <li>Development of collaboration models.</li>
                    </ul>
                `
            }

        }

    };


    /* =========================================
       SERVICE MODAL
    ========================================= */

    const serviceModal =
        document.getElementById("serviceModal");

    const closeServiceModal =
        document.getElementById("closeServiceModal");

    const modalNumber =
        document.getElementById("modalNumber");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalDetails =
        document.getElementById("modalDetails");

    const modalCTA =
        document.getElementById("modalCTA");

    let activeService = null;


    function openService(serviceId) {

        const data =
            serviceData[serviceId];

        if (!data) return;

        activeService = serviceId;


        modalNumber.textContent =
            data.number;

        modalTitle.textContent =
            data.title[currentLanguage];

        modalDescription.textContent =
            data.description[currentLanguage];

        modalDetails.innerHTML =
            data.details[currentLanguage];

        modalCTA.textContent =
            currentLanguage === "ar"
                ? "اطلب استشارة"
                : "Request Advisory";


        serviceModal.classList.add("active");

        document.body.style.overflow =
            "hidden";

    }


    function closeService() {

        serviceModal.classList.remove("active");

        document.body.style.overflow = "";

        activeService = null;

    }


    document
        .querySelectorAll(".service-expandable")
        .forEach(function (service) {

            service.addEventListener(
                "click",
                function () {

                    const serviceId =
                        service.getAttribute("data-service");

                    openService(serviceId);

                }
            );

        });


    if (closeServiceModal) {

        closeServiceModal.addEventListener(
            "click",
            closeService
        );

    }


    const modalOverlay =
        document.querySelector(
            ".service-modal-overlay"
        );

    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            closeService
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                serviceModal.classList.contains("active")
            ) {

                closeService();

            }

        }
    );


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

                    formMessage.textContent =
                        currentLanguage === "ar"
                            ? "يرجى تعبئة الاسم والبريد الإلكتروني."
                            : "Please enter your name and email.";

                    formMessage.style.color =
                        "#b42318";

                    return;

                }


                formMessage.textContent =
                    currentLanguage === "ar"
                        ? "تم استلام طلبك بنجاح."
                        : "Your request has been received.";

                formMessage.style.color =
                    "#087443";

                form.reset();

            }
        );

    }


    /* =========================================
       NAVBAR
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
       INITIALIZE
    ========================================= */

    updateLanguage();

});
