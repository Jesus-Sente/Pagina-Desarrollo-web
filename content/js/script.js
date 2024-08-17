document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));

    const updateActiveLink = () => {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.parentElement.classList.remove('active'));
        navLinks[index].parentElement.classList.add('active');
    };

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // To set the active link on initial load
});