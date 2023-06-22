import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Home() {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1 className="App">Welcome { user.username }!</h1>
            <h5>You are visiting Tuyen's phase four ChatSpace project.</h5>
            <div className="home-page">
            <h2>What is ChatSpace?</h2>
            <p>
                This is a chat forum where users can post any questions or topic they want, seeking help or answers. As a user, you can post your topic of discussion and you can reply to another user's topic.
            </p>
            <p>
            You will need to signup for an account with ChatSpace in order to access the contents. As you enter the page, a login box will appear. You can toggle between login and signup as necessary. Once logged in, you will be redirected to the homepage (this page). At the Navbar, you'll see Home, Topic, Create Topic, and Logout links. 
            </p>
            <p>
            Click on Topic and you'll be redirected to a list of all active topics. Click on the title to be redirected to the chat space for that topic. 
            </p>
            <p>
            Click on Create Topic to post a topic of your choice. Once a topic has been published, as the creator of the topic, you have the option to edit or delete your topic. The edit and delete buttons will only appear to the topic creator. No other users will see the edit and delete button on your post.
            </p>
            </div>
            <br/>
            <div className="home-page">
            <h2>Requirements:</h2>
            <p>Ruby Version 2.7.4</p>
            <p>NodeJS (v16), and npm</p>
            <p>Postgresql</p>
            <p>React-Router-Dom@5</p>
            </div>
            <br/>
            <div className="home-page">
            <h2>Getting Started:</h2>
            <p>Install Ruby</p>
            <p>Install NodeJS</p>
            <p>Install Postgresql</p>
            </div>
            <br/>
            <div className="home-page">
            <h2>Meeting Requirements:</h2>
            <p>Using a Rails API backend with a React frontend</p>
            <p>Backend includes three models implementing a many-to-many association with a joined table that includes a user_id and a topic_id.</p>
            <p>The backend follows RESTful routing convention.</p>
            <p>
            Users are able to sign up with a new account, log in with a secure password and stay logged in. In order to successfully create a users account, a user must choose a username and must choose a password that validates. Password must be at least 8 characters. Password must include a capital letter, a lowercase letter, a number, and a special character. Error messages will be passed upon violation of the validations.
            </p>
            <p>
            Users are able to create, edit, and delete their topics. Topic title and description cannot be empty. Error messages will be passed upon violation of the validations.
            </p>
            <p>
            Comments in the chat space can also be created, edited, and deleted. Users cannot post an empty comment. Error messages will be passed upon violation of the validation.
            </p>
            <p>
            React hook useContext is used to presist the logged in user object in the front end state.
            </p>
            </div>
            <br/>
            <button onClick={() => console.log("Deactivated Account")} className="acct-delete">Delete My Account</button>
            <br/><br/><br/><br/><br/>
        </div>
    )
}

export default Home;