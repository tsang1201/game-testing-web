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

    var galleryImages = document.querySelectorAll(".media-item img");
    if (galleryImages.length) {
      var overlay = document.createElement("div");
      overlay.className = "lightbox";
      overlay.innerHTML =
        '<div class="lightbox-body"><img class="lightbox-img" alt="" /><button class="lightbox-close" aria-label="關閉">×</button></div>';
      document.body.appendChild(overlay);

      function openLightbox(src) {
        overlay.querySelector(".lightbox-img").src = src;
        overlay.classList.add("is-open");
      }
      function closeLightbox() {
        overlay.classList.remove("is-open");
      }

      galleryImages.forEach(function (img) {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", function () {
          openLightbox(img.getAttribute("src"));
        });
      });
      overlay.addEventListener("click", function (e) {
        if (e.target === overlay || e.target.classList.contains("lightbox-close")) {
          closeLightbox();
        }
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeLightbox();
      });
    }
  });
})();