:root {

    --green: #082d26;

    --dark-green: #041b17;

    --gold: #c4a66a;

    --cream: #f3f0e8;

    --white: #ffffff;

    --black: #111614;

    --gray: #707875;

    --line: #d9ddd8;

    --container: 1220px;
}


* {

    margin: 0;

    padding: 0;

    box-sizing: border-box;

}


html {

    scroll-behavior: smooth;

}


body {

    background: var(--cream);

    color: var(--black);

    font-family:
        "IBM Plex Sans Arabic",
        sans-serif;

    line-height: 1.7;

}


body.en {

    font-family:
        "Inter",
        sans-serif;

    direction: ltr;

}


a {

    color: inherit;

    text-decoration: none;

}


button,
input,
textarea,
select {

    font: inherit;

}


.container {

    width: min(90%, var(--container));

    margin: auto;

}


/* =========================
   NAVBAR
========================= */

.navbar {

    position: fixed;

    top: 0;

    left: 0;

    width: 100%;

    z-index: 1000;

    background:
        rgba(243,240,232,.94);

    backdrop-filter:
        blur(18px);

    border-bottom:
        1px solid rgba(0,0,0,.06);

}


.nav-container {

    min-height: 90px;

    display: flex;

    align-items: center;

    justify-content: space-between;

}


.logo {

    display: flex;

    align-items: center;

    gap: 13px;

}


.logo-ar {

    font-size: 34px;

    line-height: 1;

    font-weight: 700;

    color: var(--green);

}


.logo-divider {

    width: 1px;

    height: 28px;

    background: var(--gold);

}


.logo-en {

    font-family: "Inter";

    font-size: 11px;

    letter-spacing: 4px;

    color: var(--gold);

}


.nav-links {

    display: flex;

    align-items: center;

    gap: 28px;

}


.nav-links a {

    font-size: 13px;

    transition: .25s;

}


.nav-links a:hover {

    color: var(--gold);

}


.nav-actions {

    display: flex;

    align-items: center;

    gap: 12px;

}


#languageBtn {

    padding: 8px 12px;

    background: transparent;

    border: 1px solid var(--green);

    color: var(--green);

    cursor: pointer;

}


.nav-cta {

    padding: 11px 18px;

    background: var(--green);

    color: white;

    font-size: 12px;

}


/* =========================
   HERO
========================= */

.hero {

    position: relative;

    min-height: 100vh;

    display: flex;

    align-items: center;

    color: white;

    overflow: hidden;

}


.hero-image {

    position: absolute;

    inset: 0;

    background-image:
        url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=90");

    background-size: cover;

    background-position: center;

}


.hero-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(3,25,21,.97),
            rgba(3,25,21,.75),
            rgba(3,25,21,.30)
        );

}


.hero-content {

    position: relative;

    z-index: 2;

    padding-top: 110px;

}


.hero-brand {

    display: flex;

    align-items: baseline;

    gap: 25px;

    margin-bottom: 30px;

}


.hero-ar {

    font-size:
        clamp(70px,10vw,135px);

    line-height: .8;

    font-weight: 700;

}


.hero-en {

    font-family: "Inter";

    color: var(--gold);

    font-size:
        clamp(23px,3vw,43px);

    letter-spacing: 8px;

}


.hero-label {

    color: var(--gold);

    font-family: "Inter";

    font-size: 10px;

    letter-spacing: 2px;

    margin-bottom: 20px;

}


.hero-label span {

    margin: 0 7px;

}


.hero h1 {

    max-width: 1000px;

    font-size:
        clamp(44px,6vw,78px);

    line-height: 1.05;

    font-weight: 500;

}


.hero h1 span {

    display: block;

    color: #d3ba83;

}


.hero p {

    max-width: 720px;

    color:
        rgba(255,255,255,.72);

    font-size: 17px;

    margin-top: 30px;

}


.hero-buttons {

    display: flex;

    gap: 13px;

    margin-top: 38px;

}


.btn {

    padding: 15px 25px;

    font-size: 13px;

    transition: .25s;

}


.btn-primary {

    background: white;

    color: var(--green);

}


.btn-primary:hover {

    background: var(--gold);

    color: white;

    transform:
        translateY(-3px);

}


.btn-secondary {

    border:
        1px solid rgba(255,255,255,.5);

    color: white;

}


