import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import TopicForm from './forms/TopicForm';
import TopicList from './pages/TopicList';
import Content from './pages/Content';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Switch>
        <Route path="/home"><Home /></Route>
        <Route path="/topics/:id"><Content /></Route>
        <Route path="/new"><TopicForm /></Route>
        <Route path="/topics"><TopicList /></Route>
        <Route path="/"><LoginPage /></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
