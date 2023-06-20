import { useState } from "react";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";

function LoginPage() {
    const [ showLogin, setShowLogin ] = useState(true);

    return (
        <div>
            {showLogin ? (
                <>
                <LoginForm />
                <p className='words'>Join ChatSpace? &nbsp;
                    <button onClick={() => setShowLogin(false)}>Signup</button>
                </p>
                </>
            ):(
                <>
                <SignupForm />
                <p className='words'>Already a member? &nbsp;
                    <button onClick={() => setShowLogin(true)}>Login</button>
                </p>
                </>
            )}
        </div>
    )
}

export default LoginPage;