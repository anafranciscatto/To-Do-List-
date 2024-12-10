document.getElementById("modo").addEventListener("click", function() {
  const body = document.body;
  const icone = document.getElementById("icone");

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    icone.src = "/static/IMG/lua-crescente.png";
    icone.alt = "Ícone de lua";
  } else {
    icone.src = "/static/IMG/sol.png";
    icone.alt = "Ícone de sol";
  }
});

document.getElementById("metaForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const meta = document.getElementById("meta").value;
  const descricao = document.getElementById("descricao").value;
  const data = document.getElementById("data").value || "Não definida";
  const prioridade = document.getElementById("prioridade").value;

  const card = document.createElement("div");
  card.classList.add("card");

  if (prioridade === "Alta") {
    card.classList.add("alta");
  } else if (prioridade === "Média") {
    card.classList.add("media");
  } else if (prioridade === "Baixa") {
    card.classList.add("baixa");
  }

  card.innerHTML = `
    <label class="container">
      <input type="checkbox" class="checkin">
      <svg viewBox="0 0 64 64" height="2em" width="2em">
        <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
      </svg>
    </label>
    <h4>${meta}</h4>
    <p>${descricao}</p>
    <p><strong>Data:</strong> ${data}</p>
    <p><strong>Prioridade:</strong> ${prioridade}</p>
  `;

  document.getElementById("cards-container").appendChild(card);
  document.getElementById("metaForm").reset();

  card.querySelector(".checkin").addEventListener("change", function() {
    if (this.checked) {
      // Aplica o efeito de desaparecimento
      card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      card.style.opacity = 0;
      card.style.transform = 'scale(0.8)';

      // Após o efeito, o card será removido
      setTimeout(() => {
        card.remove();
      }, 500);
    }
  });
});
