// Seleciona os elementos do formulário
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");
const form = document.getElementById("form");

// Seleciona os elementos da lista.
const expenseList = document.querySelector("ul");

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
  // Chama a função que adicionará o item na lista
  expenseAdd(newExpense);
};

function expenseAdd(newExpense) {
  try {
    // Criar o elemento para adicionar na lista.
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");

    // Criar o ícone da categoria
    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name);

    // Criar info da despesa
    const expenseInfo = document.createElement("div");
    expenseInfo.classList.add("expense-info");

    // Criar nome da despesa
    const expenseName = document.createElement("strong");
    expenseName.textContent = newExpense.expense;

    // Criar a categoria da despesa
    const expenseCategory = document.createElement("span");
    expenseCategory.textContent = newExpense.category_name;

    // Adicionar name e category em expense info (div: informações da despesa)
    expenseInfo.append(expenseName, expenseCategory);

    // Adiciona as informações no item.
    expenseItem.append(expenseIcon, expenseInfo);

    // Adicionar o item na lista
    expenseList.append(expenseItem);
  } catch (error) {
    alert("Não foi possível atualizar a lista de despesas.");
    console.log(error);
  }
}

// ERROS:
// 1 - o form estava sem o ID form (corrigido)
