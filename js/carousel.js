const trilho = document.querySelector(".carrossel-trilho");

if (trilho) {
  const cartoes = [...trilho.querySelectorAll(".cartao")];
  const pontos = [...document.querySelectorAll(".carrossel-ponto")];
  const setaPrev = document.querySelector(".seta-prev");
  const setaNext = document.querySelector(".seta-next");
  let atual = 0;

  function atualizaSetas() {
    setaPrev.disabled = atual === 0;
    setaNext.disabled = atual === cartoes.length - 1;
  }

  function irPara(i) {
    i = Math.max(0, Math.min(cartoes.length - 1, i));
    cartoes[i].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  // Marca o ponto ativo conforme o cartão visível no centro
  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          atual = cartoes.indexOf(entrada.target);
          pontos.forEach((p, j) => p.classList.toggle("ativo", j === atual));
          atualizaSetas();
        }
      });
    },
    { root: trilho, threshold: 0.6 }
  );
  cartoes.forEach((c) => observador.observe(c));

  setaPrev.addEventListener("click", () => irPara(atual - 1));
  setaNext.addEventListener("click", () => irPara(atual + 1));
  atualizaSetas();
  pontos.forEach((p, i) => p.addEventListener("click", () => irPara(i)));

  trilho.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      irPara(atual - 1);
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      irPara(atual + 1);
    }
  });

  // Links diretos para um projeto (ex.: /portfolio.html#dogs)
  if (location.hash) {
    const alvo = trilho.querySelector(location.hash);
    if (alvo) {
      setTimeout(() => alvo.scrollIntoView({ block: "nearest", inline: "center" }), 0);
    }
  }

  // Miniaturas: troca a imagem principal do cartão
  document.querySelectorAll(".cartao-thumb").forEach((botao) => {
    botao.addEventListener("click", () => {
      const media = botao.closest(".cartao-media");
      const img = media.querySelector(".cartao-img");
      img.src = botao.dataset.src;
      img.alt = botao.dataset.alt;
      media.querySelectorAll(".cartao-thumb").forEach((b) => b.classList.toggle("ativo", b === botao));
    });
  });
}
