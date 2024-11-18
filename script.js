document.getElementById("toggleMode").addEventListener("click", () => {
    const body = document.body;
    if (body.classList.contains("mode-rapi")) {
      body.classList.remove("mode-rapi");
      body.classList.add("mode-berantakan");
    } else {
      body.classList.remove("mode-berantakan");
      body.classList.add("mode-rapi");
    }
  });
  
  document.querySelectorAll(".toggleable").forEach((element) => {
    element.addEventListener("click", () => {
      if (confirm(`Ingin menyembunyikan konten bagian "${element.textContent}"?`)) {
        const content = element.nextElementSibling;
        content.classList.toggle("hidden");
      }
    });
  });
  