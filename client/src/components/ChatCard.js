import { useContext } from "react";
// import { TopicContext } from "../context/TopicContext";
import { UserContext } from "../context/UserContext";

function ChatCard({ chat }) {
    const { user } = useContext(UserContext);
    // const { topics } = useContext(TopicContext);
    // const id = topics.find(topic => topic.id === id);

    // const commentDeleteClick = () => {
    //     fetch(`/topics/${id}/comments/${chat.id}`, {
    //         method: "DELETE",
    //     })
    //     .then(resp => resp.json())
    //     .then(data => deleteComment(data))
    // }

    return (
        <div>
            <ul>
                <p><strong>{ chat.user.username }:</strong> { chat.content }</p>
            </ul>
            {user && user.username === chat.user.username && (
                <div className="chat-btn">
                <button className="delete-btn" onClick={() => console.log("CLICKED")}>Delete</button>
                <button className="edit-btn" onClick={() => console.log("CLICKED")}>Edit</button>
                </div>
            )}
        </div>
    )
}

export default ChatCard;