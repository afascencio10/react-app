import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const routes = [
    {
      path: '/descripcion',
      title: 'Descripción del Proyecto',
      description: 'Conoce más sobre nuestra plataforma y sus beneficios por rol',
      icon: '📋',
      color: '#3498db'
    },
    {
      path: '/consultar-cosechas',
      title: 'Consultar Cosechas',
      description: 'Busca y filtra cosechas disponibles en el sistema',
      icon: '🔍',
      color: '#27ae60'
    },
    {
      path: '/cargar-cosechas',
      title: 'Cargar Cosechas',
      description: 'Registra nuevas cosechas en el sistema',
      icon: '📤',
      color: '#f39c12'
    },
    {
      path: '/miembros',
      title: 'Miembros Asociación',
      description: 'Gestiona los miembros de la asociación agrícola',
      icon: '👥',
      color: '#9b59b6'
    },
    {
      path: '/crm',
      title: 'CRM Oportunidades',
      description: 'Administra oportunidades comerciales y relaciones con compradores',
      icon: '💼',
      color: '#e74c3c'
    }
  ];

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>DEMO: Plataforma de comercializacion agricultura By Kloustr Labs</h1>
          <p>
            Sistema integral para la gestión agrícola de la región de Cundinamarca. 
            Administra cosechas, miembros de la asociación y oportunidades comerciales.
          </p>
          
          <div className="navigation-cards">
            <h2>Explora el proyecto y las funcionalidades</h2>
            <div className="routes-grid">
              {routes.map((route) => (
                <Link key={route.path} to={route.path} className="route-card">
                  <div className="route-card-content">
                    <div className="route-icon" style={{ backgroundColor: route.color }}>
                      {route.icon}
                    </div>
                    <h3>{route.title}</h3>
                    <p>{route.description}</p>
                    <div className="route-arrow">→</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Home; 