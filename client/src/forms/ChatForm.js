// import { useContext, useState } from "react";
// import { ErrorsContext } from "../context/ErrorsContext";
// import { UserContext } from "../context/UserContext";
// import { useHistory } from "react-router-dom";

function ChatForm() {
    // const { setErrors } = useContext(ErrorsContext);
    // const { loggedIn } = useContext(UserContext);
    // const navigate = useHistory();
    // const [content, setContent] = useState("");

    // useEffect(() => {
    //     if (!loggedIn) {
    //         navigate.push('/')
    //     } else {
    //         return (
    //             setErrors([])
    //         )
    //     }
    // }, [loggedIn, navigate, setErrors])

    return (
        <form className="post-form">
            <input type="text" name="content" placeholder="Write your comment." />
            <button type="submit">SEND</button>
        </form>
    )
}

export default ChatForm;