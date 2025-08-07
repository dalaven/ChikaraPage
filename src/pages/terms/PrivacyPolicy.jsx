import React from 'react';
import TermsContent from '../../components/Terms/TermsContent';

const PrivacyPolicy = () => {
  return (
    <TermsContent className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <h2>Política de Privacidad</h2>

      <h3>I. Identificación del Responsable del Tratamiento</h3>
      <p>
        La organización juvenil sin ánimo de lucro <strong>Chikara</strong> es la entidad responsable del tratamiento de tus datos personales,
        conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013 (Colombia). Puedes contactarnos
        para ejercer tus derechos o consultas al correo <a href="mailto:chikara.organizacion@gmail.com">chikara.organizacion@gmail.com</a>
        o mediante mensaje directo por nuestras redes sociales oficiales.
      </p>

      <h3>II. Datos Personales que se recolectan</h3>
      <ul>
        <li><strong>Identificación:</strong> nombres completos y número de documento de identidad.</li>
        <li><strong>Contacto:</strong> correo electrónico y número de teléfono móvil.</li>
        <li><strong>Demografía socio‑económica:</strong> edad o rango etario; municipio y barrio de residencia; afiliación a subsidios.</li>
        <li><strong>Situación académica y laboral:</strong> formación profesional y estado actual (estudia, trabaja, desempleado).</li>
        <li><strong>Preferencias y voluntariado:</strong> intereses culturales, métodos de aprendizaje y disponibilidad horaria.</li>
        <li><strong>Datos sensibles:</strong> afiliación a subsidios, considerada dato sensible conforme a la Ley 1581/2012.</li>
      </ul>

      <h3>III. Finalidades del Tratamiento y Bases Legales</h3>
      <ul>
        <li>Gestión de actividades culturales gratuitas (talleres, cursos, voluntariados).</li>
        <li>Envío de comunicaciones informativas y boletines culturales.</li>
        <li>Gestión de voluntariado y subsidios (“Mosquera Pila”).</li>
        <li>Elaboración de estadísticas e informes de impacto social.</li>
      </ul>
      <p>
        <strong>Bases legales aplicables:</strong><br />
        Consentimiento expreso del titular; interés legítimo de una organización cultural sin ánimo de lucro; y ejecución de actividades con fines educativos.
      </p>

      <h3>IV. Derechos de los Titulares</h3>
      <p>
        Según la Ley 1581 de 2012 y RGPD (si aplica), tienes derecho a acceso, rectificación, supresión o bloqueo (conocidos como Derechos ARCO),
        portabilidad y oposición. Menores entre 14 y 18 años pueden otorgar consentimiento para tratamiento de datos con representación informada.
        Menores menores de 14 años requieren autorización explícita de sus padres o representantes legales.
      </p>
      <p>
        Las solicitudes pueden enviarse al correo <a href="mailto:chikara.organizacion@gmail.com">chikara.organizacion@gmail.com</a> o vía redes sociales,
        y se atenderán dentro de los plazos legales establecidos.
      </p>

      <h3>V. Medidas de Seguridad y Plazos de Conservación</h3>
      <ul>
        <li>Aplicamos medidas técnicas, organizativas y físicas para proteger tus datos (contraseñas seguras, control de acceso, almacenamiento local seguro).</li>
        <li>Los datos se conservan de forma indefinida mientras no solicites revocación, supresión o bloqueo.</li>
        <li>Las solicitudes de eliminación se procesan según la normativa vigente.</li>
      </ul>

      <h3>VI. Transferencias de datos a terceros o fuera del país</h3>
      <p>
        Los formularios de Google Forms almacenan datos en los servidores de Google (ubicación internacional), que posteriormente se descargan y guardan localmente
        en Colombia. El hosting está a cargo de Hostinger, con posible presencia internacional.
        Chikara no transfiere datos personales a terceros sin autorización expresa del titular, salvo requerimientos legales o situaciones específicas.
      </p>

      <h3>VII. Uso de Cookies y Herramientas de Rastreo</h3>
      <p>
        Actualmente no utilizamos cookies, etiquetas pixel, Google Analytics ni herramientas similares, por lo que no se solicita consentimiento previo.
        En futuras implementaciones podrían emplearse estas tecnologías, solicitando consentimiento explícito y actualizando esta política.
      </p>

      <h3>VIII. Contacto para Ejercicio de Derechos</h3>
      <p>
        Puedes ejercer tus derechos mediante correo electrónico: <a href="mailto:chikara.organizacion@gmail.com">chikara.organizacion@gmail.com</a> o mensaje directo en nuestras redes sociales oficiales.
        Las solicitudes son gratuitas y se procesan en el marco de la normativa aplicable.
      </p>

      <h3>IX. Modificaciones a la Política</h3>
      <p>
        Chikara se reserva el derecho de modificar esta política en cualquier momento. Las versiones actualizadas serán publicadas en el sitio web y se notificará
        a los usuarios registrados por correo electrónico con al menos un mes de antelación. El uso continuado del sitio implica aceptación de los cambios.
      </p>

      <h3>X. Cesión de Derechos de Imagen</h3>
      <p>
        Al participar en cualquier actividad de Chikara, aceptas ceder gratuitamente y de forma permanente tus derechos de imagen para uso institucional (fotos, videos),
        sin compensación. Puedes revocar esta autorización en cualquier momento contactándonos al correo o redes sociales; tras ello, se retirarán publicaciones futuras.
      </p>

    </TermsContent>
  );
};

export default PrivacyPolicy;
