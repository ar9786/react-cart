import React from 'react';
import { Redirect, Route } from 'react-router-dom';



const Protected = ({ component: Cmp, data, ...rest }) => (
    <Route
        {...rest}
        render={(props) => (
            localStorage.getItem('login_token') ? (<Cmp {...props} data={data} />) : <Redirect to="/login" />
        )} />
)

export default Protected;