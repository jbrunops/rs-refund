// Seleciona os elementos do formulário
const amount = document.getElementById("amount");

// Input só aceitando números agora!
amount.oninput = () => {
  let value = amount.value.replace(/\D/g, "");
  amount.value = value;
};
