import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../componentes/home/Home'
import UserCrud from '../componentes/user/UserCrud'


export default props =>
    <Switch>
        <Route exact path='/' component={Home} /> {/* exact = exatamente o path='/' */}
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>
