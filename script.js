const formulario = document.getElementById("formulario");
const campo = document.getElementById("tarefa");
const lista = document.getElementById("lista");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = campo.value.trim();

  if (texto === "") {
    return;
  }

  const item = document.createElement("li");

  const descricao = document.createElement("span");
  descricao.textContent = texto;
  descricao.addEventListener("click", function () {
    item.classList.toggle("concluida");
  });

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";
  botaoRemover.addEventListener("click", function () {
    item.remove();
  });

  item.appendChild(descricao);
  item.appendChild(botaoRemover);
  lista.appendChild(item);

  campo.value = "";
  campo.focus();
});