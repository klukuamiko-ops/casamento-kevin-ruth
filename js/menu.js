// =========================================
// MENU MOBILE — KEVIN & RUTH
// =========================================

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

// Ouvrir / fermer le menu
menuToggle.addEventListener("click", function () {

    menu.classList.toggle("active");

});

// Fermer automatiquement après avoir choisi une rubrique
const menuLinks = menu.querySelectorAll("a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("active");

    });

});