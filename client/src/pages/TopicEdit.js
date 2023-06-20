import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";


function TopicEdit({ topic, editTopic, isEditing, setIsEditing }) {
    const { editTopic } = useContext(UserContext);
    const [ name, setName ] = useState(topic.name);
    const [ description, setDescription ] = useState(topic.description);
    const navigate = useHistory();
    const closeEditForm = () => setIsEditing(!isEditing);

    const handleSubmit = (e) => {
        e.preventDefault();
        const editedTopic = {
            name: name,
            description: description
        }
        fetch(`/topics/${topic.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedTopic)
        })
        .then(resp => resp.json())
        .then(editTopic(editedTopic))

        navigate.push("/topics")
        closeEditForm();
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <h2>Edit Your Topic</h2>
            <div className="new-post">
            Name &nbsp;
            <input className="post-input" type="text" name="name" id="name" value={ name } onChange={ (e) => setName(e.target.value) }/>
            <textarea className="post-input-description" type="textbox" name="description" id="description" value={ description } onChange={ (e) => setDescription(e.target.value) }/>
            <br />
            <button type="submit" className="contact-btn">POST</button>
            </div>
        </form>
    )
}

export default TopicEdit;