.btn-secondary:hover {

    background: white;

    color: var(--green);

}


.hero-meta {

    display: flex;

    gap: 30px;

    margin-top: 65px;

    color:
        rgba(255,255,255,.42);

    font-family: "Inter";

    font-size: 9px;

    letter-spacing: 2px;

}


/* =========================
   SECTIONS
========================= */

.section {

    padding: 130px 0;

}


.section-label {

    display: flex;

    align-items: center;

    gap: 18px;

    margin-bottom: 70px;

    font-family: "Inter";

    font-size: 10px;

    letter-spacing: 1.5px;

}


.section-label span {

    color: var(--gold);

}


/* =========================
   ABOUT
========================= */

.about {

    background: white;

}


.about-grid {

    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 110px;

}


.about-title h2 {

    font-size:
        clamp(45px,5vw,72px);

    line-height: 1.05;

    font-weight: 500;

}


.about-title em {

    display: block;

    color: var(--green);

    font-style: normal;

}


.about-text {

    color: var(--gray);

    font-size: 16px;

}


.about-text p {

    margin-bottom: 25px;

}


.stats {

    margin-top: 45px;

    border-top:
        1px solid var(--line);

}


.stats div {

    display: flex;

    gap: 30px;

    padding: 17px 0;

    border-bottom:
        1px solid var(--line);

}


.stats strong {

    color: var(--gold);

    font-family: "Inter";

    font-size: 12px;

}


.stats span {

    color: var(--black);

    font-family: "Inter";

    font-size: 13px;

}


/* =========================
   IMAGE
========================= */

.image-section {

    position: relative;

    height: 620px;

    display: flex;

    align-items: center;

    overflow: hidden;

}


.image-section-bg {

    position: absolute;

    inset: 0;

    background-image:
        url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=90");

    background-size: cover;

    background-position: center;

}


.image-section-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(3,25,21,.94),
            rgba(3,25,21,.25)
        );

}


.image-section-content {

    position: relative;

    z-index: 2;

    color: white;

}


.image-section-content span {

    color: var(--gold);

    font-family: "Inter";

    font-size: 10px;

    letter-spacing: 2px;

}


.image-section-content h2 {

    font-family: "Inter";

    font-size:
        clamp(50px,7vw,95px);

    line-height: .95;

    font-weight: 500;

    margin-top: 25px;

}


/* =========================
   SERVICES
========================= */

.services-intro {

    display: flex;

    justify-content: space-between;

    gap: 80px;

    margin-bottom: 60px;

}


.services-intro h2 {

    font-size:
        clamp(43px,5vw,68px);

    line-height: 1.05;

    font-weight: 500;

}


.services-intro h2 span {

    color: var(--green);

    display: block;

}


.services-intro p {

    max-width: 410px;

    color: var(--gray);

}


.services-grid {

    display: grid;

    grid-template-columns:
        repeat(3,1fr);

    gap: 1px;

    background: var(--line);

    border: 1px solid var(--line);

}


.service-card {

    position: relative;

    min-height: 330px;

    padding: 38px;

    background: var(--cream);

    transition: .3s;

}


.service-card:hover {

    color: white;

    background: var(--green);

    transform:
        translateY(-5px);

}


.service-card small {

    color: var(--gold);

    font-family: "Inter";

    font-size: 10px;

}


.service-card h3 {

    font-family: "Inter";

    font-size: 23px;

    margin-top: 55px;

}


.service-card p {

    max-width: 300px;

    color: var(--gray);

    font-family: "Inter";

    font-size: 12px;

    margin-top: 15px;

}


.service-card:hover p {

    color:
        rgba(255,255,255,.65);

}


.service-card > span {

    position: absolute;

    right: 30px;

    bottom: 28px;

    color: var(--gold);

    font-size: 21px;

}


/* =========================
   MARKETS
========================= */

.markets {

    padding: 130px 0;

    color: white;

    background:

        linear-gradient(
            120deg,
            rgba(3,27,22,.97),
            rgba(8,51,43,.85)
        ),

        url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=90");

    background-size: cover;

    background-position: center;

}


.light {

    color: white;

}


.markets-grid {

    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 100px;

    align-items: center;

}


