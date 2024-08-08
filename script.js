/*document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a[data-section]");
    const sections = document.querySelectorAll(".section");
    const chapterLinks = document.querySelectorAll("nav ol li a[data-chapter]");
    const chapterContents = document.querySelectorAll(".chapter-content");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetSection = link.getAttribute("data-section");

            sections.forEach(section => {
                if (section.id === targetSection) {
                    section.classList.add("active");
                } else {
                    section.classList.remove("active");
                }
            });
        });
    });

    chapterLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetChapter = link.getAttribute("data-chapter");

            chapterContents.forEach(chapter => {
                if (chapter.id === targetChapter) {
                    chapter.classList.add("active");
                } else {
                    chapter.classList.remove("active");
                }
            });
        });
    });

    // Show the home section by default
    document.getElementById("home").classList.add("active");
});*/
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a[data-section]");
    const sections = document.querySelectorAll(".section");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetSection = link.getAttribute("data-section");

            sections.forEach(section => {
                if (section.id === targetSection) {
                    section.classList.add("active");
                } else {
                    section.classList.remove("active");
                }
            });
        });
    });

    // Show the home section by default
    document.getElementById("home").classList.add("active");
});
