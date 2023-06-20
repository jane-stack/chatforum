import { useContext } from "react";
import Topic from "./Topic";
import { TopicContext } from "../context/TopicContext";

function TopicList() {
    const { topics } = useContext(TopicContext);

    // rendering topics
    const renderTopics = topics.map(topic => {
        return (
            <Topic
                key={topic.id}
                topic={topic}
            />
        )
    })

    return (
        <div>
            <ul>
                { renderTopics }
            </ul>
        </div>
    )
}

export default TopicList;