import { useContext, useState, useEffect } from "react";
import { ErrorsContext } from "../context/ErrorsContext";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";
import Errors from "../errors/Errors";

function SignupForm() {
    const { setErrors } = useContext(ErrorsContext);
    const { signup, login, loggedIn } = useContext(UserContext);
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const navigate = useHistory();

    useEffect(() => {
        if (loggedIn) {
            navigate.push('/home')
        } else {
            return (
                setErrors([])
            )
        }
    }, [ loggedIn, navigate, setErrors ])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors);
                setUsername("");
                setPassword("");
            } else {
                signup(data);
                login(data);
                navigate.push('/home');
            }
        })
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3>Create an Account with ChatSpace</h3>
            <div>
            Username &nbsp;
            <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={ (e) => setUsername(e.target.value) }
            required={true}
            />
            </div>
            <div>
            Password &nbsp;
            <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={ (e) => setPassword(e.target.value) }
            required={true}
            />
            </div>
            <button type="submit">Sign me up!</button>
            <Errors />
        </form>
    )
}

export default SignupForm;