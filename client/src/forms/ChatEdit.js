import { useState, useContext } from "react";
import { ErrorsContext } from "../context/ErrorsContext";
import Errors from "../errors/Errors";

function ChatEdit({ chat, topic, editChat, editMode, setEditMode }) {
    const { setErrors } = useContext(ErrorsContext);
    const [content, setContent] = useState(chat.content);

    const handleSubmit = (e) => {
        e.preventDefault();
        const editComment = {
            content: content
        }
        fetch(`/topics/${topic.id}/chats/${chat.id}`, {
            method: "PATCH",
            headers: { 
                "Accept": "application/json",
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(editComment)
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                editChat(data)
                setErrors([])
                setEditMode(!editMode)
            }
        })
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <div className="new-post">
            <textarea className="chat-textarea" type="text" name="content" value={content} onChange={(e) => setContent(e.target.value)} /><br/>
            <button type="submit">SEND</button>
            </div>
            <Errors />
        </form>
    )
}

export default ChatEdit;