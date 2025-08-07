import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import bgTyC from '../assets/background/bg-tyc.webp'
import ParallaxHeader from '../components/Header/ParallaxHeader'

const TermsConditions = () => {
  const contentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      },
      { threshold: 0.1 }
    )
    if (contentRef.current) {
      observer.observe(contentRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex flex-col min-h-screen mt-0">
      {/* Encabezado con imagen de fondo fija */}
      <ParallaxHeader image={bgTyC} title="Términos y Condiciones de Uso" />

      {/* Contenido con animación al entrar */}
      <main
        ref={contentRef}
        className="max-w-4xl mx-auto px-4 py-12 space-y-8 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        {/* Contenedor del contenido con sombra */}
        <div className="p-6 rounded shadow dark:shadow-xl dark:shadow-black bg-white dark:bg-gray-800 transition-colors space-y-6">

        {/* Sección I */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">I. DEL OBJETO</h2>
        <p className="text-gray-700 dark:text-gray-300">
          El presente documento regula el acceso, navegación, uso y condiciones generales del sitio web <strong>chikara.org</strong> (en adelante, el “Sitio Web”), propiedad de la <strong>Organización Chikara</strong>, una organización juvenil sin ánimo de lucro dedicada a la difusión y enseñanza de la cultura y el idioma japonés de forma voluntaria, gratuita y con fines sociales.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          El acceso al Sitio Web implica la aceptación plena y sin reservas de los presentes términos. Si el usuario no está de acuerdo, deberá abstenerse de utilizar el Sitio Web.
        </p>

        {/* Sección II */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">II. DEL USUARIO</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Se considera usuario a toda persona que acceda, navegue o utilice el Sitio Web. El usuario se compromete a hacer un uso adecuado conforme a la ley, la moral y las normas de orden público, absteniéndose de dañar, inutilizar o deteriorar el Sitio Web.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          El registro es voluntario y gratuito. El usuario acepta proporcionar información veraz y actualizada y es responsable de proteger sus credenciales de acceso.
        </p>

        {/* Sección III */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">III. DEL ACCESO Y NAVEGACIÓN EN EL SITIO WEB</h2>
        <p className="text-gray-700 dark:text-gray-300">
          El acceso al Sitio Web es libre y gratuito, aunque algunos servicios pueden requerir registro previo. La Organización Chikara no garantiza la disponibilidad permanente del Sitio Web y no será responsable de posibles interrupciones, errores o daños derivados del uso del mismo.
        </p>

        {/* Sección IV */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">IV. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h2>
        <p className="text-gray-700 dark:text-gray-300">
          La Organización Chikara garantiza la protección de los datos personales conforme al Reglamento General de Protección de Datos (RGPD) y otras normativas aplicables.
        </p>
        <p className="text-gray-700 dark:text-gray-300"><strong>Finalidad:</strong> Gestionar registros, participación en actividades y envío de información relevante.</p>
        <p className="text-gray-700 dark:text-gray-300"><strong>Conservación:</strong> Los datos se conservarán solo el tiempo necesario para cumplir la finalidad.</p>
        <p className="text-gray-700 dark:text-gray-300"><strong>Derechos:</strong> El usuario puede ejercer sus derechos de acceso, rectificación, cancelación y oposición mediante solicitud directa a la organización.</p>
        <p className="text-gray-700 dark:text-gray-300"><strong>Cesión:</strong> No se cederán datos a terceros sin consentimiento expreso, salvo obligación legal.</p>
        <p className="text-gray-700 dark:text-gray-300"><strong>Seguridad:</strong> Se aplican medidas adecuadas para garantizar la seguridad de los datos personales.</p>

        {/* Sección V */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">V. POLÍTICA DE ENLACES</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Este Sitio Web puede contener enlaces a sitios de terceros. La Organización Chikara no se hace responsable de sus contenidos ni de sus políticas de privacidad. La inclusión de estos enlaces no implica relación ni asociación con dichos sitios externos.
        </p>

        {/* Sección VI */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">VI. POLÍTICA EN MATERIA DE PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Todo el contenido del Sitio Web, incluyendo textos, imágenes, logotipos, y videos, es propiedad de la Organización Chikara o de sus respectivos titulares y está protegido por las leyes nacionales e internacionales de propiedad intelectual.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Está prohibida la reproducción, distribución o cualquier otro uso no autorizado de estos contenidos sin el consentimiento expreso de la Organización Chikara.
        </p>

        {/* Sección VII */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">VII. LEGISLACIÓN Y JURISDICCIÓN APLICABLE</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Estos términos se rigen por la normativa internacional aplicable y por las leyes locales de Colombia. Cualquier controversia será resuelta por los tribunales de Mosquera, Cundinamarca, Colombia, salvo que la normativa de protección al consumidor indique lo contrario.
        </p>

        {/* Aceptación */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Aceptación y Consentimiento</h2>
        <p className="text-gray-700 dark:text-gray-300">
          El uso continuo del Sitio Web se considerará como aceptación expresa de los presentes términos y condiciones, así como de la política de privacidad de la Organización Chikara.
        </p>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/"
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded shadow dark:shadow-xl dark:shadow-black transition-colors"
          >
            Volver al Inicio
          </Link>
        </div>
      </main>
    </div>
  )
}

export default TermsConditions

        
        
        
        
