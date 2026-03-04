// Função para enviar os dados do formulário para a API
function criarRegistro() {
  // Obtém os valores dos campos do formulário
  var idTransacao = document.getElementById("idTransacao").value;
  var pracaPortico = document.getElementById("pracaPortico").value;
  var dataTransacao = document.getElementById("dataTransacao").value;
  var placa = document.getElementById("placa").value;
  var metodoPagamento = document.getElementById("metodoPagamento").value;
  var osa = document.getElementById("osa").value;
  var descricao = document.getElementById("descricao").value;
  var qualidadeFotos = document.getElementById("qualidadeFotos").value;
  var revisor = document.getElementById("revisor").value;

  // Cria um objeto com os dados do formulário
  var data = {
    idTransacao: idTransacao,
    pracaPortico: pracaPortico,
    dataTransacao: dataTransacao,
    placa: placa,
    metodoPagamento: metodoPagamento,
    osa: osa,
    descricao: descricao,
    qualidadeFotos: qualidadeFotos,
    revisor: revisor,
    action: "criar", // Parâmetro para indicar a ação
  };

  // Envia a requisição POST para a API
  fetch(
    "https://script.google.com/macros/s/AKfycbyA6CWdnTRFx7WeCyMvN0jRgPqLDQ4C77N0HEZQjCNMLApXWve5gu7tGWiEGtHTNeKKTw/exec",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    },
  )
    .then((response) => response.json())
    .then((data) => {
      // Exibe a mensagem de sucesso ou erro
      alert(data.message);

      this.reset();
      window.scrollTo({ top: 0, behavior: "smooth" }); // Sobe a página suavemente
    })
    .catch((error) => {
      // Exibe a mensagem de erro
      alert("Erro ao salvar registro: " + error);
    });
}

// Adiciona um listener para o evento submit do formulário
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o envio padrão do formulário
  criarRegistro();
});
