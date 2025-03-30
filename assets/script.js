//Chargement à l'arrivé du site
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("content").style.display = "block";
      document.body.classList.add("fade-in");
      initVisibleSectionsOnly();
    }, 1000);
  });
});
//Animation au défilement
function initVisibleSectionsOnly() {
  const allSections = [
    document.getElementById("presentation"),
    document.getElementById("about-me"),
    ...document.querySelectorAll(".projects"),
    document.getElementById("technology"),
    document.getElementById("contact"),
  ];

  allSections.forEach((section) => {
    if (section) {
      section.classList.add("hidden-section");
      section.classList.remove("visible-section");
    }
  });

  function checkVisibleSections() {
    allSections.forEach((section) => {
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isActivelyVisible =
        rect.top < windowHeight * 0.75 && 
        rect.bottom > windowHeight * 0.25; 

      
      const isFirstSection = section.id === "presentation";
      const isFirstAndVisible = isFirstSection && rect.bottom > 0;

      if (isActivelyVisible || isFirstAndVisible) {
        section.classList.add("visible-section");
        section.classList.remove("hidden-section");
      } else {
        section.classList.remove("visible-section");
        section.classList.add("hidden-section");
      }
    });
  }

  
  window.addEventListener("scroll", checkVisibleSections);

  
  setTimeout(function () {
    const firstSection = document.getElementById("presentation");
    if (firstSection) {
      firstSection.classList.add("visible-section");
      firstSection.classList.remove("hidden-section");
    }

    checkVisibleSections();
  }, 100);
}
function burgerMenu() {
  const burgerMenu = document.getElementById("burger-menu");
  const navList = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-list");
  if (burgerMenu && navList) {
    burgerMenu.addEventListener("click", function () {
      navList.classList.toggle("active");
    });
    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        navList.classList.remove("active");
      });
    });
  }
}
burgerMenu();
