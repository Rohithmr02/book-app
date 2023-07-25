import React from 'react';
import './App.css';
import Main from './component/Main';
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import Cardinfo from './component/CardInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/:id' element={<Cardinfo/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
