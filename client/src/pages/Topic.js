import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Topic({ topic,  deleteTopic, select, onTopicClick }) {
    const [isEditing, setIsEditing] = useState(false);
    const showEditForm = () => setIsEditing(isEditing => !isEditing);


    // handles delete topic click
    const handleDelete = () => {
        fetch(`/topics/${topic.id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(deleteTopic(topic.id))
    }

    const editButton = () => {
        onTopicClick(topic);
        return (
            <topicEdit
                select={select}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
            />
        )
    }

    return (
        <div className="topic-div">
            <div className="box">
                <h3><NavLink to="/content" className="title-link">{ topic.name }</NavLink></h3>
                <p>{ topic.description }</p>   
                <button className="edit-btn" onClick={showEditForm}>Edit</button>
                <button className="delete-btn" onClick={handleDelete}>Delete</button>
                { isEditing && editButton() }
            </div>
        </div>
    )
}

export default Topic;