.gold-label {

    display: inline-block;

    color: var(--gold);

    font-family: "Inter";

    font-size: 10px;

    letter-spacing: 2px;

    margin-bottom: 22px;

}


.markets h2 {

    font-size:
        clamp(45px,5vw,72px);

    line-height: 1.05;

    font-weight: 500;

}


.markets h2 span {

    display: block;

    color: var(--gold);

}


.markets-grid p {

    max-width: 480px;

    color:
        rgba(255,255,255,.65);

}


.market-list {

    display: grid;

    grid-template-columns:
        repeat(2,1fr);

    margin-top: 40px;

    border-top:
        1px solid rgba(255,255,255,.15);

}


.market-list span {

    padding: 17px 0;

    border-bottom:
        1px solid rgba(255,255,255,.15);

    font-family: "Inter";

    color:
        rgba(255,255,255,.75);

}


/* =========================
   APPROACH
========================= */

.approach {

    background: white;

}


.approach-intro {

    max-width: 900px;

    margin-bottom: 65px;

}


.approach-intro h2 {

    font-size:
        clamp(42px,5vw,68px);

    line-height: 1.06;

    font-weight: 500;

}


.approach-intro h2 span {

    color: var(--green);

}


.approach-grid {

    display: grid;

    grid-template-columns:
        repeat(4,1fr);

    border: 1px solid var(--line);

}


.approach-card {

    min-height: 320px;

    padding: 35px;

    border-left:
        1px solid var(--line);

}


.approach-card:last-child {

    border-left: none;

}


.approach-card small {

    color: var(--gold);

    font-family: "Inter";

    font-size: 10px;

}


.approach-card h3 {

    font-family: "Inter";

    font-size: 27px;

    margin-top: 65px;

}


.approach-card p {

    color: var(--gray);

    font-family: "Inter";

    font-size: 12px;

    margin-top: 15px;

}


/* =========================
   PARTNERS
========================= */

.partners {

    padding: 140px 0;

    text-align: center;

    background: var(--cream);

}


.partners-container {

    max-width: 1250px;

    margin: auto;

}


.partners h2 {

    font-size:
        clamp(48px,6vw,78px);

    line-height: 1.05;

    font-weight: 500;

}


.partners h2 span {

    display: block;

    color: var(--green);

}


.partners-intro {

    max-width: 650px;

    margin:
        25px auto 0;

    color: var(--gray);

    font-size: 16px;

}


/* PARTNER GRID */

.partner-logos {

    display: grid;

    grid-template-columns:
        repeat(3,1fr);

    gap: 25px;

    max-width: 1050px;

    margin:
        70px auto 35px;

}


/* PARTNER CARD */

.partner-card {

    height: 210px;

    background: white;

    border:
        1px solid #ddd9d0;

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 40px;

    transition:
        transform .35s ease,
        box-shadow .35s ease,
        border-color .35s ease;

}


.partner-card:hover {

    transform:
        translateY(-10px);

    border-color:
        var(--gold);

    box-shadow:
        0 25px 55px rgba(0,0,0,.10);

}


/* LOGO IMAGE */

.partner-card img {

    display: block;

    width: auto;

    max-width: 230px;

    max-height: 90px;

    object-fit: contain;

}


.partner-note {

    margin-top: 25px;

    color: #999;

    font-family: "Inter";

    font-size: 10px;

    letter-spacing: .5px;

}


/* =========================
   CONTACT
========================= */

.contact {

    background: white;

}


.contact-grid {

    display: grid;

    grid-template-columns:
        .85fr 1.15fr;

    gap: 100px;

}


.contact-copy h2 {

    font-size:
        clamp(43px,5vw,68px);

    line-height: 1.05;

    font-weight: 500;

}


.contact-copy h2 span {

    display: block;

    color: var(--green);

}


.contact-copy p {

    max-width: 430px;

    color: var(--gray);

    margin-top: 25px;

}


#contactForm {

    padding: 45px;

    background: var(--cream);

}


.form-row {

    display: grid;

    grid-template-columns:
        repeat(2,1fr);

    gap: 20px;

}


.field {

    margin-bottom: 22px;

}


.field label {

    display: block;

    font-size: 11px;

    margin-bottom: 7px;

}


.field input,
.field select,
.field textarea {

    width: 100%;

    padding: 14px;

    border:
        1px solid var(--line);

    background: white;

    outline: none;

}


