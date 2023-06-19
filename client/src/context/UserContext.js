import { createContext, useEffect, useState } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        fetch('/me')
        .then(resp => resp.json())
        .then(data => {
            if (!data.errors) {
                loggedIn(data)
            } else {
                
            }
        })
    })
}