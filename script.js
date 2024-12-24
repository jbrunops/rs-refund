// Seleciona os elementos do formulário
const amount = document.getElementById("amount");

// Input só aceitando números agora!
amount.oninput = () => {
  let value = amount.value.replace(/\D/g, "");
  amount.value = formatCurrencyBRL(value);
};

// Função para formatar o valor
function formatCurrencyBRL(value) {
  // Formatando o valor no padrão BRL
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return value;
}
