document.addEventListener("DOMContentLoaded", () => {
  const pages = Array.from(document.querySelectorAll(".page"));
  const navButtons = Array.from(document.querySelectorAll(".nav-item"));
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const currentPageSpan = document.getElementById("currentPage");
  const totalPagesSpan = document.getElementById("totalPages");

  let currentIndex = 0;
  const totalPages = pages.length;
  totalPagesSpan.textContent = totalPages;

  function showPage(index) {
    if (index < 0 || index >= totalPages) return;

    pages.forEach((page, i) => {
      page.classList.toggle("active", i === index);
    });

    navButtons.forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });

    currentIndex = index;
    currentPageSpan.textContent = currentIndex + 1;
  }

  // Клик по меню
  navButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => showPage(index));
  });

  // Кнопки вперёд / назад
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      showPage(currentIndex - 1);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalPages - 1) {
      showPage(currentIndex + 1);
    }
  });

  // Клавиши ← →
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      if (currentIndex > 0) showPage(currentIndex - 1);
    }
    if (event.key === "ArrowRight") {
      if (currentIndex < totalPages - 1) showPage(currentIndex + 1);
    }
  });

  // Старт
  showPage(0);
});
