//Lista de produto  loja de eletronicos
interface list {
    nome: string
    preco: number
} 

const produto : list[] = [
    { 
        nome: "Notebook", 
        preco: 4000 
    },
    {
        nome:"mouse", 
        preco: 40
    },
    {
        nome:"fone", 
        preco: 50
    },
    {
        nome:"Samsung", 
        preco: 2500
    },
    {
        nome:"teclado", 
        preco: 50
    },
    {
        nome:"Iphone", 
        preco: 3500
    }
]
    

//Filtrar os produtos com preço menor que R$50.

const menor = produto.filter((produto) => produto.preco < 50)       
console.log(menor)

//Adicionar 10% de desconto em todos os produtos.

const desconto = produto.map((produto) =>{
    return {
        ...produto,
        desconto: produto.preco * 0.9
    } 
})

console.log(desconto)

//Calcular o preço media dos produtos restantes.

const media = produto.reduce((accumalator, produto) =>{
    return (accumalator + produto.preco);
}, 0);

console.log(media / produto.length)

//Encontrar o produto mais caro.

const caro = desconto.reduce(( produtoM ,produto )=>
    produto.preco > produtoM.preco ? produto : produtoM
)
 console.log(caro)

//Criar uma nova lista de produtos apenas com seus nomes.

const newList = produto.map(produto =>{
    return produto.nome;
})
 console.log(newList)
   
