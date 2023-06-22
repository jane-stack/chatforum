import { useContext, useEffect, useState } from "react";
import { TopicContext } from "../context/TopicContext";
import { useParams } from "react-router-dom";
import ChatCard from "../components/ChatCard";
import ChatForm from "../forms/ChatForm";

function Content() {
    const { topics } = useContext(TopicContext);
    const [chats, setChats] = useState([]);
    const id = parseInt(useParams().id);
    const topic = topics.find(topic => topic.id === id);

    // fetching chats for each topic
    useEffect(() => {
        fetch(`/topics/${topic.id}/chats`)
        .then(resp => resp.json())
        .then(data => setChats(data))
    }, [topic.id])
    
    // handle add new comments into chats
    const addComment = (newComment) => {
        setChats([...chats, newComment]);
    }
    
    // handle delete comments
    const deleteComment = (id) => {
        const updatedChatList = chats.filter(chat => chat.id !== id);
        setChats(updatedChatList);
    }

    // handle edit comments
    const editChat = (newComment) => {
        const updatedChatList = chats.map(chat => {
            if (chat.id === newComment.id) {
                return newComment
            } else {
                return chat;
            }
        });
        setChats(updatedChatList);
    }


    // renders the comments for each topic
    const renderChats = chats.map(chat => {
        return (
            <ChatCard
                key={chat.id}
                chat={chat}
                topic={topic}
                deleteComment={deleteComment}
                editChat={editChat}
            />
        )
    })
    
    return (
        <div>
            <div className="content-box">
                <div className="new-post">
                <h2>{ topic.name }</h2>
                <p><strong>{ topic.creator.username }</strong></p>
                <p>{ topic.description }</p>
                </div>
            </div>
            <div className="chat-box">
            <ul className="ul-post">
                { renderChats }
            </ul>
            </div>
            <ChatForm addComment={addComment} topic={topic} />
        </div>
    )
}

export default Content;