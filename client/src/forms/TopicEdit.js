import { useContext, useState } from "react";
import { ErrorsContext } from "../context/ErrorsContext";
import Errors from "../errors/Errors";

function TopicEdit({ topic, editTopic, editMode, setEditMode }) {
    const initialState = {
        name: topic.name,
        description: topic.description
    }
    const { setErrors } = useContext(ErrorsContext);
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
            if (data.errors) {
                setErrors(data.errors)
            } else {
                editTopic(data)
                setErrors([]);
                setEditMode(!editMode)
            }
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
            <Errors />
        </form>
    )
}

export default TopicEdit;