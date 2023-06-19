import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ErrorsContext } from "../context/ErrorsContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function LoginForm() {
    const { login } = useContext(UserContext);
    const { setErrors } = useContext(ErrorsContext);
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const navigate = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors);
                setUsername("");
                setPassword("");
            } else {
                login(data);
                setErrors([]);
                navigate.push("/")
            }
        })
    }


    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h3>Login to BlogSpace</h3>
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
            <button type="submit">Log Me In</button>
            <Errors />
        </form>
    )
}

export default LoginForm;