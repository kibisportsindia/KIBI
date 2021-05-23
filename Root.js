import React from 'react'
import App from './App'
import {UserProvider} from './Context/UserContext'

const Root = () => {
    return (
        <UserProvider>
            <App></App>
        </UserProvider>
    )
}

export default Root