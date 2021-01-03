import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from "./hocs/Layout"

import Home from "./containers/Home"
import Login from "./containers/Login"
import Register from "./containers/Register"
import Activate from "./containers/Activate"
import ResetPassword from "./containers/ResetPassword"
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm"

import { Provider } from 'react-redux'
import store from "./management/store"


const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/activate/:uid/:token" component={Activate} />
                    <Route exact path="/reset-password" component={ResetPassword} />
                    <Route exact path="/password/reset/confirm/:uid/:token" component={ResetPasswordConfirm} />
                </Switch>
            </Layout>
        </Router>
    </Provider>


)

export default App