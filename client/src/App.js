import './App.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch, Route } from "react-router-dom";
import Navbar from './pages/Navbar';
import Topic from './pages/Topic';

function App() {
  const [ showLogin, setShowLogin ] = useState(true);

  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <div>
        
      </div>
      <Switch>
        <Route path="/"><Topic /></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
