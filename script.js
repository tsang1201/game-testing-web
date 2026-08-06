(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".card");
    var revealEls = document.querySelectorAll(".reveal, .site-header, .site-footer");

    var anyMotion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (anyMotion && "IntersectionObserver" in window) {
      var sections = document.querySelectorAll(".card");
      sections.forEach(function (el) {
        el.classList.add("reveal");
      });
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      sections.forEach(function (el) {
        io.observe(el);
      });
    } else {
      Array.prototype.forEach.call(revealEls, function (el) {
        el.classList.add("is-visible");
      });
    }

    console.log("Game Testing Web scaffold loaded.");
  });
})();