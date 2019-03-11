import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps ={
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

//db em outro arquivo const
const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user:{name:'', email: ''},
    list:[]
}


export default class UserCrud extends Component {
//  Separar os componentes Tarefa de casa 

    state = {...initialState}
    clear(){
        this.setState({user:initialState.user})
    }

    save(){
        
    }

    render(){
        return (
            <Main {...headerProps}>
                Cadastro de Usuários
            </Main>
        )
    }
}