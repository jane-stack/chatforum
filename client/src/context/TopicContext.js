import { createContext, useEffect, useState } from "react";

const TopicContext = createContext([]);
const TopicProvider = ({ children }) => {
    const [ topics, setTopics ] = useState([]);

    // fetching all the topics
    useEffect(() => {
        fetch('/topics')
        .then(resp => resp.json())
        .then(topics => setTopics(topics))
    }, []);

      // handles add new topic
  const addTopic = (newTopic) => {
    setTopics([...topics, newTopic]);
  }

    // handles deleting a topic
    const deleteTopic = (id) => {
        const updatedTopicList = topics.filter(topic => topic.id !== id)
        setTopics(updatedTopicList);
      }

    // handles editing a topic
  const editTopic = (updatedTopic) => {
    const updatedTopicList = topics.map(topic => {
      if (topic.id === updatedTopic.id) {
        return updatedTopic
      } else {
        return topic;
      }
    });
    setTopics(updatedTopicList);
  }

    return <TopicContext.Provider value={{ topics, addTopic, deleteTopic, editTopic }}>{ children }</TopicContext.Provider>
}

export { TopicContext, TopicProvider }