import { useContext, useEffect, useState } from "react";
import { ErrorsContext } from "../context/ErrorsContext";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";
import { TopicContext } from "../context/TopicContext";

function TopicForm() {
    const { setErrors } = useContext(ErrorsContext);
    const { loggedIn } = useContext(UserContext);
    const { addTopic } = useContext(TopicContext);
    const initialState = {
        name: "",
        description: ""
    }
    const [ formData, setFormData ] = useState(initialState);
    const navigate = useHistory();

    useEffect(() => {
        if (!loggedIn) {
            navigate.push('/')
        } else {
            return (
                setErrors([])
            )
        }
    }, [ loggedIn, navigate, setErrors ])

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
                navigate.push('/topics');
            }
        })
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <h2>Create a New Topic</h2>
            <div className="new-post">
            Name &nbsp;
            <input className="post-input" type="text" name="name" id="name" value={ formData.name } onChange={ handleChange }/>
            <textarea className="post-input-description" type="textbox" name="description" id="description" value={ formData.description } onChange={ handleChange }/>
            <br />
            <button type="submit" className="contact-btn">POST</button>
            </div>
        </form>
    )
}

export default TopicForm;