.field input:focus,
.field select:focus,
.field textarea:focus {

    border-color:
        var(--green);

}


.field textarea {

    resize: vertical;

}


#contactForm button {

    width: 100%;

    padding: 17px;

    border: none;

    background: var(--green);

    color: white;

    cursor: pointer;

    display: flex;

    justify-content: space-between;

    align-items: center;

}


#contactForm button:hover {

    background: var(--dark-green);

}


#formMessage {

    margin-top: 15px;

    font-size: 12px;

}


/* =========================
   FOOTER
========================= */

footer {

    padding:
        70px 0 25px;

    background: #061f1a;

    color: white;

}


.footer-grid {

    display: grid;

    grid-template-columns:
        2fr 1fr 1fr;

    gap: 80px;

    padding-bottom: 70px;

}


.footer-brand strong {

    display: block;

    font-size: 48px;

    line-height: 1;

}


.footer-brand span {

    display: block;

    margin-top: 8px;

    color: var(--gold);

    font-family: "Inter";

    font-size: 13px;

    letter-spacing: 5px;

}


.footer-brand p {

    max-width: 340px;

    color:
        rgba(255,255,255,.45);

    font-family: "Inter";

    font-size: 11px;

    margin-top: 20px;

}


.footer-column {

    display: flex;

    flex-direction: column;

    gap: 11px;

}


.footer-column span {

    color: var(--gold);

    font-family: "Inter";

    font-size: 9px;

    letter-spacing: 2px;

    margin-bottom: 5px;

}


.footer-column a {

    color:
        rgba(255,255,255,.65);

    font-family: "Inter";

    font-size: 11px;

}


.footer-bottom {

    padding-top: 22px;

    border-top:
        1px solid rgba(255,255,255,.1);

    display: flex;

    justify-content: space-between;

    color:
        rgba(255,255,255,.3);

    font-family: "Inter";

    font-size: 9px;

}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 950px) {


    .nav-links {

        display: none;

    }


    .nav-cta {

        display: none;

    }


    .about-grid,
    .markets-grid,
    .contact-grid {

        grid-template-columns: 1fr;

        gap: 60px;

    }


    .services-intro {

        flex-direction: column;

        gap: 30px;

    }


    .services-grid {

        grid-template-columns:
            repeat(2,1fr);

    }


    .approach-grid {

        grid-template-columns:
            repeat(2,1fr);

    }


    .approach-card {

        border-bottom:
            1px solid var(--line);

    }


    .partner-logos {

        grid-template-columns: 1fr;

        max-width: 500px;

    }


    .footer-grid {

        grid-template-columns:
            1fr 1fr;

    }


    .footer-brand {

        grid-column:
            1 / -1;

    }

}


@media (max-width: 600px) {


    .nav-container {

        min-height: 76px;

    }


    .logo-ar {

        font-size: 27px;

    }


    .logo-en {

        font-size: 9px;

        letter-spacing: 2px;

    }


    .hero-content {

        padding-top: 130px;

    }


    .hero-brand {

        flex-direction: column;

        align-items: flex-start;

        gap: 12px;

    }


    .hero-ar {

        font-size: 75px;

    }


    .hero-en {

        font-size: 20px;

        letter-spacing: 5px;

    }


    .hero h1 {

        font-size: 45px;

    }


    .hero-buttons {

        flex-direction: column;

    }


    .btn {

        text-align: center;

    }


    .hero-meta {

        flex-wrap: wrap;

        gap: 15px;

    }


    .services-grid {

        grid-template-columns: 1fr;

    }


    .approach-grid {

        grid-template-columns: 1fr;

    }


    .approach-card {

        border-left: none;

    }


    .partner-logos {

        grid-template-columns: 1fr;

        max-width: 330px;

    }


    .partner-card {

        height: 160px;

    }


    .partner-card img {

        max-width: 210px;

        max-height: 70px;

    }


    .form-row {

        grid-template-columns: 1fr;

    }


    #contactForm {

        padding: 25px;

    }


    .footer-grid {

        grid-template-columns: 1fr;

    }


    .footer-brand {

        grid-column: auto;

    }


    .footer-bottom {

        flex-direction: column;

        gap: 10px;

    }

}
