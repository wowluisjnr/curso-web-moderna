function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise ou exclusivo
    const comprarTv32 = trabalho1 != trabalho2 //tambem simula um ou exclusivo
    const manterSaudavel = !comprarSorvete  //operador unario

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}

console.log(compras(false, false))