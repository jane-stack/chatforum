import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { TopicContext } from "../context/TopicContext";
import TopicEdit from "./TopicEdit";

function Topic({ topic, name, description, creator }) {
    const { deleteTopic } = useContext(TopicContext);
    const [editMode, setEditMode] = useState(false);
    const openEditMode = () => {
        setEditMode(true);
    }

    // handles delete topic click
    const handleDelete = () => {
        fetch(`/topics/${topic.id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(deleteTopic(topic.id))
    }

    return (
        <div className="topic-div">
            <div className="box">
                <h3><NavLink className="title-link" to={`/topics/${topic.id}`}>{ name }</NavLink></h3>
                <p className="creator-text">{ creator.username }</p>
                <p>{ description }</p>
                <button className="edit-btn" onClick={openEditMode}>Edit</button>
                <button className="delete-btn" onClick={handleDelete}>Delete</button>
                { editMode && <TopicEdit topic={topic} /> }
            </div>
        </div>
    )
}

export default Topic;