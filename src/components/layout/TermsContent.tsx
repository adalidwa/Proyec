import TermsSection from '../common/TermsSection';
import TermsSubSection from '../common/TermsSubSection';
import './TermsContent.css';

const TermsContent = () => {
  return (
    <div className='terms-content'>
      <TermsSection
        title='Alcance y Aceptación de los Términos'
        content='Estos son los términos del sitio web de InnovaPaz, una empresa radicada de S.A.S. están diseñados para presentar servicios basados en negocios. Los términos están sujetos de cambio periódicamente. Al usar InnovaPaz, usted acepta los Términos de Uso completamente sin salvedad.'
      />

      <TermsSection
        title='Política de Uso Aceptable (PUA)'
        content='Usted no debe usar InnovaPaz para alguna actividad restringida por la PUA. Cualquier violación de las normas descritas a continuación puede resultar en la suspensión o terminación de la cuenta y prohibición del uso del Sitio Web.'
      >
        <TermsSubSection
          title='Uso Ilegal o Prejudicial'
          content={[
            'No se debe utilizar InnovaPaz para actividades que violen las leyes aplicables o que sean ilegales, inapropiadas, indecorosas, u objetables o que no se limita a:',
            '• Actividades ilegales: Cualquier actividad que viole las leyes vigentes de Bolivia.',
            '• Contenido Prejudicial: Transmisión de blasfemias o servicios que incluyan contenido ofensivo, insistir mal o profundizar prácticas inapropiadas.',
            '• Derechos de Autor: Uso de cualquier contenido sin autorización del propietario de la propiedad intelectual protegida.',
            '• Contenido Obsceno: Distribución, almacenamiento, obsceno o contenido gráficamente violento o repugnante.',
          ]}
        />
        <TermsSubSection
          title='Violaciones de Seguridad y Privacidad'
          content={[
            'El usuario no debe comprometer la seguridad de los servicios de InnovaPaz. Esto incluye, pero no se limita a:',
            '• Acceso No Autorizado: Intentar acceder a sistemas o datos sin la autorización correspondiente o usar credenciales robadas.',
            '• Espionaje: Escuchar o grabar datos que no le pertenecen.',
            '• Ataques de Red: Causar interrupción del servicio (DDoS) o cualquier otro tipo de ataque en la infraestructura o el rendimiento de nuestros sistemas.',
          ]}
        />
        <TermsSubSection
          title='Abuso de Recursos y Servicios'
          content={[
            'El Cliente se compromete a no abusar de los recursos de InnovaPaz. Específicamente, las siguientes actividades están prohibidas:',
            '• Sobrecarga de Datos: Afectar el rendimiento del sistema con una cantidad anormalmente alta de datos o elementos para procesar.',
            '• Rastreo Automatizado: El rastreo automático de nuestros recursos que afecte la disponibilidad y el rendimiento del servicio.',
          ]}
        />
      </TermsSection>

      <TermsSection
        title='Derechos de Propiedad Intelectual'
        content={[
          'Todos los derechos de propiedad intelectual del software, el diseño, los materiales y la documentación de InnovaPaz pertenecen exclusivamente a InnovaPaz S.R.L. El Cliente no adquiere ningún derecho de propiedad sobre el software, sino una licencia de uso limitada mientras dure la suscripción.',
          'El Cliente no puede copiar, modificar, descompilar, realizar ingeniería inversa, distribuir o vender el software de InnovaPaz sin nuestro consentimiento por escrito. Cualquier modificación no autorizada o intento de derivar el código fuente está estrictamente prohibido.',
        ]}
      />

      <TermsSection
        title='Responsabilidad por el Contenido del Cliente'
        content='InnovaPaz no se hace responsable del contenido (datos de inventario, ventas, clientes, etc.) que el Cliente ingrese en el sistema. El Cliente es el único responsable de la exactitud, legalidad y veracidad de los datos que almacena y gestiona a través de nuestros servicios.'
      />

      <TermsSection
        title='Limitación de Responsabilidad'
        content='InnovaPaz no se hace responsable de daños indirectos, incidentales, especiales o consecuentes que puedan surgir del uso o la imposibilidad de uso de nuestros servicios. Nuestra responsabilidad total se limitará al monto de las tarifas pagadas por el Cliente en los últimos seis meses previos a la reclamación.'
      />

      <TermsSection
        title='Terminación de la Suscripción'
        content='InnovaPaz puede, a su discreción, suspender o terminar la cuenta del Cliente en caso de incumplimiento de estos términos. El Cliente puede solicitar la terminación de su cuenta en cualquier momento enviando una solicitud por escrito a nuestro equipo de soporte.'
      />
    </div>
  );
};

export default TermsContent;
