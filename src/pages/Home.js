import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Bienvenido a AgriApp Cundinamarca</h1>
          <p>
            Sistema integral para la gestión agrícola de la región de Cundinamarca. 
            Administra cosechas, miembros de la asociación y oportunidades comerciales.
          </p>
          <div className="home-features">
            <div className="feature-card">
              <h3>🌾 Gestión de Cosechas</h3>
              <p>Registra y consulta información detallada sobre tus cosechas</p>
            </div>
            <div className="feature-card">
              <h3>👥 Miembros</h3>
              <p>Administra los miembros de tu asociación agrícola</p>
            </div>
            <div className="feature-card">
              <h3>💼 CRM</h3>
              <p>Gestiona oportunidades comerciales y clientes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 