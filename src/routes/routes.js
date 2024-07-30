/* eslint-disable prettier/prettier */
import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "../Containers/Home"
import Login from '../Containers/Login'
import Register from '../Containers/Register'
import PrivateRoute from "./private-route"

function Routess() {
    return (
        <Router>
            <Routes>
                <Route Component={Login} path="/login" />
                <Route Component={Register} path="/cadastro" />
                <PrivateRoute exact Component={Home} path="/" />
            </Routes>
        </Router>
    )
}

export default Routess