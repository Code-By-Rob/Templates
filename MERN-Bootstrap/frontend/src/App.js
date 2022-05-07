import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import Navbar from './components/navbar.component';
import ComponentItem1 from './components/component-one.component';
import ComponentItem2 from './components/component-two.component';

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Routes>
        <Route path='/Link' exact component={ComponentItem1} />
        <Route path='/Link2' exact component={ComponentItem2} />
      </Routes>
    </Router>
  );
}

export default App;