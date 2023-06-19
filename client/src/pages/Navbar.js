import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
    const { logout, loggedIn } = useContext(UserContext);
    const navigate = useHistory();

    const logoutUser = () => {
        fetch('/logout', {
            method: "DELETE"
        })
        logout()
        navigate.push('/')
    }

    // if user is logged in:
    const userIn = () => {
        return (
            <>
            <NavLink to="#" className="nav-link" onClick={logoutUser}>Logout</NavLink>
            </>
        )
    }

    // if user is not logged in:
    const userOut = () => {
        return (
            <>
            <NavLink></NavLink>
            </>
        )
    }

    return (
        <div className="navbar">
            <div className="nav-title"><h1>ChatSpace</h1></div>
            { loggedIn ? userIn() : userOut() }
        </div>
    )
}

export default Navbar;