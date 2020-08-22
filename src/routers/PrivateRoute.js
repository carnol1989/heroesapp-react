import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    localStorage.setItem('lastPath', rest.location.pathname)

    return (
        <Route 
            {...rest} 
            component={(props) => 
                isAuthenticated ? <Component {...props} /> : 
                    <Redirect to="/login" />}    
        />
    )
}

export default PrivateRoute