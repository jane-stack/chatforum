import { useContext } from "react";
import { TopicContext } from "../context/TopicContext";
import { useParams } from "react-router-dom";
import ChatCard from "./ChatCard";

function Content() {
    const { topics } = useContext(TopicContext);
    const id = parseInt(useParams().id);
    const topic = topics.find(topic => topic.id === id);
    const chats = topic.chats.map(chat => <ChatCard key={chat.id} chat={chat} />)
    return (
        <div>
            <h2>{ topic.name }</h2>
            <p><strong>{ topic.creator.username }</strong></p>
            <p>{ topic.description }</p>
            <h3>Chats:</h3>
            { chats }
        </div>
    )
}

export default Content;