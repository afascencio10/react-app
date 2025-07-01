import React from 'react';
import './PageStyles.css';

const DescripcionProyecto = () => {
  // Datos extraídos del archivo JSON de alcance
  const pantallasPorRol = {
    "Productor": [
      {
        id: "PROD-001",
        pantalla: "Registro Productor",
        funcionalidades: [
          "Registrar datos personales básicos del productor individual",
          "Seleccionar tipo de productor: individual, asociación o cooperativa",
          "Ingresar información de contacto y ubicación geográfica",
          "Crear credenciales de acceso seguro a la plataforma",
          "Validar documentos de identidad y certificaciones requeridas"
        ],
        plataforma: "Web App"
      },
      {
        id: "PROD-002",
        pantalla: "Perfil Productor",
        funcionalidades: [
          "Completar información detallada de la finca productiva",
          "Registrar productos cultivados y variedades disponibles",
          "Cargar certificaciones de calidad y documentos técnicos",
          "Actualizar datos de contacto y información bancaria",
          "Configurar preferencias de notificaciones y comunicación"
        ],
        plataforma: "Web App"
      },
      {
        id: "PROD-003",
        pantalla: "Cargar Cosechas",
        funcionalidades: [
          "Registrar información detallada de productos cosechados disponibles",
          "Especificar cantidades exactas, calidades y estados del producto",
          "Definir precios sugeridos y condiciones de venta",
          "Actualizar inventario disponible para comercialización inmediata",
          "Marcar productos como reservados o comprometidos"
        ],
        plataforma: "Web App"
      },
      {
        id: "PROD-004",
        pantalla: "Proyecciones Cosecha",
        funcionalidades: [
          "Ingresar estimaciones de cosechas futuras por producto",
          "Definir fechas proyectadas de siembra y cosecha",
          "Especificar volúmenes esperados según estado actual cultivos",
          "Actualizar proyecciones basadas en condiciones climáticas",
          "Generar compromisos previos de venta futura"
        ],
        plataforma: "Web App"
      }
    ],
    "Asociación": [
      {
        id: "ASOC-001",
        pantalla: "Registro Asociación",
        funcionalidades: [
          "Registrar datos legales y administrativos de asociación",
          "Definir administrador principal y usuarios secundarios",
          "Completar información sobre ubicación y cobertura territorial",
          "Cargar documentos de constitución y certificaciones grupales",
          "Establecer parámetros de representación de miembros"
        ],
        plataforma: "Web App"
      },
      {
        id: "ASOC-002",
        pantalla: "Gestionar Miembros",
        funcionalidades: [
          "Añadir y remover productores miembros de asociación",
          "Visualizar información detallada de cada productor miembro",
          "Gestionar permisos y niveles acceso miembros",
          "Consolidar información de cultivos de todos miembros",
          "Generar reportes de participación y productividad miembros"
        ],
        plataforma: "Web App"
      },
      {
        id: "ASOC-003",
        pantalla: "Consolidar Oferta",
        funcionalidades: [
          "Agrupar ofertas individuales en propuesta grupal consolidada",
          "Negociar mejores precios aprovechando volúmenes conjuntos",
          "Coordinar logística de entrega de múltiples productores",
          "Distribuir beneficios económicos entre miembros participantes",
          "Gestionar contratos grupales y compromisos comerciales"
        ],
        plataforma: "Web App"
      }
    ],
    "Comercial": [
      {
        id: "COM-001",
        pantalla: "Login Comercial",
        funcionalidades: [
          "Autenticar acceso seguro con credenciales comercial",
          "Verificar permisos según canal asignado comercial",
          "Restaurar sesión anterior y configuraciones personales",
          "Registrar hora entrada y actividad diaria",
          "Acceder dashboard personalizado según territorio asignado"
        ],
        plataforma: "Web App"
      },
      {
        id: "COM-002",
        pantalla: "Dashboard Comercial",
        funcionalidades: [
          "Visualizar resumen oportunidades activas y nuevas",
          "Monitorear compradores activos en territorio asignado",
          "Revisar alertas de productos urgentes venta",
          "Acceder métricas personales rendimiento comercial",
          "Gestionar agenda reuniones y actividades pendientes"
        ],
        plataforma: "Web App"
      },
      {
        id: "COM-003",
        pantalla: "Consultar Inventario",
        funcionalidades: [
          "Buscar productos disponibles según necesidades específicas comprador",
          "Filtrar por tipo producto, volumen, ubicación, calidad",
          "Identificar productores con disponibilidad inmediata o futura",
          "Comparar precios y condiciones diferentes proveedores",
          "Exportar listados productos para presentar compradores"
        ],
        plataforma: "Web App"
      },
      {
        id: "COM-004",
        pantalla: "Crear Oportunidad",
        funcionalidades: [
          "Registrar nueva oportunidad comercial con datos comprador",
          "Especificar requerimientos detallados productos solicitados",
          "Definir condiciones comerciales y plazos entrega",
          "Asignar estado inicial y probabilidad cierre",
          "Programar seguimiento y actividades relacionadas"
        ],
        plataforma: "Web App"
      },
      {
        id: "COM-005",
        pantalla: "Gestionar Negociación",
        funcionalidades: [
          "Coordinar comunicación entre productores y compradores",
          "Programar reuniones y presentaciones productos",
          "Hacer seguimiento avances negociación comercial",
          "Registrar ofertas, contraofertas y acuerdos alcanzados",
          "Facilitar cierre contratos y documentación legal"
        ],
        plataforma: "Web App"
      }
    ],
    "Coordinador": [
      {
        id: "COORD-001",
        pantalla: "Acceso Coordinador",
        funcionalidades: [
          "Autenticar acceso con permisos nivel coordinación",
          "Acceder dashboard ejecutivo con métricas generales",
          "Revisar alertas y notificaciones críticas del sistema",
          "Configurar parámetros operacionales del equipo comercial",
          "Generar reportes ejecutivos para gerencia"
        ],
        plataforma: "Web App"
      },
      {
        id: "COORD-002",
        pantalla: "Monitoreo Equipo",
        funcionalidades: [
          "Supervisar desempeño individual de cada comercial",
          "Monitorear estados y avances oportunidades por comercial",
          "Identificar cuellos botella y problemas operacionales",
          "Reasignar oportunidades según capacidad y especialización",
          "Evaluar cumplimiento objetivos y metas comerciales"
        ],
        plataforma: "Web App"
      },
      {
        id: "COORD-003",
        pantalla: "Asignar Territorios",
        funcionalidades: [
          "Definir territorios geográficos para cada comercial",
          "Asignar especialización productos según expertise comercial",
          "Balancear carga trabajo entre miembros equipo",
          "Establecer metas y objetivos individuales comerciales",
          "Gestionar cambios y rotaciones territoriales"
        ],
        plataforma: "Web App"
      }
    ],
    "Municipio": [
      {
        id: "MUN-001",
        pantalla: "Acceso Municipio",
        funcionalidades: [
          "Autenticar funcionario municipal autorizado",
          "Acceder información productores del municipio específico",
          "Revisar censo actualizado productores locales",
          "Gestionar validación datos productores territorio municipal",
          "Generar reportes productivos municipales para gobernación"
        ],
        plataforma: "Web App"
      },
      {
        id: "MUN-002",
        pantalla: "Actualizar Censo",
        funcionalidades: [
          "Registrar nuevos productores identificados en territorio",
          "Actualizar información productores existentes en base",
          "Incorporar nuevas asociaciones y cooperativas formadas",
          "Validar datos técnicos cultivos y producciones locales",
          "Sincronizar información municipal con base departamental"
        ],
        plataforma: "Web App"
      },
      {
        id: "MUN-003",
        pantalla: "Validar Información",
        funcionalidades: [
          "Verificar veracidad datos reportados por productores",
          "Realizar visitas campo para confirmar información",
          "Aprobar o rechazar registros según validación",
          "Documentar observaciones y recomendaciones técnicas",
          "Enviar reportes validación a nivel departamental"
        ],
        plataforma: "Web App"
      }
    ],
    "Comprador": [
      {
        id: "COMP-001",
        pantalla: "Búsqueda Productos",
        funcionalidades: [
          "Buscar productos específicos según necesidades comerciales",
          "Filtrar por origen, calidad, volúmenes disponibles",
          "Comparar opciones diferentes proveedores disponibles",
          "Solicitar información detallada productos interés",
          "Guardar búsquedas y configurar alertas disponibilidad"
        ],
        plataforma: "Web App"
      },
      {
        id: "COMP-002",
        pantalla: "Revisar Oferta",
        funcionalidades: [
          "Examinar catálogo completo productos disponibles para exportación",
          "Filtrar por criterios calidad y volúmenes requeridos",
          "Revisar certificaciones y documentación técnica productos",
          "Contactar directamente con comerciales especializados por canal",
          "Comparar precios y condiciones diferentes ofertas"
        ],
        plataforma: "Web App"
      },
      {
        id: "COMP-003",
        pantalla: "Solicitar Cotización",
        funcionalidades: [
          "Generar solicitud formal cotización productos específicos",
          "Especificar volúmenes exactos y condiciones técnicas requeridas",
          "Definir plazos entrega y condiciones logísticas",
          "Enviar requerimiento a comerciales especializados canal",
          "Hacer seguimiento estado cotización y respuestas"
        ],
        plataforma: "Web App"
      }
    ],
    "Sistema": [
      {
        id: "SIS-001",
        pantalla: "Reportes Inventario",
        funcionalidades: [
          "Generar automáticamente reportes inventario consolidado departamental",
          "Clasificar productos por tipo, ubicación y estado disponibilidad",
          "Calcular totales volúmenes por municipio y región",
          "Identificar productos con alta rotación comercial",
          "Programar envío automático reportes usuarios interesados"
        ],
        plataforma: "Backend"
      },
      {
        id: "SIS-002",
        pantalla: "KPIs Comerciales",
        funcionalidades: [
          "Calcular indicadores clave desempeño comercial automáticamente",
          "Medir total tratos cerrados por período",
          "Computar valor acumulado ventas por canal",
          "Determinar tiempo promedio cierre oportunidades comerciales",
          "Generar alertas desempeño y cumplimiento metas"
        ],
        plataforma: "Backend"
      },
      {
        id: "SIS-003",
        pantalla: "Alertas Urgentes",
        funcionalidades: [
          "Identificar automáticamente productos perecederos pendientes venta urgente",
          "Notificar comerciales sobre oportunidades tiempo crítico",
          "Generar alertas proximidad vencimiento productos",
          "Priorizar productos según urgencia y valor comercial",
          "Enviar notificaciones push y email usuarios"
        ],
        plataforma: "Backend"
      }
    ],
    "Agricultor": [
      {
        id: "AGR-001",
        pantalla: "Acceso Cunamía",
        funcionalidades: [
          "Registrar productos agrícolas frescos en tienda digital Cunamía",
          "Cargar imágenes y descripciones detalladas de productos agrícolas",
          "Gestionar inventario con fechas de cosecha y vencimiento",
          "Recibir pedidos y coordinar entregas de productos frescos",
          "Actualizar catálogo con productos estacionales según ciclos agrícolas",
          "Establecer precios competitivos para venta directa al consumidor",
          "Gestionar certificaciones orgánicas y de calidad agrícola"
        ],
        plataforma: "Web App"
      }
    ]
  };

  // Beneficios específicos por rol
  const beneficiosPorRol = {
    "Productor": {
      descripcion: "Los productores agrícolas obtienen acceso directo a mercados nacionales e internacionales",
      beneficios: [
        "💰 Mejores precios al eliminar intermediarios innecesarios",
        "🌐 Acceso directo a compradores nacionales e internacionales",
        "📊 Herramientas para planificar y proyectar cosechas futuras",
        "🤝 Posibilidad de unirse a asociaciones para mayor poder de negociación",
        "📱 Gestión digital de inventario y documentación",
        "🔔 Alertas automáticas sobre oportunidades de venta"
      ]
    },
    "Asociación": {
      descripcion: "Las asociaciones y cooperativas pueden consolidar la oferta de sus miembros",
      beneficios: [
        "📦 Consolidación de volúmenes para mejores condiciones comerciales",
        "👥 Gestión centralizada de múltiples productores miembros",
        "📋 Reportes consolidados de ventas de cosechas grupal"
      ]
    },
    "Comercial": {
      descripcion: "Los comerciales pueden gestionar eficientemente las oportunidades y relaciones comerciales",
      beneficios: [
        "🎯 Dashboard personalizado con oportunidades por territorio",
        "🔍 Búsqueda avanzada de productos según necesidades del cliente",
        "📅 Gestión de agenda y seguimiento de negociaciones",
        "🤖 Alertas automáticas sobre productos sin comercializar o seguimientos"
      ]
    },
    "Coordinador": {
      descripcion: "Los coordinadores obtienen visibilidad completa para supervisar y optimizar el equipo comercial",
      beneficios: [
        "👁️ Monitoreo en tiempo real del desempeño del equipo",
        "🗺️ Gestión estratégica de territorios y especialización",
        "📊 Dashboard ejecutivo con KPIs y métricas clave",
        "⚖️ Balanceo de carga de trabajo entre comerciales",
        "🎯 Asignación inteligente de oportunidades por expertise"
      ]
    },
    "Municipio": {
      descripcion: "Los municipios pueden mantener un censo actualizado y validar información de productores",
      beneficios: [
        "📊 Censo digital actualizado de productores locales",
        "📍 Mapeo territorial de la producción municipal",
        "📈 Reportes municipales para envío a gobernación",
        "🔄 Sincronización automática con bases departamentales",
        "👥 Identificación de nuevos productores y asociaciones"
      ]
    },
    "Comprador": {
      descripcion: "Los compradores pueden acceder a una oferta consolidada y diversificada de productos",
      beneficios: [
        "🔍 Búsqueda especializada de productos agrícolas",
        "📋 Catálogo completo con certificaciones y documentación",
        "📱 Contacto directo con comerciales especializados"
      ]
    },
    "Sistema": {
      descripcion: "El sistema automatiza procesos clave y genera inteligencia de negocio",
      beneficios: [
        "🤖 Generacion de reportes",
        "📧 Notificaciones automáticas a usuarios relevantes"
      ]
    },
    "Agricultor": {
      descripcion: "Los agricultores acceden a un canal digital especializado para comercializar productos agrícolas",
      beneficios: [
        "🛒 Tienda digital Cunamía para productos agrícolas frescos",
        "📸 Catálogo visual de productos agrícolas con especificaciones técnicas",
        "📦 Gestión de inventario agrícola con fechas de cosecha y caducidad",
        "🌐 Acceso directo a mercados digitales especializados en agricultura",
        "📅 Gestión de productos estacionales y ciclos de cosecha",
        "💰 Canal adicional de comercialización para productos agrícolas",
        "🏪 Venta directa al consumidor eliminando intermediarios",
        "📊 Métricas de ventas y preferencias de consumidores finales"
      ]
    }
  };

  const getRolIcon = (rol) => {
    const icons = {
      "Productor": "🌾",
      "Asociación": "🤝",
      "Comercial": "💼",
      "Coordinador": "👨‍💼",
      "Municipio": "🏛️",
      "Comprador": "🛒",
      "Sistema": "⚙️",
      "Agricultor": "🚜"
    };
    return icons[rol] || "📱";
  };

  const getRolColor = (rol) => {
    const colors = {
      "Productor": "#27ae60",
      "Asociación": "#3498db",
      "Comercial": "#e74c3c",
      "Coordinador": "#9b59b6",
      "Municipio": "#f39c12",
      "Comprador": "#1abc9c",
      "Sistema": "#34495e",
      "Agricultor": "#2ecc71"
    };
    return colors[rol] || "#95a5a6";
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Descripción del Proyecto</h1>
        <p className="page-subtitle">Conoce más sobre nuestra plataforma agrícola</p>
      </div>
      
      <div className="content-section">
        <div className="info-card">
          <h2>Objetivo</h2>
          <p>
          El objetivo del proyecto es crear un portal por medio del cual la Gobernacion de Cundinamarca ayuda a los productores agricolas a comercializar sus cosechas a nivel nacional e internacional
          </p>
        </div>

        <div className="info-card">
          <h2>Funcionalidades Principales</h2>
          <ul className="feature-list">
            <li>📊 Registro y seguimiento de cosechas</li>
            <li>👥 Gestión de miembros de asociación</li>
            <li>💼 CRM para oportunidades comerciales</li>
            <li>📈 Reportes y análisis de datos</li>
            <li>🌐 Acceso desde cualquier dispositivo</li>
          </ul>
        </div>

        <div className="info-card">
          <h2>Beneficios</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Organización</h3>
              <p>Mantén toda la información centralizada y organizada</p>
            </div>
            <div className="benefit-item">
              <h3>Eficiencia</h3>
              <p>Optimiza los procesos y reduce el tiempo de gestión</p>
            </div>
            <div className="benefit-item">
              <h3>Crecimiento</h3>
              <p>Identifica oportunidades para expandir tu negocio</p>
            </div>
          </div>
        </div>

        <div className="beneficios-por-rol-section">
          <h2>Beneficios por Rol</h2>
          <p className="section-subtitle">
            Descubre cómo la plataforma beneficia específicamente a cada tipo de usuario
          </p>
          
          <div className="beneficios-grid">
            {Object.entries(beneficiosPorRol).map(([rol, info]) => (
              <div key={rol} className="beneficio-rol-card">
                <div className="beneficio-rol-header">
                  <span className="rol-icon-large">{getRolIcon(rol)}</span>
                  <div className="rol-info">
                    <h3 className="rol-title" style={{ color: getRolColor(rol) }}>
                      {rol}
                    </h3>
                    <p className="rol-descripcion">{info.descripcion}</p>
                  </div>
                </div>
                
                <div className="beneficio-rol-content">
                  <h4>Beneficios Clave:</h4>
                  <ul className="beneficios-list">
                    {info.beneficios.map((beneficio, index) => (
                      <li key={index} className="beneficio-item">{beneficio}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pantallas-section">
          <h2>Pantallas del Sistema por Rol</h2>
          <p className="section-subtitle">
            Estas son algunas funcionalidades propuestas para la plataforma. Esto debe ser ajustado con un conocimiento profundo de los procesos de la organizacion. Tambien se debe priorizar cuales son las funcionalidades indispensables en la primera version
          </p>
          
          {Object.entries(pantallasPorRol).map(([rol, pantallas]) => (
            <div key={rol} className="rol-section">
              <div className="rol-header">
                <span className="rol-icon">{getRolIcon(rol)}</span>
                <h3 className="rol-title" style={{ color: getRolColor(rol) }}>
                  {rol}
                </h3>
                <span className="rol-count">
                  {pantallas.length} pantalla{pantallas.length !== 1 ? 's' : ''}
                </span>
              </div>
              
              <div className="pantallas-grid">
                {pantallas.map((pantalla) => (
                  <div key={pantalla.id} className="pantalla-card">
                    <div className="pantalla-header">
                      <h4 className="pantalla-title">{pantalla.pantalla}</h4>
                      <span className="pantalla-plataforma">{pantalla.plataforma}</span>
                    </div>
                    
                    <div className="pantalla-content">
                      <h5>Funcionalidades:</h5>
                      <ul className="funcionalidades-list">
                        {pantalla.funcionalidades.map((func, index) => (
                          <li key={index}>{func}</li>
                        ))}
                        
                      </ul>
                    </div>
                    
                    <div className="pantalla-footer">
                      <span className="pantalla-id">{pantalla.id}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescripcionProyecto; 