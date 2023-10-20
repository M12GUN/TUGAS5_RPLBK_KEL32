// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PokeProvider } from './PokeContext';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

function App() {
  return (
    <PokeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />} />
        </Routes>
      </Router>
    </PokeProvider>
  );
}

export default App;
