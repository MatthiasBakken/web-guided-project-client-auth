import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// this is going to do something things
// 1. wrap the plain Route component and pass in the same props
// 2. check to see if we are logged in, and if so, render component 
// 3. if the user is not logged in, we redirect to login

const PrivateRoute = ({component: Component, ...rest}) => {
    return (<Route {...rest} render={
        (props) => {
            if (localStorage.getItem('token')) {
                return <Component {...props} />
            } else {
                return (<h1>SORRY</h1>)
            }
        }
    } />)
}

export default PrivateRoute