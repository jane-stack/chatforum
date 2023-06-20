import { useState } from "react";
import Topic from "./Topic";

function TopicList({ topics, deleteTopic }) {
    const [select, setSelect] = useState({});

    // handle select topic
    const onTopicClick = (selected) => {
        setSelect(selected);
    }

    // rendering topics
    const renderTopics = topics.map(topic => {
        return (
            <Topic
                key={topic.id}
                topic={topic}
                deleteTopic={deleteTopic}
                select={select}
                onTopicClick={onTopicClick}
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