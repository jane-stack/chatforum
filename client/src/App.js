import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import { useContext } from 'react';
import TopicForm from './pages/TopicForm';
import { TopicContext } from './context/TopicContext';
import TopicList from './pages/TopicList';

function App() {
  const { topics, addTopic, deleteTopic } = useContext(TopicContext);

  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Switch>
        <Route path="/home">{<Home />}</Route>
        <Route path="/new">{<TopicForm addTopic={addTopic} />}</Route>
        <Route path="/topics"><TopicList topics={topics} deleteTopic={deleteTopic} /></Route>
        <Route path="/">{<LoginPage />}</Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
