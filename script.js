// Função para enviar os dados do formulário para a API
function criarRegistro() {
  // 1. Capturamos o formulário para poder resetar depois
  const formulario = document.getElementById("form");
  const btn = formulario.querySelector('button[type="submit"]');

  // Bloqueia o botão para evitar cliques duplos
  btn.innerText = "Salvando...";
  btn.disabled = true;

  // 2. Obtém os valores dos campos
  var data = {
    idTransacao: document.getElementById("idTransacao").value,
    pracaPortico: document.getElementById("pracaPortico").value,
    dataTransacao: document.getElementById("dataTransacao").value,
    placa: document.getElementById("placa").value,
    metodoPagamento: document.getElementById("metodoPagamento").value,
    osa: document.getElementById("osa").value,
    descricao: document.getElementById("descricao").value,
    qualidadeFotos: document.getElementById("qualidadeFotos").value,
    revisor: document.getElementById("revisor").value,
    action: "criar",
  };

  // 3. Envia a requisição
  fetch(
    "https://script.google.com/macros/s/AKfycbyA6CWdnTRFx7WeCyMvN0jRgPqLDQ4C77N0HEZQjCNMLApXWve5gu7tGWiEGtHTNeKKTw/exec",
    {
      method: "POST",
      mode: "no-cors", // "no-cors" evita o erro de redirecionamento do Google
      cache: "no-cache",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    },
  )
    .then(() => {
      // Como usamos 'no-cors', não tentamos ler response.json() pois daria erro.
      // Se chegou aqui, o navegador enviou os dados com sucesso!

      alert("Registro salvo com sucesso!");

      // 4. AGORA VAI FUNCIONAR: Limpa e Sobe
      formulario.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Restaura o botão
      btn.innerText = "Salvar Registro";
      btn.disabled = false;
    })
    .catch((error) => {
      alert("Erro ao salvar registro: " + error);
      btn.innerText = "Salvar Registro";
      btn.disabled = false;
    });
}

// Listener para o formulário
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  criarRegistro();
});
