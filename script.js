// Seleciona os elementos do formulário
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");
const form = document.getElementById("form");

// Input só aceitando números agora!
amount.oninput = () => {
  let value = amount.value.replace(/\D/g, "");

  // Transformar o valor em centavos (exemplo: 150/100 = 1.5 que é equivalente a R$1)
  value = Number(value) / 100;

  amount.value = formatCurrencyBRL(value);
};

// Função para formatar o valor
function formatCurrencyBRL(value) {
  // Formatando o valor no padrão BRL
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  // Retorna o valor formatado
  return value;
}

form.onsubmit = (event) => {
  event.preventDefault();

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  };
};
