import React, { useState } from 'react';
import './PageStyles.css';

const CRMOportunidades = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('Todas');
  const [selectedOportunidad, setSelectedOportunidad] = useState(null);
  const [showTimelineModal, setShowTimelineModal] = useState(false);

  // Datos de ejemplo expandidos con productores y timeline
  const oportunidades = [
    {
      id: 1,
      cliente: 'Supermercados El Agricultor',
      producto: 'Papa',
      cantidad: 2000,
      valorEstimado: 4000000,
      estado: 'Negociación',
      fechaCreacion: '2024-01-10',
      fechaCierre: '2024-02-15',
      probabilidad: 70,
      contacto: 'Ana Rodríguez',
      telefono: '310-555-0123',
      productores: [
        {
          nombre: 'Carlos Rodríguez',
          finca: 'Finca El Progreso',
          municipio: 'Zipaquirá',
          cantidadOfrecida: 1500,
          precioKg: 2000,
          estadoNegociacion: 'En discusión'
        },
        {
          nombre: 'María González',
          finca: 'Hacienda La Esperanza',
          municipio: 'Zipaquirá',
          cantidadOfrecida: 500,
          precioKg: 2100,
          estadoNegociacion: 'Acordado'
        }
      ],
      timeline: [
        {
          fecha: '2024-01-10',
          hora: '09:00',
          evento: 'Oportunidad creada',
          descripcion: 'Nueva oportunidad registrada en el sistema',
          tipo: 'creacion',
          usuario: 'Sistema'
        },
        {
          fecha: '2024-01-11',
          hora: '14:30',
          evento: 'Primer contacto con cliente',
          descripcion: 'Llamada telefónica con Ana Rodríguez para identificar necesidades',
          tipo: 'contacto',
          usuario: 'Juan Pérez'
        },
        {
          fecha: '2024-01-15',
          hora: '10:15',
          evento: 'Productor agregado',
          descripcion: 'Carlos Rodríguez (Finca El Progreso) agregado como proveedor potencial',
          tipo: 'productor',
          usuario: 'María Silva'
        },
        {
          fecha: '2024-01-18',
          hora: '16:20',
          evento: 'Propuesta enviada',
          descripcion: 'Propuesta inicial enviada al cliente con oferta de 1,500 Kg a $2,000/Kg',
          tipo: 'propuesta',
          usuario: 'Juan Pérez'
        },
        {
          fecha: '2024-01-22',
          hora: '11:45',
          evento: 'Productor adicional',
          descripcion: 'María González (Hacienda La Esperanza) agregada para completar la demanda',
          tipo: 'productor',
          usuario: 'Carlos López'
        },
        {
          fecha: '2024-01-25',
          hora: '09:30',
          evento: 'Reunión de negociación',
          descripcion: 'Reunión presencial con el cliente para ajustar términos de precio y entrega',
          tipo: 'reunion',
          usuario: 'Juan Pérez'
        },
        {
          fecha: '2024-01-28',
          hora: '15:10',
          evento: 'Estado actualizado',
          descripcion: 'Estado cambiado de "Propuesta" a "Negociación" tras aceptación inicial',
          tipo: 'estado',
          usuario: 'Sistema'
        },
        {
          fecha: '2024-02-01',
          hora: '13:25',
          evento: 'Documentos enviados',
          descripcion: 'Certificados de calidad y documentación legal enviados al cliente',
          tipo: 'documento',
          usuario: 'Ana Torres'
        }
      ]
    },
    {
      id: 2,
      cliente: 'Restaurante Gourmet',
      producto: 'Tomate',
      cantidad: 500,
      valorEstimado: 1500000,
      estado: 'Propuesta',
      fechaCreacion: '2024-01-15',
      fechaCierre: '2024-02-20',
      probabilidad: 50,
      contacto: 'Carlos Mendoza',
      telefono: '320-555-0456',
      productores: [
        {
          nombre: 'Luis Martínez',
          finca: 'Invernadero 1',
          municipio: 'Facatativá',
          cantidadOfrecida: 500,
          precioKg: 3000,
          estadoNegociacion: 'Propuesta enviada'
        }
      ],
      timeline: [
        {
          fecha: '2024-01-15',
          hora: '08:45',
          evento: 'Oportunidad creada',
          descripcion: 'Contacto inicial recibido vía email del restaurante',
          tipo: 'creacion',
          usuario: 'Sistema'
        },
        {
          fecha: '2024-01-16',
          hora: '10:20',
          evento: 'Análisis de requerimientos',
          descripcion: 'Reunión para entender especificaciones de calidad premium requeridas',
          tipo: 'reunion',
          usuario: 'Sofia Ramírez'
        },
        {
          fecha: '2024-01-19',
          hora: '14:15',
          evento: 'Productor identificado',
          descripcion: 'Luis Martínez seleccionado por calidad premium de tomates de invernadero',
          tipo: 'productor',
          usuario: 'Sofia Ramírez'
        },
        {
          fecha: '2024-01-22',
          hora: '11:30',
          evento: 'Propuesta preparada',
          descripcion: 'Propuesta detallada con especificaciones de calidad y precios',
          tipo: 'propuesta',
          usuario: 'Sofia Ramírez'
        },
        {
          fecha: '2024-01-25',
          hora: '16:45',
          evento: 'Propuesta enviada',
          descripcion: 'Propuesta oficial enviada con muestras de producto',
          tipo: 'propuesta',
          usuario: 'Sofia Ramírez'
        }
      ]
    },
    {
      id: 3,
      cliente: 'Distribuidora Regional',
      producto: 'Maíz',
      cantidad: 1000,
      valorEstimado: 2500000,
      estado: 'Ganada',
      fechaCreacion: '2023-12-20',
      fechaCierre: '2024-01-30',
      probabilidad: 100,
      contacto: 'María González',
      telefono: '300-555-0789',
      productores: [
        {
          nombre: 'Pedro Sánchez',
          finca: 'Parcela Norte',
          municipio: 'Chía',
          cantidadOfrecida: 800,
          precioKg: 2500,
          estadoNegociacion: 'Contrato firmado'
        },
        {
          nombre: 'Ana Torres',
          finca: 'Cultivos del Valle',
          municipio: 'Soacha',
          cantidadOfrecida: 200,
          precioKg: 2400,
          estadoNegociacion: 'Contrato firmado'
        }
      ],
      timeline: [
        {
          fecha: '2023-12-20',
          hora: '09:15',
          evento: 'Oportunidad creada',
          descripcion: 'Solicitud de cotización recibida para suministro de maíz',
          tipo: 'creacion',
          usuario: 'Sistema'
        },
        {
          fecha: '2023-12-22',
          hora: '15:30',
          evento: 'Evaluación de productores',
          descripcion: 'Identificación de productores con capacidad de suministro requerida',
          tipo: 'evaluacion',
          usuario: 'Carlos López'
        },
        {
          fecha: '2023-12-28',
          hora: '11:20',
          evento: 'Productores confirmados',
          descripcion: 'Pedro Sánchez y Ana Torres confirmados como proveedores',
          tipo: 'productor',
          usuario: 'Carlos López'
        },
        {
          fecha: '2024-01-05',
          hora: '14:45',
          evento: 'Propuesta enviada',
          descripcion: 'Propuesta completa enviada con términos comerciales',
          tipo: 'propuesta',
          usuario: 'Carlos López'
        },
        {
          fecha: '2024-01-12',
          hora: '10:30',
          evento: 'Negociación de precio',
          descripcion: 'Ajuste de precios acordado tras negociación',
          tipo: 'negociacion',
          usuario: 'Carlos López'
        },
        {
          fecha: '2024-01-20',
          hora: '16:15',
          evento: 'Contrato firmado',
          descripcion: 'Contrato firmado por ambas partes, operación cerrada exitosamente',
          tipo: 'contrato',
          usuario: 'Carlos López'
        },
        {
          fecha: '2024-01-30',
          hora: '08:00',
          evento: 'Oportunidad cerrada',
          descripcion: 'Oportunidad marcada como ganada, primer envío programado',
          tipo: 'cierre',
          usuario: 'Sistema'
        }
      ]
    },
    {
      id: 4,
      cliente: 'Cooperativa Agrícola',
      producto: 'Yuca',
      cantidad: 800,
      valorEstimado: 1200000,
      estado: 'Perdida',
      fechaCreacion: '2024-01-05',
      fechaCierre: '2024-01-25',
      probabilidad: 0,
      contacto: 'Luis Pérez',
      telefono: '315-555-0321',
      productores: [
        {
          nombre: 'Roberto Díaz',
          finca: 'Parcela Sur',
          municipio: 'Fusagasugá',
          cantidadOfrecida: 800,
          precioKg: 1500,
          estadoNegociacion: 'Precio rechazado'
        }
      ],
      timeline: [
        {
          fecha: '2024-01-05',
          hora: '10:30',
          evento: 'Oportunidad creada',
          descripcion: 'Solicitud urgente de yuca para programa de la cooperativa',
          tipo: 'creacion',
          usuario: 'Sistema'
        },
        {
          fecha: '2024-01-08',
          hora: '14:20',
          evento: 'Productor contactado',
          descripcion: 'Roberto Díaz identificado como único proveedor disponible',
          tipo: 'productor',
          usuario: 'Ana Torres'
        },
        {
          fecha: '2024-01-10',
          hora: '11:45',
          evento: 'Propuesta inicial',
          descripcion: 'Primera propuesta enviada con precio de $1,500/Kg',
          tipo: 'propuesta',
          usuario: 'Ana Torres'
        },
        {
          fecha: '2024-01-15',
          hora: '09:15',
          evento: 'Rechazo de precio',
          descripcion: 'Cliente rechaza precio, solicita reducción del 20%',
          tipo: 'rechazo',
          usuario: 'Luis Pérez'
        },
        {
          fecha: '2024-01-18',
          hora: '16:30',
          evento: 'Negociación fallida',
          descripcion: 'Productor no acepta reducción de precio solicitada',
          tipo: 'negociacion',
          usuario: 'Ana Torres'
        },
        {
          fecha: '2024-01-25',
          hora: '12:00',
          evento: 'Oportunidad perdida',
          descripcion: 'Cliente decide buscar otro proveedor, oportunidad cerrada',
          tipo: 'cierre',
          usuario: 'Sistema'
        }
      ]
    },
    {
      id: 5,
      cliente: 'Exportadora Andina',
      producto: 'Papa',
      cantidad: 3000,
      valorEstimado: 7500000,
      estado: 'Negociación',
      fechaCreacion: '2024-01-20',
      fechaCierre: '2024-03-01',
      probabilidad: 80,
      contacto: 'Sofia Ramírez',
      telefono: '301-555-0987',
      productores: [
        {
          nombre: 'Carlos Rodríguez',
          finca: 'Finca El Progreso',
          municipio: 'Zipaquirá',
          cantidadOfrecida: 1500,
          precioKg: 2200,
          estadoNegociacion: 'En discusión'
        },
        {
          nombre: 'Jorge Hernández',
          finca: 'Cultivos Premium',
          municipio: 'Cajicá',
          cantidadOfrecida: 1000,
          precioKg: 2300,
          estadoNegociacion: 'Pendiente respuesta'
        },
        {
          nombre: 'Elena Vargas',
          finca: 'Agro Sostenible',
          municipio: 'Zipaquirá',
          cantidadOfrecida: 500,
          precioKg: 2400,
          estadoNegociacion: 'Acordado'
        }
      ],
      timeline: [
        {
          fecha: '2024-01-20',
          hora: '08:30',
          evento: 'Oportunidad creada',
          descripcion: 'Gran oportunidad de exportación hacia mercados internacionales',
          tipo: 'creacion',
          usuario: 'Sistema'
        },
        {
          fecha: '2024-01-22',
          hora: '15:45',
          evento: 'Reunión estratégica',
          descripcion: 'Reunión con equipo para definir estrategia de múltiples productores',
          tipo: 'reunion',
          usuario: 'Director Comercial'
        },
        {
          fecha: '2024-01-25',
          hora: '10:20',
          evento: 'Primer productor confirmado',
          descripcion: 'Carlos Rodríguez acepta participar con 1,500 Kg',
          tipo: 'productor',
          usuario: 'Juan Pérez'
        },
        {
          fecha: '2024-01-28',
          hora: '14:15',
          evento: 'Segundo productor agregado',
          descripcion: 'Jorge Hernández se suma con oferta de 1,000 Kg premium',
          tipo: 'productor',
          usuario: 'María Silva'
        },
        {
          fecha: '2024-02-01',
          hora: '11:30',
          evento: 'Tercer productor confirmado',
          descripcion: 'Elena Vargas completa la oferta con 500 Kg de calidad orgánica',
          tipo: 'productor',
          usuario: 'Sofia Ramírez'
        },
        {
          fecha: '2024-02-05',
          hora: '16:00',
          evento: 'Propuesta consolidada',
          descripcion: 'Propuesta integral enviada con oferta completa de 3,000 Kg',
          tipo: 'propuesta',
          usuario: 'Director Comercial'
        },
        {
          fecha: '2024-02-08',
          hora: '09:45',
          evento: 'Inspección de calidad',
          descripcion: 'Cliente visita fincas para verificar estándares de exportación',
          tipo: 'inspeccion',
          usuario: 'Sofia Ramírez'
        }
      ]
    }
  ];

  const filteredOportunidades = oportunidades.filter(oportunidad => {
    const matchesSearch = oportunidad.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         oportunidad.producto.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         oportunidad.productores.some(productor => 
                           productor.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           productor.municipio.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesFilter = filterStatus === 'Todas' || oportunidad.estado === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const openTimelineModal = (oportunidad) => {
    setSelectedOportunidad(oportunidad);
    setShowTimelineModal(true);
  };

  const closeTimelineModal = () => {
    setShowTimelineModal(false);
    setSelectedOportunidad(null);
  };

  const getStatusColor = (estado) => {
    switch (estado) {
      case 'Negociación': return 'warning';
      case 'Propuesta': return 'info';
      case 'Ganada': return 'success';
      case 'Perdida': return 'danger';
      default: return 'secondary';
    }
  };

  const getEstadoNegociacionColor = (estado) => {
    switch (estado) {
      case 'Contrato firmado': return 'success';
      case 'Acordado': return 'success';
      case 'En discusión': return 'warning';
      case 'Propuesta enviada': return 'info';
      case 'Pendiente respuesta': return 'info';
      case 'Precio rechazado': return 'danger';
      default: return 'secondary';
    }
  };

  const getTimelineIcon = (tipo) => {
    switch (tipo) {
      case 'creacion': return '🎯';
      case 'contacto': return '📞';
      case 'productor': return '👨‍🌾';
      case 'propuesta': return '📄';
      case 'reunion': return '🤝';
      case 'estado': return '🔄';
      case 'documento': return '📋';
      case 'evaluacion': return '🔍';
      case 'negociacion': return '💬';
      case 'contrato': return '✅';
      case 'cierre': return '🏁';
      case 'rechazo': return '❌';
      case 'inspeccion': return '🔎';
      default: return '📌';
    }
  };

  const getTimelineColor = (tipo) => {
    switch (tipo) {
      case 'creacion': return 'info';
      case 'contacto': return 'primary';
      case 'productor': return 'success';
      case 'propuesta': return 'warning';
      case 'reunion': return 'primary';
      case 'estado': return 'info';
      case 'documento': return 'secondary';
      case 'evaluacion': return 'info';
      case 'negociacion': return 'warning';
      case 'contrato': return 'success';
      case 'cierre': return 'success';
      case 'rechazo': return 'danger';
      case 'inspeccion': return 'primary';
      default: return 'secondary';
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(value);
  };

  const getTotalCantidadProductores = (productores) => {
    return productores.reduce((total, productor) => total + productor.cantidadOfrecida, 0);
  };

  const getProductoresDisplay = (oportunidad) => {
    return (
      <div className="productores-section">
        <h5>Productores Involucrados ({oportunidad.productores.length})</h5>
        <div className="productores-list">
          {oportunidad.productores.map((productor, index) => (
            <div key={index} className="productor-card">
              <div className="productor-header">
                <strong className="productor-nombre">{productor.nombre}</strong>
                <span className={`estado-negociacion ${getEstadoNegociacionColor(productor.estadoNegociacion)}`}>
                  {productor.estadoNegociacion}
                </span>
              </div>
              <div className="productor-details">
                <div className="detail-item">
                  <span className="detail-label">Finca:</span>
                  <span className="detail-value">{productor.finca}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Municipio:</span>
                  <span className="detail-value">{productor.municipio}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Cantidad:</span>
                  <span className="detail-value">{productor.cantidadOfrecida.toLocaleString()} Kg</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Precio/Kg:</span>
                  <span className="detail-value precio">{formatCurrency(productor.precioKg)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="productores-summary">
          <strong>Total ofrecido: {getTotalCantidadProductores(oportunidad.productores).toLocaleString()} Kg</strong>
          <span className="cobertura-info">
            Cobertura: {((getTotalCantidadProductores(oportunidad.productores) / oportunidad.cantidad) * 100).toFixed(1)}%
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Oportunidades Comerciales</h1>
        <p className="page-subtitle">DEMO: Funcionalidades para comerciaels y coordinadores de comerciales</p>
      </div>
      
      <div className="content-section">
        <div className="crm-stats">
          <div className="stat-card">
            <h3>Total Oportunidades</h3>
            <p className="stat-number">{oportunidades.length}</p>
          </div>
          <div className="stat-card">
            <h3>Valor Total</h3>
            <p className="stat-number">
              {formatCurrency(oportunidades.reduce((sum, op) => sum + op.valorEstimado, 0))}
            </p>
          </div>
          <div className="stat-card">
            <h3>Ganadas</h3>
            <p className="stat-number success">
              {oportunidades.filter(op => op.estado === 'Ganada').length}
            </p>
          </div>
          <div className="stat-card">
            <h3>En Proceso</h3>
            <p className="stat-number warning">
              {oportunidades.filter(op => op.estado === 'Negociación' || op.estado === 'Propuesta').length}
            </p>
          </div>
          <div className="stat-card">
            <h3>Productores Activos</h3>
            <p className="stat-number info">
              {new Set(oportunidades.flatMap(op => op.productores.map(p => p.nombre))).size}
            </p>
          </div>
        </div>

        <div className="filters-section">
          <div className="search-section">
            <input
              type="text"
              placeholder="Buscar por cliente, producto, productor o municipio..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-section">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="filter-select"
            >
              <option value="Todas">Todas las oportunidades</option>
              <option value="Negociación">En Negociación</option>
              <option value="Propuesta">Propuesta</option>
              <option value="Ganada">Ganadas</option>
              <option value="Perdida">Perdidas</option>
            </select>
          </div>
        </div>

        <div className="opportunities-grid">
          {filteredOportunidades.map(oportunidad => (
            <div key={oportunidad.id} className="opportunity-card">
              <div className="card-header">
                <h3>{oportunidad.cliente}</h3>
                <span className={`status ${getStatusColor(oportunidad.estado)}`}>
                  {oportunidad.estado}
                </span>
              </div>
              
              <div className="card-content">
                <div className="detail-row">
                  <strong>Producto:</strong> {oportunidad.producto}
                </div>
                <div className="detail-row">
                  <strong>Cantidad:</strong> {oportunidad.cantidad.toLocaleString()} Kg
                </div>
                <div className="detail-row">
                  <strong>Valor:</strong> {formatCurrency(oportunidad.valorEstimado)}
                </div>
                <div className="detail-row">
                  <strong>Contacto:</strong> {oportunidad.contacto}
                </div>
                <div className="detail-row">
                  <strong>Teléfono:</strong> {oportunidad.telefono}
                </div>
                <div className="detail-row">
                  <strong>Fecha Cierre:</strong> {oportunidad.fechaCierre}
                </div>
                
                {oportunidad.estado !== 'Ganada' && oportunidad.estado !== 'Perdida' && (
                  <div className="probability-bar">
                    <div className="probability-label">
                      Probabilidad: {oportunidad.probabilidad}%
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${oportunidad.probabilidad}%` }}
                      />
                    </div>
                  </div>
                )}

                {getProductoresDisplay(oportunidad)}
              </div>
              
              <div className="card-actions">
                <button className="btn-small btn-primary">Editar</button>
                <button 
                  className="btn-small btn-secondary"
                  onClick={() => openTimelineModal(oportunidad)}
                >
                  Ver Timeline
                </button>
                <button className="btn-small btn-info">Contactar</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal del Timeline */}
      {showTimelineModal && selectedOportunidad && (
        <div className="modal-overlay" onClick={closeTimelineModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Timeline - {selectedOportunidad.cliente}</h2>
              <button className="modal-close" onClick={closeTimelineModal}>×</button>
            </div>
            
            <div className="modal-body">
              <div className="timeline-info">
                <div className="timeline-summary">
                  <div className="summary-item">
                    <strong>Producto:</strong> {selectedOportunidad.producto}
                  </div>
                  <div className="summary-item">
                    <strong>Estado:</strong> 
                    <span className={`status ${getStatusColor(selectedOportunidad.estado)}`}>
                      {selectedOportunidad.estado}
                    </span>
                  </div>
                  <div className="summary-item">
                    <strong>Valor:</strong> {formatCurrency(selectedOportunidad.valorEstimado)}
                  </div>
                  <div className="summary-item">
                    <strong>Eventos:</strong> {selectedOportunidad.timeline.length}
                  </div>
                </div>
              </div>

              <div className="timeline-container">
                <div className="timeline-line"></div>
                {selectedOportunidad.timeline.map((evento, index) => (
                  <div key={index} className="timeline-item">
                    <div className={`timeline-marker ${getTimelineColor(evento.tipo)}`}>
                      <span className="timeline-icon">{getTimelineIcon(evento.tipo)}</span>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4 className="timeline-title">{evento.evento}</h4>
                        <div className="timeline-meta">
                          <span className="timeline-date">{evento.fecha}</span>
                          <span className="timeline-time">{evento.hora}</span>
                        </div>
                      </div>
                      <p className="timeline-description">{evento.descripcion}</p>
                      <div className="timeline-footer">
                        <span className="timeline-user">👤 {evento.usuario}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CRMOportunidades; 