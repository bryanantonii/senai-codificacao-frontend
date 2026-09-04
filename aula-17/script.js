//Seleção dos elementos do HTML
const form = document.querySelector("#form-newsletter");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoCurso = document.querySelector("#curso");
const botaoEnviar = document.querySelector("#botao-enviar");
const mensagem = document.querySelector("#mensagem");
const contador = document.querySelector("#contador");

//Eventos de Clique

//Espera um click do botão
botaoEnviar.addEventListener("click", function(event) {
    //impede que o formulário seja enviado automaticante

    console.log("o botão foi clicado!");
    console.log("Elemento clicado: ", event.target);
    console.log("Texto do botão: ", event.target.textContent.trim());

    
});


// Evento Input

campoNome.addEventListener("input", function() {
    const textoDigitado = campoNome.value; 

    console.log("Nome atual", textoDigitado);

    const quantidade = textoDigitado.length;

    contador.textContent = quantidade + "Caractere(s) digitado(s)";

});

//evento chage
campoCurso.addEventListener("change", function(){
    const cursoSelecionado = campoCurso.value;

    console.log("Curso selecionado: ", cursoSelecionado);

});

//eventos de teclado

campoEmail.addEventListener("keydown", function(event){
    console.log("Tecla pressionada: ", event.key );

});

campoEmail.addEventListener("keyup", function(event){
    console.log("tecla solta: ", event.key);

});

//eventos do mouse
botaoEnviar.addEventListener("mouseenter", function(){
    botaoEnviar.style.backgroundColor = "#115e59";
    botaoEnviar.style.cursor = "pointer";

});

botaoEnviar.addEventListener("mouseleave", function(){
    botaoEnviar.style.backgroundColor = "#0f766e";

});

//Envio e validação de formularios

form.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = campoNome.value;
    const email = campoEmail.value;
    const curso = campoCurso.value;

    console.log("Nome: ", nome);
    console.log("Email: ", email);
    console.log("Curso: ", curso);

    const nomeSemEspacos = nome.trim();
    const emailSemEspacos = email.trim();

    //verificação de campos vazios
    if(nomeSemEspacos === "" || emailSemEspacos === "" || curso === ""){
        mensagem.textContent = "Por favor, preencha todos os campos.";
        mensagem.style.color = "red";
        return;
    }

    //verificação de quantidade de caracteres no nome
    if(nomeSemEspacos.length < 3){
        mensagem.textContent = "O nome deve ter pelo menos 3 caracteres.";
        mensagem.style.color = "red";
        return;
    }

    //verificação de e-mail
    if(!emailSemEspacos.includes("@")){
        mensagem.textContent = "Digite um e-mail valido.";
        mensagem.style.color = "red";
        return;
    }

    //cadastro valido
    mensagem.textContent = "Cadastro realizado com sucesso";
    mensagem.style.color = "green";

    console.log("cadastro realizado com scuesso");
    console.log("Nome:  "+ nomeSemEspacos);
    console.log("Email: "+emailSemEspacos);
    console.log("Curso: "+curso);

    form.reset()

    contador.textContent = "0 caractere(s) digitado(s)";

});