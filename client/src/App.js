import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Topic from './pages/Topic';
import LoginPage from './pages/LoginPage';
import { useEffect, useState } from 'react';
import TopicForm from './pages/TopicForm';

function App() {
  const [ topics, setTopics ] = useState([]);

  // fetching all the topics
  useEffect(() => {
    fetch('/topics')
    .then(resp => resp.json())
    .then(data => {
      setTopics(data)
    })
  }, [])

  // rendering topics
  const renderTopics = topics.map(topic => {
    return (
      <Topic
        key={ topic.id }
        name={ topic.name }
        description = { topic.description }
      />
    )
  })

  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Switch>
        <Route path="/topics">{ renderTopics }</Route>
        <Route path="/"><LoginPage /></Route>
        <Route path="/new"><TopicForm /></Route>
        <Route path="/home"><Home /></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
