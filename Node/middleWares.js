//padrão de projeto - middleware pattern {chain of responsibility}

const passo1 = (ctx, next) => {
    ctx.valor1='mid1'
    next()
}

const passo2 =  (ctx, next) => {
    ctx.valor2='mid2'
    next()
}

const passo3 = ctx => ctx.valor3='mid3'

const exec =(ctx, ...middlewares)=>{
    const execPasso = indice =>{
        console.log(indice)
        middlewares && indice < middlewares.length && 
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

//como passo 3 não tem next, ele não chama proxima função
exec(ctx, passo3, passo1, passo2)
console.log(ctx)


//cristofer alexander. 
//Arquiteto que inventou muitos padroes de projeto