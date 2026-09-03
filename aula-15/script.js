const produtos = [
    { nome: "Caneta", preco: 2.5 },
    { nome: "Caderno", preco: 12 },
    { nome: "Mochila", preco: 89.9 },
];

const container = document.getElementById("lista-produtos");

function renderizarProdutos(lista) {
    container.innerHTML = "";
    lista.forEach((produto) => {
        const item = document.createElement("li");
        item.textContent = `${produto.nome} - R$ ${produto.preco}`;
        item.addEventListener("click", () => {
            item.classList.toggle("favorito");
        });
        container.appendChild(item);
    });
}
renderizarProdutos(produtos);

const novo = document.createElement("li");
novo.textContent = "Item de teste";
container.appendChild(novo);
novo.remove();


