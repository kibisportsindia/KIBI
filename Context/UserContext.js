import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserConsumer = UserContext.Consumer
export const UserProvider = props => {

    const [user, setUser] = useState({})

    return (<UserContext.Provider value={[user,setUser]}>
        {props.children}
    </UserContext.Provider>
    )
    // return (<UserContext.Provider value={'Hello'}>
    //     {props.children}
    // </UserContext.Provider>
    // )
}