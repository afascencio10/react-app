import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/react-app" className="nav-logo">
          AgriApp
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/react-app" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/descripcion" className="nav-link">
              Descripción del Proyecto
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/consultar-cosechas" className="nav-link">
              Consultar Cosechas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cargar-cosechas" className="nav-link">
              Cargar Cosechas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/miembros" className="nav-link">
              Miembros Asociación
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/crm" className="nav-link">
              Oportunidades Comerciales
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 