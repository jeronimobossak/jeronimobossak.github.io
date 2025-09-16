// ===== Scroll suave para seções =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ===== Botão "voltar ao topo" =====
const btnTop = document.getElementById("btnTop");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Cards de projetos =====
const projetos = document.querySelectorAll(".projeto-card");

projetos.forEach(card => {
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");
    if (link) {
      window.open(link, "_blank");
    }
  });
});

// ===== Dark/Light Mode =====
const toggleTheme = document.getElementById("toggleTheme");
const body = document.body;

toggleTheme.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Carrega preferência salva
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}
