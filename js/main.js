/* =========================================================
   UNITED BALLOTS
   MAIN JAVASCRIPT
========================================================= */


// =========================
// PRELOADER
// =========================

window.addEventListener("load", () => {

    const loader =
        document.querySelector(".preloader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 700);

    }

});


// =========================
// HEADER SCROLL
// =========================

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// =========================
// MOBILE MENU
// =========================

const menuToggle =
    document.querySelector(".menu-toggle");

const navMenu =
    document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "active"
            );

        }
    );


    document
        .querySelectorAll(
            ".nav-menu a"
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navMenu.classList.remove(
                        "active"
                    );

                }
            );

        });

}


// =========================
// SCROLL REVEAL
// =========================

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    element => {

        observer.observe(
            element
        );

    }
);


// =========================
// FAQ
// =========================

const faqItems =
    document.querySelectorAll(
        ".faq-item"
    );

faqItems.forEach(item => {

    const question =
        item.querySelector(
            ".faq-question"
        );

    question.addEventListener(
        "click",
        () => {

            faqItems.forEach(
                other => {

                    if (
                        other !== item
                    ) {

                        other.classList.remove(
                            "active"
                        );

                    }

                }
            );

            item.classList.toggle(
                "active"
            );

            const answer =
                item.querySelector(
                    ".faq-answer"
                );

            if (
                item.classList.contains(
                    "active"
                )
            ) {

                answer.style.maxHeight =
                    answer.scrollHeight
                    + "px";

            } else {

                answer.style.maxHeight =
                    null;

            }

        }
    );

});


// =========================
// SMOOTH ANCHOR
// =========================

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function(e) {

                const target =
                    document.querySelector(
                        this.getAttribute(
                            "href"
                        )
                    );

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    });







    document.addEventListener("DOMContentLoaded", function () {

    // Initialize EmailJS
    emailjs.init({
        publicKey: "xVCfN1L3qxaPlFC4s"
    });


    // Get the contact form
    const contactForm = document.getElementById("contact-form");

    const submitButton = document.getElementById("submit-btn");

    const formStatus = document.getElementById("form-status");


    // Check if contact form exists
    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            // Stop normal form submission
            event.preventDefault();


            // Change button text
            submitButton.disabled = true;

            submitButton.innerText = "Sending...";


            // Send form using EmailJS
            emailjs.sendForm(
                "service_o9agkwf",
                "template_vs1ipok",
                contactForm
            )

            .then(function () {

                // Show success message
                formStatus.innerText =
                    "Thank you! Your enquiry has been sent successfully.";

                formStatus.className =
                    "form-status success";


                // Clear form
                contactForm.reset();


                // Reset button
                submitButton.disabled = false;

                submitButton.innerText =
                    "Send Enquiry";

            })


            .catch(function (error) {

                console.error(
                    "EmailJS Error:",
                    error
                );


                // Show error message
                formStatus.innerText =
                    "Sorry, something went wrong. Please try again.";

                formStatus.className =
                    "form-status error";


                // Reset button
                submitButton.disabled = false;

                submitButton.innerText =
                    "Send Enquiry";

            });

        });

    }

});




