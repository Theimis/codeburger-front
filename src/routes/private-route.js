/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ element: Element, ...rest }) {
    const user = localStorage.getItem('codeburger:userData');
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return Element;
}

export default PrivateRoute;

PrivateRoute.propTypes = {
    element: PropTypes.element.isRequired
};