import React, { useState } from 'react';
import './PageStyles.css';

const MiembrosAsociacion = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMember, setNewMember] = useState({
    nombre: '',
    cedula: '',
    telefono: '',
    email: '',
    finca: '',
    tipoMiembro: 'Activo'
  });

  // Datos de ejemplo
  const miembros = [
    {
      id: 1,
      nombre: 'Carlos Rodríguez',
      cedula: '12345678',
      telefono: '310-123-4567',
      email: 'carlos@email.com',
      finca: 'Finca El Progreso',
      tipoMiembro: 'Activo',
      fechaIngreso: '2023-01-15'
    },
    {
      id: 2,
      nombre: 'María González',
      cedula: '87654321',
      telefono: '320-987-6543',
      email: 'maria@email.com',
      finca: 'Parcela Norte',
      tipoMiembro: 'Activo',
      fechaIngreso: '2023-03-20'
    },
    {
      id: 3,
      nombre: 'Luis Martínez',
      cedula: '11223344',
      telefono: '300-555-1234',
      email: 'luis@email.com',
      finca: 'Hacienda San José',
      tipoMiembro: 'Fundador',
      fechaIngreso: '2022-12-01'
    }
  ];

  const filteredMiembros = miembros.filter(miembro =>
    miembro.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    miembro.cedula.includes(searchTerm)
  );

  const handleAddMember = (e) => {
    e.preventDefault();
    console.log('Nuevo miembro:', newMember);
    alert('Miembro agregado exitosamente!');
    setNewMember({
      nombre: '',
      cedula: '',
      telefono: '',
      email: '',
      finca: '',
      tipoMiembro: 'Activo'
    });
    setShowAddForm(false);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Miembros de la Asociación</h1>
        <p className="page-subtitle">DEMO: Funcionalidad para asociaciones y cooperativas</p>
      </div>
      
      <div className="content-section">
        <div className="actions-bar">
          <div className="search-section">
            <input
              type="text"
              placeholder="Buscar por nombre o cédula..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn-primary"
          >
            {showAddForm ? 'Cancelar' : 'Agregar Miembro'}
          </button>
        </div>

        {showAddForm && (
          <div className="form-container">
            <h3>Agregar Nuevo Miembro</h3>
            <form onSubmit={handleAddMember} className="data-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Nombre Completo *</label>
                  <input
                    type="text"
                    value={newMember.nombre}
                    onChange={(e) => setNewMember({...newMember, nombre: e.target.value})}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Cédula *</label>
                  <input
                    type="text"
                    value={newMember.cedula}
                    onChange={(e) => setNewMember({...newMember, cedula: e.target.value})}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Teléfono</label>
                  <input
                    type="tel"
                    value={newMember.telefono}
                    onChange={(e) => setNewMember({...newMember, telefono: e.target.value})}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={newMember.email}
                    onChange={(e) => setNewMember({...newMember, email: e.target.value})}
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Finca/Parcela</label>
                  <input
                    type="text"
                    value={newMember.finca}
                    onChange={(e) => setNewMember({...newMember, finca: e.target.value})}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Tipo de Miembro</label>
                  <select
                    value={newMember.tipoMiembro}
                    onChange={(e) => setNewMember({...newMember, tipoMiembro: e.target.value})}
                    className="form-input"
                  >
                    <option value="Activo">Activo</option>
                    <option value="Fundador">Fundador</option>
                    <option value="Honorario">Honorario</option>
                  </select>
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn-primary">Guardar Miembro</button>
              </div>
            </form>
          </div>
        )}

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cédula</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Finca</th>
                <th>Tipo</th>
                <th>Fecha Ingreso</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredMiembros.map(miembro => (
                <tr key={miembro.id}>
                  <td>{miembro.nombre}</td>
                  <td>{miembro.cedula}</td>
                  <td>{miembro.telefono}</td>
                  <td>{miembro.email}</td>
                  <td>{miembro.finca}</td>
                  <td>
                    <span className={`status ${miembro.tipoMiembro.toLowerCase()}`}>
                      {miembro.tipoMiembro}
                    </span>
                  </td>
                  <td>{miembro.fechaIngreso}</td>
                  <td>
                    <button className="btn-small btn-secondary">Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MiembrosAsociacion; 