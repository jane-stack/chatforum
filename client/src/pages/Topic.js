import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { TopicContext } from "../context/TopicContext";

function Topic({ topic }) {
    const { deleteTopic } = useContext(TopicContext);
    const navigate = useHistory();


    // handles delete topic click
    const handleDelete = () => {
        fetch(`/topics/${topic.id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(deleteTopic(topic.id))
    }

    // const editButton = () => {
    //     return (
    //         <topicEdit
    //         />
    //     )
    // }

    return (
        <div className="topic-div">
            <div className="box">
                <h3><NavLink to="/content" className="title-link">{ topic.name }</NavLink></h3>
                <p>{ topic.description }</p>   
                <button className="edit-btn" onClick={() => navigate.push(`/topics/${ topic.id }/edit`)}>Edit</button>
                <button className="delete-btn" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Topic;