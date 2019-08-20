import React, { useState, useEffect } from 'react';
import './App.css';
import ReactJson from 'react-json-view';
import Axios from 'axios';

function App() {
  const [list, setList] = useState('');
  useEffect(() => {
    Axios.get('/api').then(result => setList(result.data));
  }, []);

  return (
    <div>
      <h1>hello world</h1>
      <ReactJson src={list} theme="hop scotch" />
    </div>
  );
}

export default App;
