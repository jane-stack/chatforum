import { useContext } from "react";
import Topic from "../components/Topic";
import { TopicContext } from "../context/TopicContext";

function TopicList() {
    const { topics } = useContext(TopicContext);

    // rendering topics
    const renderTopics = topics.map(topic => {
        return (
            <Topic
                key={topic.id}
                topic={topic}
                name={topic.name}
                description={topic.description}
                creator={topic.creator}
                chat={topic.chat}
            />
        )
    })

    return (
        <div>
            <ul className="ul-post">
                { renderTopics }
            </ul>
        </div>
    )
}

export default TopicList;