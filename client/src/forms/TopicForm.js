import { useContext, useState } from "react";
import { ErrorsContext } from "../context/ErrorsContext";
import { useHistory } from "react-router-dom";
import { TopicContext } from "../context/TopicContext";
import Errors from "../errors/Errors";

function TopicForm() {
    const { setErrors } = useContext(ErrorsContext);
    const { addTopic } = useContext(TopicContext);
    const initialState = {
        name: "",
        description: ""
    }
    const [ formData, setFormData ] = useState(initialState);
    const navigate = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        }) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/topics', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                addTopic(data)
                setErrors([]);
                navigate.push('/topics');
            }
        })
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <h2>Create a New Topic</h2>
            <div className="new-post">
            Topic Title &nbsp;
            <input className="post-input" type="text" name="name" id="name" value={ formData.name } onChange={ handleChange }/>
            What is your topic of discussion? &nbsp;
            <textarea className="post-input-description" type="textbox" name="description" id="description" value={ formData.description } onChange={ handleChange }/>
            <br />
            <button type="submit" className="contact-btn">POST</button>
            </div>
            <Errors/>
        </form>
    )
}

export default TopicForm;