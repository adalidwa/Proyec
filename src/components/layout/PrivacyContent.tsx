import TermsSection from '../common/TermsSection';
import TermsSubSection from '../common/TermsSubSection';

const PrivacyContent = () => {
  return (
    <div className='privacy-content-grid'>
      <TermsSection title='1. Información que Recopilamos' content=''>
        <TermsSubSection
          title='Información de Contacto y Consultas'
          content={[
            'Nombre y apellidos',
            'Correo electrónico',
            'Número de teléfono',
            'Empresa u organización',
            'Cargo o posición',
            'Consultas y mensajes enviados',
          ]}
        />
        <TermsSubSection
          title='Información de Registro y Demo'
          content={[
            'Datos para solicitar demostraciones',
            'Información sobre el tipo de negocio',
            'Tamaño de la empresa',
            'Necesidades específicas del ERP',
            'Preferencias de contacto',
          ]}
        />
        <TermsSubSection
          title='Información de Compra'
          content={[
            'Datos de facturación',
            'Plan seleccionado',
            'Método de pago',
            'Historial de transacciones',
            'Información fiscal',
          ]}
        />
        <TermsSubSection
          title='Información Técnica del Sitio Web'
          content={[
            'Dirección IP',
            'Tipo de navegador y versión',
            'Sistema operativo',
            'Páginas visitadas en el sitio',
            'Tiempo de permanencia',
            'Referencia de origen',
            'Cookies y datos de sesión',
          ]}
        />
      </TermsSection>
      <TermsSection title='2. Cómo Utilizamos tu Información' content=''>
        <TermsSubSection
          title='Para Ventas y Soporte Comercial'
          content={[
            'Responder consultas sobre INNOVAPAZ',
            'Programar demostraciones del sistema',
            'Enviar información sobre planes y precios',
            'Seguimiento comercial personalizado',
            'Asesoramiento sobre la mejor solución ERP',
          ]}
        />
        <TermsSubSection
          title='Para Procesamiento de Compras'
          content={[
            'Procesar pedidos y pagos',
            'Generar facturas y recibos',
            'Activar licencias del software',
            'Gestionar suscripciones mensuales',
            'Renovaciones automáticas',
          ]}
        />
        <TermsSubSection
          title='Para Comunicación y Marketing'
          content={[
            'Envío de newsletters y actualizaciones',
            'Información sobre nuevas funcionalidades',
            'Promociones y descuentos especiales',
            'Casos de éxito y testimonios',
            'Webinars y eventos formativos',
          ]}
        />
        <TermsSubSection
          title='Para Mejora del Sitio Web'
          content={[
            'Análisis de navegación y uso',
            'Optimización de la experiencia de usuario',
            'Mejora del proceso de compra',
            'Personalización de contenido',
            'Testing A/B de elementos',
          ]}
        />
      </TermsSection>
      <TermsSection
        title='3. Base Legal para el Procesamiento'
        content={[
          'Consentimiento: Al completar formularios y aceptar esta política',
          'Interés legítimo: Para mejorar nuestros servicios comerciales',
          'Ejecución de contrato: Para procesar compras y suscripciones',
          'Obligaciones legales: Cumplimiento fiscal y contable',
        ]}
      />
      <TermsSection title='4. Compartir Información' content=''>
        <TermsSubSection
          title='Proveedores de Servicios'
          content={[
            'Procesadores de pago (con protección PCI DSS)',
            'Servicios de email marketing',
            'Plataformas de análisis web (Google Analytics)',
            'Servicios de hosting y CDN',
            'Herramientas de chat en vivo',
          ]}
        />
        <TermsSubSection
          title='No Vendemos ni Alquilamos Datos'
          content={[
            'Nunca vendemos información personal',
            'No compartimos con terceros para marketing',
            'Acceso limitado solo a personal autorizado',
          ]}
        />
        <TermsSubSection
          title='Excepciones Legales'
          content={[
            'Requerimientos judiciales',
            'Investigaciones de fraude',
            'Protección de derechos legales',
          ]}
        />
      </TermsSection>
      <TermsSection title='5. Seguridad de los Datos' content=''>
        <TermsSubSection
          title='Medidas de Protección Web'
          content={[
            'Certificado SSL/TLS para encriptación',
            'Servidores seguros con firewall',
            'Copias de seguridad regulares',
            'Monitoreo de seguridad 24/7',
            'Acceso restringido a bases de datos',
          ]}
        />
        <TermsSubSection
          title='Protección de Pagos'
          content={[
            'Cumplimiento PCI DSS',
            'Tokenización de datos de tarjetas',
            'Procesamiento seguro de transacciones',
            'No almacenamos datos bancarios completos',
          ]}
        />
      </TermsSection>
      <TermsSection title='6. Derechos del Usuario' content=''>
        <TermsSubSection
          title='Acceso y Consulta'
          content={[
            'Ver qué información tenemos sobre ti',
            'Solicitar copia de tus datos personales',
            'Consultar el propósito del procesamiento',
          ]}
        />
        <TermsSubSection
          title='Rectificación y Actualización'
          content={[
            'Corregir información inexacta',
            'Actualizar datos de contacto',
            'Completar información incompleta',
          ]}
        />
        <TermsSubSection
          title='Eliminación'
          content={[
            'Solicitar eliminación de datos personales',
            'Cancelar suscripciones de marketing',
            'Eliminar cuenta y datos asociados',
          ]}
        />
        <TermsSubSection
          title='Portabilidad'
          content={[
            'Recibir datos en formato estructurado',
            'Transferir información a otro proveedor',
          ]}
        />
        <TermsSubSection
          title='Oposición'
          content={[
            'Oponerse al procesamiento para marketing',
            'Revocar consentimiento otorgado',
            'Solicitar limitación del procesamiento',
          ]}
        />
      </TermsSection>
      <TermsSection title='7. Cookies y Tecnologías de Seguimiento' content=''>
        <TermsSubSection
          title='Cookies Esenciales'
          content={[
            'Funcionamiento básico del sitio',
            'Carrito de compras y sesiones',
            'Preferencias de idioma',
            'Configuraciones de usuario',
          ]}
        />
        <TermsSubSection
          title='Cookies de Análisis'
          content={[
            'Google Analytics (comportamiento de usuarios)',
            'Estadísticas de visitas y páginas',
            'Optimización del sitio web',
            'Medición de conversiones',
          ]}
        />
        <TermsSubSection
          title='Cookies de Marketing'
          content={[
            'Seguimiento de campañas publicitarias',
            'Remarketing y retargeting',
            'Personalización de anuncios',
            'Integración con redes sociales',
          ]}
        />
        <TermsSubSection
          title='Control de Cookies'
          content={[
            'Puedes gestionar las cookies desde:',
            'Configuración de tu navegador',
            'Panel de preferencias del sitio',
            'Herramientas de opt-out específicas',
          ]}
        />
      </TermsSection>
      <TermsSection title='8. Retención de Datos' content=''>
        <TermsSubSection
          title='Datos de Prospectos'
          content={[
            'Consultas y demos: 24 meses',
            'Newsletter: Hasta que solicites baja',
            'Datos de navegación: 12 meses',
          ]}
        />
        <TermsSubSection
          title='Datos de Clientes'
          content={[
            'Información de compra: 7 años (requerimiento fiscal)',
            'Soporte técnico: 3 años',
            'Comunicaciones: 2 años',
          ]}
        />
        <TermsSubSection
          title='Eliminación Automática'
          content={[
            'Limpieza regular de datos expirados',
            'Purga de sesiones inactivas',
            'Eliminación de registros temporales',
          ]}
        />
      </TermsSection>
      <TermsSection title='9. Transferencias de Datos' content=''>
        <TermsSubSection
          title='Proveedores Internacionales'
          content={[
            'Servicios en la nube (Google Cloud)',
            'Herramientas de marketing (Mailchimp, etc.)',
            'Garantías de protección adecuada',
            'Cláusulas contractuales estándar',
          ]}
        />
      </TermsSection>
      <TermsSection
        title='10. Menores de Edad'
        content={[
          'Servicios dirigidos exclusivamente a empresas',
          'No recopilamos datos de menores de 18 años',
          'Verificación de edad en registros',
        ]}
      />
      <TermsSection title='11. Actualizaciones' content=''>
        <TermsSubSection
          title='Notificación de Cambios'
          content={[
            'Email a usuarios registrados',
            'Aviso destacado en el sitio web',
            'Período de gracia antes de aplicar cambios',
          ]}
        />
        <TermsSubSection
          title='Registro de Versiones'
          content={[
            'Historial de modificaciones',
            'Fechas de actualización',
            'Resumen de cambios principales',
          ]}
        />
      </TermsSection>
      <TermsSection title='12. Contacto para Privacidad' content=''>
        <TermsSubSection
          title='Datos de Contacto'
          content={[
            'Email: contacto@erpsolutions.com',
            'Teléfono: +591 77517893',
            'Dirección: La Paz, Bolivia',
          ]}
        />
        <TermsSubSection
          title='Para Ejercer Derechos'
          content={[
            'Consultas generales: 48 horas de respuesta',
            'Solicitud de datos: 15 días hábiles',
            'Eliminación de datos: 30 días máximo',
          ]}
        />
        <TermsSubSection
          title='Formularios Disponibles'
          content={[
            'Formulario de contacto general',
            'Solicitud específica de privacidad',
            'Cancelación de suscripciones',
          ]}
        />
      </TermsSection>
      <TermsSection title='13. Quejas y Reclamos' content=''>
        <TermsSubSection
          title='Proceso Interno'
          content={[
            '1. Contacto directo con nuestro equipo',
            '2. Escalamiento a supervisión',
            '3. Resolución en máximo 30 días',
          ]}
        />
        <TermsSubSection
          title='Autoridades Competentes'
          content={[
            'Derecho a presentar quejas ante:',
            'Autoridades bolivianas de protección de datos',
            'Organismos de defensa del consumidor',
            'Entidades regulatorias correspondientes',
          ]}
        />
      </TermsSection>
      <TermsSection title='14. Cumplimiento Legal' content=''>
        <TermsSubSection
          title='Marco Legal Aplicable'
          content={[
            'Legislación boliviana de protección de datos',
            'Normativas de comercio electrónico',
            'Regulaciones de defensa del consumidor',
            'Estándares internacionales aplicables',
          ]}
        />
      </TermsSection>
    </div>
  );
};

export default PrivacyContent;
