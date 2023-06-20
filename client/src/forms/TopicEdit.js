import { useState } from "react";

function TopicEdit({ topic, editTopic, editMode, setEditMode }) {
    const initialState = {
        name: topic.name,
        description: topic.description
    }
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/topics/${topic.id}`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            editTopic(data)
            setEditMode(!editMode);
        })

    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <div className="new-post">
            Name &nbsp;
            <input className="post-input" type="text" name="name" value={ formData.name } onChange={ handleChange }/>
            <textarea className="post-input-description" type="textbox" name="description" value={ formData.description } onChange={ handleChange }/>
            <br />
            <button type="submit" className="contact-btn">POST</button>
            </div>
        </form>
    )
}

export default TopicEdit;