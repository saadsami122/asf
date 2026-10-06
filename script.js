document.addEventListener("DOMContentLoaded", function () {

    const languageBtn = document.getElementById("languageBtn");

    let currentLanguage =
        localStorage.getItem("haseefLanguage") || "ar";


    function updateLanguage() {

        // اتجاه الموقع
        document.documentElement.lang = currentLanguage;

        document.documentElement.dir =
            currentLanguage === "ar" ? "rtl" : "ltr";

        document.body.classList.toggle(
            "en",
            currentLanguage === "en"
        );


        // تغيير النصوص
        document.querySelectorAll(
            "[data-ar], [data-en]"
        ).forEach(function (element) {

            const text =
                element.getAttribute(
                    "data-" + currentLanguage
                );

            if (text !== null) {
                element.textContent = text;
            }

        });


        // تغيير زر اللغة
        if (languageBtn) {

            languageBtn.textContent =
                currentLanguage === "ar"
                    ? "EN"
                    : "AR";

        }


        // حفظ اللغة
        localStorage.setItem(
            "haseefLanguage",
            currentLanguage
        );

    }


    // الضغط على زر اللغة
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


    // =========================
    // CONTACT FORM
    // =========================

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
                    document.getElementById("name")?.value.trim();

                const email =
                    document.getElementById("email")?.value.trim();


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


    // =========================
    // NAVBAR SHADOW
    // =========================

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


    // تشغيل اللغة عند فتح الموقع
    updateLanguage();

});
