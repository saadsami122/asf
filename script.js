document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       LANGUAGE
    ========================= */

    const languageBtn =
        document.getElementById("languageBtn");


    let currentLanguage = "ar";


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


        document.querySelectorAll(
            "[data-ar][data-en]"
        ).forEach(function (element) {

            element.textContent =
                element.getAttribute(
                    "data-" + currentLanguage
                );

        });


        languageBtn.textContent =
            currentLanguage === "ar"
                ? "EN"
                : "AR";

    }


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


    /* =========================
       CONTACT FORM
    ========================= */

    const form =
        document.getElementById("contactForm");


    const message =
        document.getElementById("formMessage");


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value;


            const email =
                document.getElementById("email").value;


            if (!name || !email) {

                message.textContent =
                    currentLanguage === "ar"
                        ? "يرجى تعبئة الاسم والبريد الإلكتروني."
                        : "Please enter your name and email.";

                message.style.color =
                    "#b42318";

                return;

            }


            message.textContent =
                currentLanguage === "ar"
                    ? "تم استلام طلبك بنجاح. سيتواصل معك فريق حصيف قريبًا."
                    : "Your request has been received. The HASEEF team will contact you shortly.";


            message.style.color =
                "#087443";


            form.reset();

        }
    );


    /* =========================
       SCROLL NAVBAR
    ========================= */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 30) {

                navbar.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,.06)";

            } else {

                navbar.style.boxShadow =
                    "none";

            }

        }
    );


    updateLanguage();

});
