import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function ChatCard({ chat, topic, deleteComment }) {
    const { user } = useContext(UserContext);

    const commentDeleteClick = () => {
        fetch(`/topics/${topic.id}/comments/${chat.id}`, {
            method: "DELETE",
        })
        deleteComment(chat.id)
    }

    return (
        <div>
            <ul>
                <p><strong>{ chat.user.username }:</strong> { chat.content }</p>
            </ul>
            {user && user.username === chat.user.username && (
                <div className="chat-btn">
                <button className="delete-btn" onClick={commentDeleteClick}>Delete</button>
                <button className="edit-btn" onClick={() => console.log("CLICKED")}>Edit</button>
                </div>
            )}
        </div>
    )
}

export default ChatCard;