import React, { useState } from 'react';
import './PageStyles.css';

const CargarCosechas = () => {
  const [formData, setFormData] = useState({
    cultivo: '',
    fechaSiembra: '',
    fechaCosecha: '',
    cantidad: '',
    ubicacion: '',
    observaciones: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se enviarían los datos al backend
    console.log('Datos de cosecha:', formData);
    alert('Cosecha registrada exitosamente!');
    // Limpiar formulario
    setFormData({
      cultivo: '',
      fechaSiembra: '',
      fechaCosecha: '',
      cantidad: '',
      ubicacion: '',
      observaciones: ''
    });
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Cargar Cosechas</h1>
        <p className="page-subtitle">DEMO: Funcionalidad para productores agriculos</p>
      </div>
      
      <div className="content-section">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="data-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cultivo">Tipo de Cultivo *</label>
                <select
                  id="cultivo"
                  name="cultivo"
                  value={formData.cultivo}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">Selecciona un cultivo</option>
                  <option value="Papa">Papa</option>
                  <option value="Maíz">Maíz</option>
                  <option value="Tomate">Tomate</option>
                  <option value="Frijol">Frijol</option>
                  <option value="Yuca">Yuca</option>
                  <option value="Plátano">Plátano</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="ubicacion">Ubicación *</label>
                <input
                  type="text"
                  id="ubicacion"
                  name="ubicacion"
                  value={formData.ubicacion}
                  onChange={handleChange}
                  required
                  placeholder="Ej: Finca El Progreso"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fechaSiembra">Fecha de Siembra *</label>
                <input
                  type="date"
                  id="fechaSiembra"
                  name="fechaSiembra"
                  value={formData.fechaSiembra}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="fechaCosecha">Fecha de Cosecha Estimada *</label>
                <input
                  type="date"
                  id="fechaCosecha"
                  name="fechaCosecha"
                  value={formData.fechaCosecha}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cantidad">Cantidad Estimada (Kg) *</label>
                <input
                  type="number"
                  id="cantidad"
                  name="cantidad"
                  value={formData.cantidad}
                  onChange={handleChange}
                  required
                  placeholder="Ej: 1500"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="observaciones">Observaciones</label>
              <textarea
                id="observaciones"
                name="observaciones"
                value={formData.observaciones}
                onChange={handleChange}
                placeholder="Notas adicionales sobre la cosecha..."
                rows={4}
                className="form-input"
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Registrar Cosecha
              </button>
              <button 
                type="button" 
                onClick={() => setFormData({
                  cultivo: '',
                  fechaSiembra: '',
                  fechaCosecha: '',
                  cantidad: '',
                  ubicacion: '',
                  observaciones: ''
                })}
                className="btn-secondary"
              >
                Limpiar Formulario
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CargarCosechas; 