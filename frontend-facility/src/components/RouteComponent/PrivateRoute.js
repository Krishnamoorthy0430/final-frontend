import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import AuthService from '../../services/AuthService';

const PrivateRoute = ({ element: Component, roles, ...rest }) => {
    const currentUser = AuthService.getCurrentUser();
    const userRoles = AuthService.getUserRoles();

    return (
        <Route
            {...rest}
            element={(props) => {
                if (!currentUser) {
                    // Not logged in
                    return <Navigate to="/login" />;
                }

                // Check if route is restricted by role
                if (roles && roles.some(role => userRoles.indexOf(role) === -1)) {
                    // Role not authorized
                    return <Navigate to="/unauthorized" />;
                }

                // Authorized
                return <Component  />;
            }}
        />
    );
};

export default PrivateRoute;
