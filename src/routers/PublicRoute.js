import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route 
            {...rest}
            component={(props) => 
                !isAuthenticated ? <Component {...props} /> : 
                    <Redirect to="/" /> }
        />
    )
}

export default PublicRoute