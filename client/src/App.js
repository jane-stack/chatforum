import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import TopicForm from './pages/TopicForm';
import TopicList from './pages/TopicList';
import TopicEdit from './pages/TopicEdit';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Switch>
        <Route path="/home"><Home /></Route>
        <Route path="/new"><TopicForm /></Route>
        <Route path="/topics"><TopicList /></Route>
        <Route path="/topics/:id/edit"><TopicEdit /></Route>
        <Route path="/"><LoginPage /></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
