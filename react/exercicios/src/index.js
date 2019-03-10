import React from 'react'
import ReactDOM from 'react-dom'

// import Multi, {BoaNoite} from './componentes/Multiplos'

// import Primeiro from './componentes/primeiro'
// import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// const elemento = <h1>React </h1>
ReactDOM.render(
    <div>
        {/* <BomDia nome="Guilherme" /> 
        <Multi.BoaTarde nome="Ana"/>
        <BoaNoite nome="Bia"/> */}
        {/* <Saudacao tipo="Bom dia" nome="João"/> */}
        {/* <Pai nome="Paulo" sobrenome="Silva"/> */}
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>, document.getElementById('root'))


// ReactDOM.render(
//     <div>
//         <Pai nome="Paulo" sobrenome="Silva">
//             <Filho nome="Pedro" />
//             <Filho nome="Paulo" />
//             <Filho nome="Carla" />
//         </Pai>
//     </div>    
// , document.getElementById('root'))