/* eslint-disable prettier/prettier */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "../Containers/Home";
import Login from '../Containers/Login';
import Register from '../Containers/Register';
import PrivateRoute from "./private-route";

function Routess() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route
                    path="/"
                    element={<PrivateRoute element={<Home />} />}
                />
            </Routes>
        </Router>
    );
}

export default Routess;