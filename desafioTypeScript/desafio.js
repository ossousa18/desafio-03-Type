var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var produto = [
    {
        nome: "Notebook",
        preco: 4000
    },
    {
        nome: "mouse",
        preco: 40
    },
    {
        nome: "fone",
        preco: 50
    },
    {
        nome: "Samsung",
        preco: 2500
    },
    {
        nome: "teclado",
        preco: 50
    },
    {
        nome: "Iphone",
        preco: 3500
    }
];
//Filtrar os produtos com preço menor que R$50.
var menor = produto.filter(function (produto) { return produto.preco < 50; });
console.log(menor);
//Adicionar 10% de desconto em todos os produtos.
var desconto = produto.map(function (produto) {
    return __assign(__assign({}, produto), { desconto: produto.preco * 0.9 });
});
console.log(desconto);
//Calcular o preço media dos produtos restantes.
var media = produto.reduce(function (accumalator, produto) {
    return (accumalator + produto.preco);
}, 0);
console.log(media / produto.length);
//Encontrar o produto mais caro.
var caro = desconto.reduce(function (produtoM, produto) {
    return produto.preco > produtoM.preco ? produto : produtoM;
});
console.log(caro);
//Criar uma nova lista de produtos apenas com seus nomes.
var newList = produto.map(function (produto) {
    return produto.nome;
});
console.log(newList);
