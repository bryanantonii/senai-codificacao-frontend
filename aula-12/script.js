let produtos = [
    { nome: "Tênis", preco: "R$199.99", categoria: "Calçado", imagem: "tenis.jpg" },
    { nome: "Teclado", preco: "R$149.99", categoria: "Periférico", imagem: "teclado.jpg" },
    { nome: "Camiseta", preco: "R$30.00", categoria: "Vestuário", imagem: "camiseta.jpg" },
    { nome: "Fone de Ouvido", preco: "R$89.99", categoria: "Periférico", imagem: "fone.jpg" },
    { nome: "Calça Jeans", preco: "R$79.99", categoria: "Vestuário", imagem: "calca.jpg" }
];


// 1 e 2 - Função para listar produtos
function listarProdutos() {
    produtos.forEach(produto => {
        console.log(`Nome: ${produto.nome}, Preço: ${produto.preco}, Categoria: ${produto.categoria}`);
    });
}


// 3 - Função para filtrar por categoria
function filtrarPorCategoria(categoria) {
    return produtos.filter(produto => produto.categoria === categoria);
}


// Listar todos os produtos
listarProdutos();


// Filtrar produtos da categoria Periférico
console.log("Produtos da categoria Periférico:");
console.log(filtrarPorCategoria("Periférico"));


// 4 - Destructuring
produtos.forEach(({ nome, preco, categoria }) => {
    console.log(`Nome: ${nome}, Preço: ${preco}, Categoria: ${categoria}`);
});

const { nome, preco } = produtos[0];

console.log("Nome:", nome);
console.log("Preço:", preco);


// 4 - Spread para duplicar a lista
const novaLista = [...produtos];

console.log(novaLista);


// Spread para modificar/adicionar à lista
const listaAtualizada = [
    ...produtos,
    {
        nome: "Fone de ouvido",
        preco: "R$99.99",
        categoria: "Eletrônicos",
        imagem: "fone.jpg"
    }
];

console.log(listaAtualizada);
