import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch, Route } from "react-router-dom";
import Navbar from './pages/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
