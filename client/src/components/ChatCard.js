import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function ChatCard({ chat, topic, deleteComment }) {
    const { user } = useContext(UserContext);
    const { id } = chat;

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
                <button className="edit-btn" onClick={() => console.log("CLICKED")}>Edit</button>
                </div>
            )}
        </div>
    )
}

export default ChatCard;