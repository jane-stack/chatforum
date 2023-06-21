import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { TopicContext } from "../context/TopicContext";
import TopicEdit from "../forms/TopicEdit";
import { UserContext } from "../context/UserContext";

function Topic({ topic, name, description, creator }) {
    const { user } = useContext(UserContext);
    const { deleteTopic, editTopic } = useContext(TopicContext);
    const [editMode, setEditMode] = useState(false);
    const openEditMode = () => setEditMode(editMode => !editMode);

    // handles delete topic click
    const handleDelete = () => {
        fetch(`/topics/${topic.id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(deleteTopic(topic.id))
    }

    return (
        <div className="box">
            <h3><NavLink className="title-link" to={`/topics/${topic.id}`}>{ name }</NavLink></h3>
            <p className="creator-text">{ creator.username }</p>
            <p>{ description }</p>
            { user && user.username === creator?.username && (
                <>
                <button className="edit-btn" onClick={openEditMode}>Edit</button>
                <button className="delete-btn" onClick={handleDelete}>Delete</button>
                </>
            )}
            { editMode && <TopicEdit topic={topic} editTopic={editTopic} editMode={editMode} setEditMode={setEditMode} /> }
        </div>
    )
}

export default Topic;