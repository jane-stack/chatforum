import { createContext, useEffect, useState } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        fetch('/me')
        .then(resp => {
            if (resp.ok) {
                resp.json().then(data => {
                    setUser(data)
                    data.error ? setLoggedIn(false) : setLoggedIn(true)
                })
            }
        })
    }, [])

    const login = (user) => {
        setUser(user);
        setCurrentUser(user);
        setLoggedIn(true);
    }

    const logout = () => {
        setUser({});
        setCurrentUser(null);
        setLoggedIn(false);
    }

    const signup = (user) => {
        setUser(user);
        setLoggedIn(true);
    }

    return (
        <UserContext.Provider value={{ user, login, logout, signup, loggedIn, currentUser }}>{ children }</UserContext.Provider>
    )

}

export { UserContext, UserProvider };