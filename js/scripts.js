const navbar = document.querySelector("#tmNav");
const logo = document.querySelector("#nav-logo");

console.log(navbar, logo);
setInterval(() => {
    if (navbar.classList.contains('scroll')) {
        logo.classList.add('nav-logo-scroll');

    } else {
        if (logo.classList.contains('nav-logo-scroll')) {
            logo.classList.remove('nav-logo-scroll');

        }
    }
}, 500);