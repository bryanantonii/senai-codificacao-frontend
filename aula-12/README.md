# Atividade 

Nesta atividade foram corrigidos bugs em códigos JavaScript que não apresentam necessariamente erros de sintaxe, mas geram resultados incorretos ou `undefined`.

## Trecho 1 - Objeto

### Bug
O código acessava `Nome`, mas a propriedade criada era `nome`. JavaScript diferencia letras maiúsculas e minúsculas.

### Correção

```jsx
const produto = {
  nome: "Fone de Ouvido",
  preco: 120
};

console.log(produto.nome);
```

---

## Trecho 2 - Array de objetos

### Bug
O array possui apenas os índices `0` e `1`, mas o código tentava acessar o índice `2`.

### Correção

```jsx
const produtos = [
  { id: 1, nome: "Mochila", preco: 150 },
  { id: 2, nome: "Garrafa", preco: 40 }
];

console.log(produtos[1].nome);
```

---

## Trecho 3 — JSON

### Bug
O JSON estava utilizando aspas simples em `nome` e uma vírgula sobrando após o último campo.

### Correção

```jsx
const dadosAPI = `{
  "nome": "Caderno",
  "preco": 25
}`;

const produto = JSON.parse(dadosAPI);
```

---

## Trecho 4 - Destructuring

### Bug
O objeto possui a propriedade `valor`, mas o código tentava fazer destructuring de uma propriedade chamada `preco`, que não existe.

### Correção

```jsx
const produto = { nome: "Mouse", valor: 80 };

const { nome, valor: preco } = produto;

console.log(`Preço: ${preco}`);
```

---

## Trecho 5 - Spread vs. referência

### Bug
`catalogoPromocional` recebia uma referência para o mesmo array de `catalogoOriginal`. Assim, alterar o preço no promocional também alterava o original.

### Correção

```jsx
const catalogoOriginal = [{ id: 1, nome: "Teclado", preco: 200 }];

const catalogoPromocional = [...catalogoOriginal];
catalogoPromocional[0].preco = 150;

console.log(catalogoOriginal[0].preco);
```
