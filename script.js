/* ==================================================
   AGRINHO V2 - PREMIUM SCRIPT
================================================== */

/* ==================================================
   ELEMENTOS
================================================== */

const header = document.getElementById("header");
const nav = document.getElementById("nav");
const mobileBtn = document.getElementById("mobile-btn");
const backToTop = document.getElementById("backToTop");
const progressBar = document.querySelector(".scroll-progress");

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

/* ==================================================
   HEADER
================================================== */

function handleHeader() {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleHeader);

/* ==================================================
   PROGRESS BAR
================================================== */

function updateProgressBar() {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + "%";

}

window.addEventListener("scroll", updateProgressBar);

/* ==================================================
   MOBILE MENU
================================================== */

if (mobileBtn) {

    mobileBtn.addEventListener("click", () => {

        nav.classList.toggle("active");
        mobileBtn.classList.toggle("active");

    });

}

document.addEventListener("click", (event) => {

    const clickedNav =
        nav.contains(event.target);

    const clickedBtn =
        mobileBtn.contains(event.target);

    if (
        !clickedNav &&
        !clickedBtn &&
        nav.classList.contains("active")
    ) {

        nav.classList.remove("active");
        mobileBtn.classList.remove("active");

    }

});

/* ==================================================
   HAMBURGUER ANIMADO
================================================== */

function animateHamburger() {

    if (!mobileBtn) return;

    const spans =
        mobileBtn.querySelectorAll("span");

    if (mobileBtn.classList.contains("active")) {

        spans[0].style.transform =
            "translateY(9px) rotate(45deg)";

        spans[1].style.opacity = "0";

        spans[2].style.transform =
            "translateY(-9px) rotate(-45deg)";

    } else {

        spans[0].style.transform = "";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "";

    }

}

mobileBtn?.addEventListener(
    "click",
    animateHamburger
);

/* ==================================================
   SMOOTH SCROLL
================================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (!target) return;

        const offset = 80;

        window.scrollTo({

            top:
                target.offsetTop -
                offset,

            behavior: "smooth"

        });

        nav.classList.remove("active");
        mobileBtn.classList.remove("active");

    });

});

/* ==================================================
   ACTIVE MENU
================================================== */

function activeMenu() {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active-link");

        }

    });

}

window.addEventListener(
    "scroll",
    activeMenu
);

/* ==================================================
   BACK TO TOP
================================================== */

function handleBackToTop() {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}

window.addEventListener(
    "scroll",
    handleBackToTop
);

backToTop?.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    }
);

/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "active"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );

revealElements.forEach(element => {

    revealObserver.observe(element);

});

/* ==================================================
   COUNTER ANIMATION
================================================== */

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;

                const counter =
                    entry.target;

                const target =
                    parseInt(
                        counter.dataset.target
                    );

                const duration = 2000;

                let start = 0;

                const increment =
                    target /
                    (duration / 16);

                function updateCounter() {

                    start += increment;

                    if (start < target) {

                        counter.textContent =
                            Math.floor(start);

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent =
                            target;

                    }

                }

                updateCounter();

                counterObserver.unobserve(
                    counter
                );

            });

        },

        {
            threshold: 0.5
        }

    );

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* ==================================================
   PARALLAX HERO
================================================== */

const hero =
    document.querySelector(".hero");

function heroParallax() {

    if (!hero) return;

    const offset =
        window.pageYOffset;

    hero.style.backgroundPositionY =
        offset * 0.4 + "px";

}

window.addEventListener(
    "scroll",
    heroParallax
);

/* ==================================================
   CARD STAGGER EFFECT
================================================== */

const cards = document.querySelectorAll(
    ".area-card, .innovation-card, .number-card"
);

cards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 80}ms`;

});

/* ==================================================
   IMAGEM HOVER EXTRA
================================================== */

const images =
    document.querySelectorAll(
        ".gallery-grid img"
    );

images.forEach(image => {

    image.addEventListener(
        "mousemove",
        () => {

            image.style.transform =
                "scale(1.05)";

        }
    );

    image.addEventListener(
        "mouseleave",
        () => {

            image.style.transform =
                "scale(1)";

        }
    );

});

/* ==================================================
   LOAD ANIMATION
================================================== */

window.addEventListener("load", () => {

    document.body.classList.add(
        "loaded"
    );

});

/* ==================================================
   ESC FECHA MENU
================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            nav.classList.remove("active");
            mobileBtn.classList.remove("active");

        }

    }
);

/* ==================================================
   INIT
================================================== */

handleHeader();
updateProgressBar();
handleBackToTop();
activeMenu();

/* ==================================================
   CONSOLE BRAND
================================================== */

console.log(
`
🌱 AGRINHO V2

Tecnologia
Inovação
Sustentabilidade

Site carregado com sucesso.
`
);
