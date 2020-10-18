import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home}></Route>
      </Router>
    </div>
  );
}

export default App;
