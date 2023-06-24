const navLinkController2 = (e) => {
    var elems = document.querySelector(".active");
    if (elems !== null) {
        elems.classList.remove("active");
    }
    if (e !== undefined && e.className == "nav-item") {
        e.className = "nav-item active";
    }
}



const highlightCurrentNav = () => {
    let currentY = window.scrollY + window.innerHeight / 2;
    const sections = document.querySelectorAll("section");
    // which section is currently in view?
    let currentSection = sections[0];
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= currentY) {
            currentSection = sections[i];
        }
    }
    let currentNavId = "nav-" + currentSection.id;
    let currentNav = document.getElementById(currentNavId);
    console
    if(currentNav !== null) {
        navLinkController2(currentNav);
    }

};

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('scroll', highlightCurrentNav);
});