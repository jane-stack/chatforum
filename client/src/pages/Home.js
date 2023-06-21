import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Home() {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h3 className="App">Welcome { user.username }!</h3>
            <h5>You are visiting Tuyen's phase four ChatSpace project.</h5>
            <div className="home-page">
            <p>In this application, you can sign up with your own username and password or signin if you've already joined ChatSpace. As a user, you are able to post a question up for discussion. Other users can comment on your topic and vice-versa!</p>     
            </div>
        </div>
    )
}

export default Home;