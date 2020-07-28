import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import SingUp from './components/SignUp/SignUp'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={SingUp} exact />
                <Route path="/register" component={Register} exact /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes