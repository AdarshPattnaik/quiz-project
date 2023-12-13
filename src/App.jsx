import React from 'react';
import Welcome from './routes/Welcome';
import Home from './routes/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};