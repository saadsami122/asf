document.addEventListener("DOMContentLoaded", () => {

    const languageBtn = document.getElementById("languageBtn");

    if (!languageBtn) {
        console.error("HASEEF: languageBtn not found");
        return;
    }


    /* =========================================
       LANGUAGE
    ========================================= */

    let currentLanguage =
        localStorage.getItem("haseefLanguage") || "ar";


    function setLanguage(language) {

        currentLanguage = language;


        // اتجاه الصفحة
        document.documentElement.setAttribute(
            "lang",
            currentLanguage
        );

        document.documentElement.setAttribute(
            "dir",
            currentLanguage === "ar" ? "rtl" : "ltr"
        );


        // كلاس للإنجليزية
        document.body.classList.toggle(
            "en",
            currentLanguage === "en"
        );


        /*
         * تغيير كل عنصر يحتوي على:
         *
         * data-ar="النص العربي"
         * data-en="English text"
         */

        const elements =
            document.querySelectorAll(
                "[data-ar][data-en]"
            );


        elements.forEach((element) => {

            const arabic =
                element.getAttribute("data-ar");

            const english =
                element.getAttribute("data-en");


            if (currentLanguage === "ar") {

                element.textContent = arabic;

            } else {

                element.textContent = english;

            }

        });


        // زر اللغة
        languageBtn.textContent =
            currentLanguage === "ar"
                ? "EN"
                : "AR";


        // حفظ الاختيار
        localStorage.setItem(
            "haseefLanguage",
            currentLanguage
        );

    }


    /* =========================================
       LANGUAGE BUTTON
    ========================================= */

    languageBtn.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            event.stopPropagation();


            const newLanguage =
                currentLanguage === "ar"
                    ? "en"
                    : "ar";


            setLanguage(newLanguage);

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
            (event) => {

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
        () => {

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
       START WEBSITE
    ========================================= */

    setLanguage(currentLanguage);

});
