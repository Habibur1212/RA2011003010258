import './App.css';
import useFetch from "./useFetch";
import { useState } from 'react';
import Home from './components/Home';
import Register from './components/register';
import Auth from './components/Auth';
import LandingPage from './components/LandingPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const { error, isPending, data: employees } = useFetch('')

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/dashboard" element={<LandingPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
