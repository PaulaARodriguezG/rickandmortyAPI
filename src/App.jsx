import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from './components/List';
import PersonajeDetails from './pages/PersonajeDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/personaje/:id" element={<PersonajeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

