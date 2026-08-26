let produtos = [
    {
        id: 1,
        nome: "Teclado Gamer",
        preco: 100.90,
        categoria: "Periféricos",
        estoque: 10,
        promocao: true
    },
    {
        id: 2,
        nome: "Bola de Futebol",
        preco: 29.90,
        categoria: "Esportes",
        estoque: 5
    },
    {
        id: 3,
        nome: "Samsung Galaxy S24",
        preco: 3999.90,
        categoria: "Smartphones",
        estoque: 8
    }
];

function calcularDesconto(preco, percentual){
    const desconto = preco * (percentual / 100);
    return preco - desconto;
}


    const resultado = calcularDesconto(produtos[0].preco, 10);
    console.log(resultado);


function exibirProduto(produto){

    console.log(`Produto: ${produto.nome}`); 
    console.log(`Preço: R$ ${produto.preco}`);
    console.log(`Categoria: ${produto.categoria}`);
    console.log(`Estoque: ${produto.estoque}`);

    if (produto.promocao) {
        console.log(`Produto em promoção!`);
    } else {
        console.log(`Produto não está em promoção.`);
    }

}


for (let i = 0; i < produtos.length; i++) {
    exibirProduto(produtos[i]);
}
