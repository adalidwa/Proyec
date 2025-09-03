import React from 'react';
import DocumentationCard from '../components/ui/DocumentationCard';
import './DocumentsPage.css';

const DocumentsPage: React.FC = () => {
  const documentationSections = [
    {
      title: 'Inventario',
      items: [
        'Control de stock',
        'Entradas y salidas',
        'Almacenes y ubicaciones',
        'Productos y categorías',
        'Lotes y fechas de vencimiento',
      ],
    },
    {
      title: 'Compras',
      items: [
        'Órdenes de compra',
        'Proveedores',
        'Recepciones y devoluciones',
        'Compras, gastos y retenciones',
      ],
    },
    {
      title: 'Ventas',
      items: [
        'Punto de venta',
        'Clientes',
        'Facturas y comprobantes',
        'Descuentos y promociones',
        'Historial de compras',
      ],
    },
    {
      title: 'Reportes',
      items: [
        'Reportes de inventario',
        'Reportes de ventas',
        'Indicadores (KPIs)',
        'Exportar a Excel/PDF',
      ],
    },
  ];

  return (
    <div className='documentsPage'>
      <div className='documentsPage__container'>
        <header className='documentsPage__header'>
          <h1 className='documentsPage__title'>Documentación del usuario</h1>
          <p className='documentsPage__lastUpdate'>Última actualización: 9 de agosto de 2025</p>
        </header>
        <main className='documentsPage__contentGrid'>
          {documentationSections.map((section) => (
            <DocumentationCard key={section.title} title={section.title} items={section.items} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default DocumentsPage;
