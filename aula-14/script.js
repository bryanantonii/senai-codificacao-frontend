//1. Selecionando Elementos pelo Id
//O método getElementById busca no html o elemento que possui o id correspondente
const titulo = document.getElementById("cardTitulo");
const descricao = document.getElementById("cardDescricao");
const botao = document.getElementById("btnSaibaMais");

//Exibe os elementos selecioandos no console do navegador(F12)
console.log("Elemento do título: ", titulo);
console.log("Elemento do botão: ", botao);

//2. Lendo e Alterando conteúdo (texto) 
//Podemos ler ou alterar o texto de um elemento com .innerText ou .textContent
console.log("Texto atual do título:", titulo.innerText)
 
//3. Adicionando um evento de clique com document.getElementByd
//Quando o usuario clica no botão, alteramos o conteúdo e o estilo dos elementos da página.
botao.addEventListener("click", function(){
    titulo.innerText = "JavaScrpit no Dom!";

    //Alterando o texto da descrição
    descricao.innerText = "Você clicou no botão e o texto foi alterado usando document.getElementById() com sucesso!"

    //Alterando o estilo CSS diretamente pelo JavaScript
    titulo.style.color = "#4f46e5";
    botao.style.backgroundColor = "#10b981";
    botao.innerText = "Texto Atualizado!"
})

const tag = document.querySelector(".card-tag");
console.log("querySelector('.card-tag') encontrou:", tag.textContent);

const cards = document.querySelectorAll(".card");
console.log(`querySelectorAll('.card') encontrou ${cards.lenght} cards(s)`);

cards.forEach(function (card, indice){
    const tituloDoCard = card.querySelector(".card-title");
    console.log(`Card ${indice + 1}:`, tituloDoCard ? tituloDoCard.textContent : "(sem titulo)");
    })

    tag.innerHTML = "<strong>FrontEnd</strong>"
    console.log("InnerHTML interpretou a tag <strong/>. Resultado: ", tag.innerHTML);

    const elementoDeTeste = document.createElement("span");
    elementoDeTeste.textContent = "<strong>FrontEnd</strong>";
    console.log("textContent NÃO interpreta a tag - ela vira texto puro: ", elementoDeTeste.textContent);