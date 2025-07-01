import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import DescripcionProyecto from './pages/DescripcionProyecto';
import ConsultarCosechas from './pages/ConsultarCosechas';
import CargarCosechas from './pages/CargarCosechas';
import MiembrosAsociacion from './pages/MiembrosAsociacion';
import CRMOportunidades from './pages/CRMOportunidades';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/react-app" replace />} />
            <Route path="/react-app" element={<Home />} />
            <Route path="/descripcion" element={<DescripcionProyecto />} />
            <Route path="/consultar-cosechas" element={<ConsultarCosechas />} />
            <Route path="/cargar-cosechas" element={<CargarCosechas />} />
            <Route path="/miembros" element={<MiembrosAsociacion />} />
            <Route path="/crm" element={<CRMOportunidades />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
