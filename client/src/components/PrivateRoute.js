import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// this is going to do something things
// 1. wrap the plain Route component and pass in the same props
// 2. check to see if we are logged in, and if so, render component 
// 3. if the user is not logged in, we redirect to login

const PrivateRoute = (props) => {
    return (<Route {...props} />)
}

export default PrivateRoute