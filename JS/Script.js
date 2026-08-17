const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// إغلاق القائمة بالموبايل بعد الضغط على الرابط

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

      bsCollapse.hide();
    }
  });
});

// تحديد القسم الحالي في Navbar

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// Reservation Form

const reservationForm = document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Your reservation has been submitted!");

  reservationForm.reset();
});

