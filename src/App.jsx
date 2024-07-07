import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Daily from './components/pages/daily';
import Task from './components/pages/task';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Task />} />
          <Route path="daily" element={<Daily/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
