import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import { Routes, BrowserRouter, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
      </Route>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

