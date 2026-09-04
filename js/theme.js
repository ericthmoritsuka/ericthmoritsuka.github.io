const botaoTema = document.querySelector(".tema-toggle");

function temaEscuroAtivo() {
  return document.documentElement.dataset.theme === "dark";
}

/* the icon shows the mode that is currently active */
function atualizaBotao() {
  if (botaoTema) botaoTema.textContent = temaEscuroAtivo() ? "☾" : "☀";
}

if (botaoTema) {
  botaoTema.addEventListener("click", () => {
    const novo = temaEscuroAtivo() ? "light" : "dark";
    if (novo === "dark") {
      document.documentElement.dataset.theme = "dark";
    } else {
      delete document.documentElement.dataset.theme;
    }
    localStorage.setItem("tema", novo);
    atualizaBotao();
  });
  atualizaBotao();
}

// follow system changes while the visitor hasn't picked a side
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  if (localStorage.getItem("tema")) return;
  if (e.matches) {
    document.documentElement.dataset.theme = "dark";
  } else {
    delete document.documentElement.dataset.theme;
  }
  atualizaBotao();
});
