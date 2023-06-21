import { useContext, useState } from "react";
import { ErrorsContext } from "../context/ErrorsContext";
import Errors from "../errors/Errors";

function ChatForm({ topic, addComment }) {
    const { setErrors } = useContext(ErrorsContext);
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            content: content
        }
        fetch(`/topics/${topic.id}/chats`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newComment)
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                addComment(data)
            }
        })
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <div className="new-post">
            <textarea className="chat-textarea" type="text" name="content" placeholder="Write your comment." value={content} onChange={(e) => setContent(e.target.value)} /><br/>
            <button type="submit">SEND</button>
            </div>
            <Errors/>
        </form>
    )
}

export default ChatForm;