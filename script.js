// ===============================
// Scroll Reveal Animation
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ===============================
// Current Year
// ===============================

const footerParagraphs = document.querySelectorAll("footer p");

if (footerParagraphs.length > 0) {

    footerParagraphs[0].textContent =
        `© ${new Date().getFullYear()} Haseen Ullah. All Rights Reserved.`;

}