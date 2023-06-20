import { useContext} from "react";
import { TopicContext } from "../context/TopicContext";
import { useParams } from "react-router-dom";
import ChatCard from "../components/ChatCard";
import ChatForm from "../forms/ChatForm";

function Content() {
    const { topics } = useContext(TopicContext);
    // const [comments, setComments] = useState([]);
    const id = parseInt(useParams().id);
    const topic = topics.find(topic => topic.id === id);
    const chats = topic.chats.map(chat => <ChatCard key={chat.id} chat={chat} />)

    // handle add new comments into chats
    // const addComment = (newComment) => {
    //     setComments([...comments, newComment]);
    // }

    return (
        <div>
            <h2>{ topic.name }</h2>
            <p><strong>{ topic.creator.username }</strong></p>
            <p>{ topic.description }</p>
            <ChatForm />
            <h3>Chats:</h3>
            <div className="chat-box">
            <ul className="ul-post">{ chats }</ul>
            </div>
        </div>
    )
}

export default Content;