function ChatCard({ chat }) {


    return (
        <div>
            <ul>
                <p><strong>{ chat.user.username }:</strong> { chat.content }</p>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
            </ul>
        </div>
    )
}

export default ChatCard;