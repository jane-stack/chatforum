function ChatCard({ chat }) {
    return (
        <div className="box">
            <p><strong>{ chat.user.username }:</strong> { chat.content }</p>
        </div>
    )
}

export default ChatCard;