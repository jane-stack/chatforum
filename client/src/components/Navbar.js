import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink, useHistory } from "react-router-dom";

function Navbar() {
    const { logout, loggedIn } = useContext(UserContext);
    const navigate = useHistory();

    // handles the logout button
    const logoutUser = () => {
        fetch('/logout', {
            method: "DELETE"
        })
        logout()
        navigate.push(`/`)
    }

    // // if user is logged in:
    const userIn = () => {
        return (
            <>
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/topics" className="nav-link">Topic</NavLink>
            <NavLink to="/new" className="nav-link">Create Topic</NavLink>
            <NavLink to="#" className="nav-link" onClick={logoutUser}>Logout</NavLink>
            </>
        )
    }

    // if user is not logged in:
    const userOut = () => {
        return (
            <></>
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