import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/test" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;