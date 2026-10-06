/* =========================
   LANGUAGE SWITCHER
========================= */

const languageBtn =
    document.getElementById("languageBtn");

let language = "ar";


languageBtn.addEventListener("click", () => {

    language =
        language === "ar"
            ? "en"
            : "ar";


    document.documentElement.lang = language;

    document.documentElement.dir =
        language === "ar"
            ? "rtl"
            : "ltr";

    document.body.classList.toggle(
        "en",
        language === "en"
    );


    languageBtn.textContent =
        language === "ar"
            ? "EN"
            : "AR";


    document
        .querySelectorAll("[data-ar]")
        .forEach(element => {

            const arabic =
                element.getAttribute("data-ar");

            const english =
                element.getAttribute("data-en");

            element.textContent =
                language === "ar"
                    ? arabic
                    : english;

        });

});


/* =========================
   CONTACT FORM
========================= */

const form =
    document.getElementById("contactForm");

const message =
    document.getElementById("formMessage");


form.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document
            .getElementById("name")
            .value
            .trim();

    const email =
        document
            .getElementById("email")
            .value
            .trim();


    if (!name || !email) {

        message.style.color = "#a33a3a";

        message.textContent =
            language === "ar"
                ? "فضلاً أدخل الاسم والبريد الإلكتروني."
                : "Please enter your name and email.";

        return;
    }


    message.style.color = "#0b332b";

    message.textContent =
        language === "ar"
            ? "تم استلام طلبك بنجاح. سيتواصل معك فريق حصيف قريبًا."
            : "Your request has been received. The HASEEF team will contact you shortly.";


    form.reset();

});


/* =========================
   NAVBAR SHADOW
========================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.08)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

});


/* =========================
   REVEAL ANIMATION
========================= */

const elements =
    document.querySelectorAll(
        ".service, .approach-card, .about-grid, .contact-grid"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


elements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});


/* =========================
   SMOOTH SCROLL
========================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", event => {

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });
