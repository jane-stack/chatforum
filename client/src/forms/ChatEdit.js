import { useState } from "react";
// import { ErrorsContext } from "../context/ErrorsContext";

function ChatEdit({ chat, topic, editChat, editMode, setEditMode }) {
    // const { setErrors } = useContext(ErrorsContext);
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
        .then(editChat(editComment))
        setEditMode(!editMode)
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <div className="new-post">
            <textarea className="chat-textarea" type="text" name="content" placeholder="Write your comment." value={content} onChange={(e) => setContent(e.target.value)} /><br/>
            <button type="submit">SEND</button>
            </div>
        </form>
    )
}

export default ChatEdit;