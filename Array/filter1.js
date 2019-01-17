const produtos = [
    {nome:'Notebook', preco:2499, fragil: true},
    {nome:'iPad Pro', preco:4199, fragil: true},
    {nome:'Copo de Vidro', preco:12.49, fragil: true},
    {nome:'Copo de Plastico', preco:18.99, fragil: false}
    
]

const produtoCaro = function(p){
    return p.preco > 13
}
const produtoFragil =p => p.fragil

console.log(produtos.filter(produtoCaro).filter(produtoFragil))

