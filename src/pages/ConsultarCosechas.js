import React, { useState } from 'react';
import './PageStyles.css';

const ConsultarCosechas = () => {
  const [searchFilters, setSearchFilters] = useState({
    cultivo: '',
    cantidadMin: '',
    cantidadMax: '',
    municipio: '',
    estado: ''
  });
  
  // Datos de ejemplo expandidos
  const cosechas = [
    {
      id: 1,
      cultivo: 'Papa',
      fechaSiembra: '2024-01-15',
      fechaCosecha: '2024-04-15',
      cantidadTotal: 2000,
      cantidadDisponible: 1500,
      ubicacion: 'Finca El Progreso',
      municipio: 'Zipaquirá',
      estado: 'Cosechado',
      compradoresInteresados: 3,
      nombreCompradores: ['Supermercados El Agricultor', 'Distribuidora Regional', 'Mercado Central']
    },
    {
      id: 2,
      cultivo: 'Maíz',
      fechaSiembra: '2024-02-01',
      fechaCosecha: '2024-06-01',
      cantidadTotal: 1000,
      cantidadDisponible: 800,
      ubicacion: 'Parcela Norte',
      municipio: 'Chía',
      estado: 'En crecimiento',
      compradoresInteresados: 1,
      nombreCompradores: ['Cooperativa Agrícola']
    },
    {
      id: 3,
      cultivo: 'Tomate',
      fechaSiembra: '2024-01-20',
      fechaCosecha: '2024-05-20',
      cantidadTotal: 2500,
      cantidadDisponible: 2000,
      ubicacion: 'Invernadero 1',
      municipio: 'Facatativá',
      estado: 'Cosechado',
      compradoresInteresados: 5,
      nombreCompradores: ['Restaurante Gourmet', 'Supermercados El Agricultor', 'Mercado Local', 'Distribuidora Norte', 'Exportadora Colombiana']
    },
    {
      id: 4,
      cultivo: 'Frijol',
      fechaSiembra: '2024-01-10',
      fechaCosecha: '2024-04-10',
      cantidadTotal: 1500,
      cantidadDisponible: 1200,
      ubicacion: 'Finca San José',
      municipio: 'Soacha',
      estado: 'Cosechado',
      compradoresInteresados: 2,
      nombreCompradores: ['Mercado Mayorista', 'Distribuidora Regional']
    },
    {
      id: 5,
      cultivo: 'Yuca',
      fechaSiembra: '2024-02-15',
      fechaCosecha: '2024-08-15',
      cantidadTotal: 1200,
      cantidadDisponible: 900,
      ubicacion: 'Parcela Sur',
      municipio: 'Fusagasugá',
      estado: 'En desarrollo',
      compradoresInteresados: 0,
      nombreCompradores: []
    },
    {
      id: 6,
      cultivo: 'Papa',
      fechaSiembra: '2024-03-01',
      fechaCosecha: '2024-07-01',
      cantidadTotal: 3000,
      cantidadDisponible: 2500,
      ubicacion: 'Hacienda La Esperanza',
      municipio: 'Zipaquirá',
      estado: 'En crecimiento',
      compradoresInteresados: 4,
      nombreCompradores: ['Supermercados El Agricultor', 'Exportadora Andina', 'Mercado Central', 'Distribuidora Premium']
    }
  ];

  const handleFilterChange = (filterName, value) => {
    setSearchFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const filteredCosechas = cosechas.filter(cosecha => {
    const matchesCultivo = !searchFilters.cultivo || 
      cosecha.cultivo.toLowerCase().includes(searchFilters.cultivo.toLowerCase());
    
    const matchesCantidadMin = !searchFilters.cantidadMin || 
      cosecha.cantidadDisponible >= parseInt(searchFilters.cantidadMin);
    
    const matchesCantidadMax = !searchFilters.cantidadMax || 
      cosecha.cantidadDisponible <= parseInt(searchFilters.cantidadMax);
    
    const matchesMunicipio = !searchFilters.municipio || 
      cosecha.municipio.toLowerCase().includes(searchFilters.municipio.toLowerCase());
    
    const matchesEstado = !searchFilters.estado || 
      cosecha.estado === searchFilters.estado;

    return matchesCultivo && matchesCantidadMin && matchesCantidadMax && 
           matchesMunicipio && matchesEstado;
  });

  const clearFilters = () => {
    setSearchFilters({
      cultivo: '',
      cantidadMin: '',
      cantidadMax: '',
      municipio: '',
      estado: ''
    });
  };

  const getCompradoresDisplay = (cosecha) => {
    if (cosecha.compradoresInteresados === 0) {
      return (
        <div className="compradores-info">
          <span className="compradores-count no-interest">0 interesados</span>
        </div>
      );
    }
    
    return (
      <div className="compradores-info">
        <span className="compradores-count">{cosecha.compradoresInteresados} interesados</span>
        <div className="compradores-list">
          {cosecha.nombreCompradores.slice(0, 2).map((comprador, index) => (
            <div key={index} className="comprador-item">{comprador}</div>
          ))}
          {cosecha.nombreCompradores.length > 2 && (
            <div className="comprador-item more">+{cosecha.nombreCompradores.length - 2} más</div>
          )}
        </div>
      </div>
    );
  };

  const getDisponibilidadDisplay = (cosecha) => {
    const porcentajeDisponible = ((cosecha.cantidadDisponible / cosecha.cantidadTotal) * 100).toFixed(1);
    return (
      <div className="disponibilidad-info">
        <span className="cantidad-disponible">{cosecha.cantidadDisponible.toLocaleString()}</span>
        <div className="porcentaje-disponible">
          {porcentajeDisponible}% disponible
        </div>
      </div>
    );
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Consultar Cosechas</h1>
        <p className="page-subtitle">DEMO: Funcionalidad para comerciales y cooperativas</p>
      </div>
      
      <div className="content-section">
        <div className="advanced-filters">
          <h3>Filtros de Búsqueda</h3>
          <div className="filters-grid">
            <div className="filter-group">
              <label>Tipo de Cultivo</label>
              <input
                type="text"
                placeholder="Ej: Papa, Maíz..."
                value={searchFilters.cultivo}
                onChange={(e) => handleFilterChange('cultivo', e.target.value)}
                className="filter-input"
              />
            </div>
            
            <div className="filter-group">
              <label>Cantidad Mínima (Kg)</label>
              <input
                type="number"
                placeholder="0"
                value={searchFilters.cantidadMin}
                onChange={(e) => handleFilterChange('cantidadMin', e.target.value)}
                className="filter-input"
              />
            </div>
            
            <div className="filter-group">
              <label>Cantidad Máxima (Kg)</label>
              <input
                type="number"
                placeholder="999999"
                value={searchFilters.cantidadMax}
                onChange={(e) => handleFilterChange('cantidadMax', e.target.value)}
                className="filter-input"
              />
            </div>
            
            <div className="filter-group">
              <label>Municipio</label>
              <input
                type="text"
                placeholder="Ej: Zipaquirá, Chía..."
                value={searchFilters.municipio}
                onChange={(e) => handleFilterChange('municipio', e.target.value)}
                className="filter-input"
              />
            </div>
            
            <div className="filter-group">
              <label>Estado</label>
              <select
                value={searchFilters.estado}
                onChange={(e) => handleFilterChange('estado', e.target.value)}
                className="filter-input"
              >
                <option value="">Todos los estados</option>
                <option value="Cosechado">Cosechado</option>
                <option value="En crecimiento">En crecimiento</option>
                <option value="En desarrollo">En desarrollo</option>
                <option value="Siembra">Siembra</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label>&nbsp;</label>
              <button onClick={clearFilters} className="btn-secondary btn-clear">
                Limpiar Filtros
              </button>
            </div>
          </div>
        </div>

        <div className="results-summary">
          <p>Mostrando {filteredCosechas.length} de {cosechas.length} cosechas</p>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Cultivo</th>
                <th>Fecha Siembra</th>
                <th>Fecha Cosecha</th>
                <th>Cantidad Total (Kg)</th>
                <th>Cantidad Disponible (Kg)</th>
                <th>Municipio</th>
                <th>Compradores Interesados</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {filteredCosechas.map(cosecha => (
                <tr key={cosecha.id}>
                  <td className="cultivo-cell">
                    <strong>{cosecha.cultivo}</strong>
                    <div className="ubicacion-detail">{cosecha.ubicacion}</div>
                  </td>
                  <td>{cosecha.fechaSiembra}</td>
                  <td>{cosecha.fechaCosecha}</td>
                  <td className="cantidad-cell">
                    <span className="cantidad-total">{cosecha.cantidadTotal.toLocaleString()}</span>
                  </td>
                  <td className="cantidad-cell">
                    {getDisponibilidadDisplay(cosecha)}
                  </td>
                  <td className="municipio-cell">{cosecha.municipio}</td>
                  <td className="compradores-cell">
                    {getCompradoresDisplay(cosecha)}
                  </td>
                  <td>
                    <span className={`status ${cosecha.estado === 'Cosechado' ? 'completed' : cosecha.estado === 'En crecimiento' ? 'pending' : 'development'}`}>
                      {cosecha.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredCosechas.length === 0 && (
            <div className="no-results">
              <p>No se encontraron cosechas que coincidan con los filtros aplicados.</p>
              <button onClick={clearFilters} className="btn-primary">
                Limpiar Filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultarCosechas; 