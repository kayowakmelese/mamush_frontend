import React from 'react'
import {Route,BrowserRouter} from 'react-router-dom'
import NavBar from '../navBar'
import Homer from './Home'
import Search from './Search'
import Detail from './Detail'
import ShoperProfile from './ShoperProfile'

const Root=()=>{
    return <BrowserRouter>
        <NavBar/>
        <Route component={Homer} exact path="/"/>
        <Route component={Search} path="/search"/>
        <Route component={Detail} path="/detail/:id"/>
        <Route component={ShoperProfile} path="/provider/:id"/>
        </BrowserRouter>
   
}
export default Root;