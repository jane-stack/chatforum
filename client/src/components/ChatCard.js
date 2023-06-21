import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import ChatEdit from "../forms/ChatEdit";

function ChatCard({ chat, topic, deleteComment, editChat }) {
    const { user } = useContext(UserContext);
    const { id } = chat;
    const [editMode, setEditMode] = useState(false);
    const openEditMode = () => setEditMode(true);

    const deleteClick = () => {
        fetch(`/topics/${topic.id}/chats/${id}`, {
            method: "DELETE",
        })
        deleteComment(id)
    }

    return (
        <div>
            <ul>
                <p><strong>{ chat.user.username }:</strong> { chat.content }</p>
            </ul>
            {user && user.username === chat.user.username && (
                <div className="chat-btn">
                <button className="delete-btn" onClick={deleteClick}>Delete</button>
                <button className="edit-btn" onClick={openEditMode}>Edit</button>
                </div>
            )}
            { editMode && <ChatEdit chat={chat} topic={topic} editChat={editChat} editMode={editMode} setEditMode={setEditMode} /> }
        </div>
    )
}

export default ChatCard;