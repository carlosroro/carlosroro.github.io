document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");

  let isZoomed = false;

  modal.style.display = "none";

  window.abrirModal = function (src) {
      modal.style.display = "flex";
      modalImage.src = src;
      modalImage.style.transform = "scale(1)";
      modalImage.style.cursor = "zoom-in";
      modal.style.overflow = "hidden";
      isZoomed = false;
  };

  modal.addEventListener("click", function (event) {
      if (!isZoomed || event.target === modal) {
          modal.style.display = "none";
      }
  });

  modalImage.addEventListener("click", function (event) {
      event.stopPropagation();

      if (!isZoomed) {
          modalImage.style.transform = "scale(2)";
          modalImage.style.cursor = "grab";
          modal.style.overflow = "scroll";
          isZoomed = true;
      } else {
          modalImage.style.transform = "scale(1)";
          modalImage.style.cursor = "zoom-in";
          modal.style.overflow = "hidden";
          isZoomed = false;
      }
  });
});