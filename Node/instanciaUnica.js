//node faz cache dos modulos. Não instanciando outro objeto quando requerido no cliente
module.exports = {
    valor:1,
    inc(){
        this.valor++
    }
}