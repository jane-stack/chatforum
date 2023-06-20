import { useContext, useState } from "react";
import { ErrorsContext } from "../context/ErrorsContext";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";

function TopicForm() {
    const { setErrors } = useContext(ErrorsContext);
    const { loggedIn } = useContext(UserContext);
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
        
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <h2>Create a New Topic</h2>
            <div className="newpost">
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