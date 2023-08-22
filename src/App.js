import { useState } from 'react';
import './App.css';
import useFetch from './useFetch';

function App() {

  const { error, isPending, data: data } = useFetch('https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json')

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
