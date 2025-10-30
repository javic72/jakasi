import React from 'react';
import SectionCard from './components/SectionCard';
import FeatureListItem from './components/FeatureListItem';
import { 
  WrenchScrewdriverIcon, 
  MicrophoneIcon, 
  VideoCameraIcon, 
  CheckCircleIcon, 
  DevicePhoneMobileIcon, 
  PencilSquareIcon, 
  PlayCircleIcon,
  SparklesIcon,
  CalendarDaysIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  PresentationChartBarIcon,
  PaintBrushIcon,
  ExclamationTriangleIcon,
  DeviceLaptopIcon,
  WifiIcon,
  CommandLineIcon
} from './components/icons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 antialiased">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Análisis de Solución de Videoconferencia
          </h1>
        </header>

        {/* APARTADO 1 */}
        <SectionCard title="Apartado 1: Pilares Fundamentales y Necesidades">
          <p className="text-slate-600 mb-6">
            En una solución de videoconferencia hay que distinguir entre 3 apartados que por orden de importancia son estos:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <WrenchScrewdriverIcon className="h-8 w-8 text-indigo-500 mb-2" />
              <h3 className="font-semibold text-lg text-slate-900">Funcionalidades</h3>
              <p className="text-slate-600 text-sm">La solución debe cubrir exactamente el uso previsto de la sala. Si no resuelve las necesidades, lo demás es secundario.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <MicrophoneIcon className="h-8 w-8 text-indigo-500 mb-2" />
              <h3 className="font-semibold text-lg text-slate-900">Audio</h3>
              <p className="text-slate-600 text-sm">Sin buen audio no hay videoconferencia posible, pero hay un elemento externo a la solución de videoconferencia que afecta directamente en ese punto, y es la acústica de la sala, una acústica de sala mala (efecto de reverberación alto) no hay Hardware que lo solucione, La acústica de vuestra sala es correcta, por lo que la microfonía integrada de las soluciones actuales resulta suficiente.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <VideoCameraIcon className="h-8 w-8 text-indigo-500 mb-2" />
              <h3 className="font-semibold text-lg text-slate-900">Video</h3>
              <p className="text-slate-600 text-sm">En salas de tamaño medio, una cámara 4K integrada ofrece un rendimiento óptimo; sólo en salas muy grandes o con requerimientos de seguimiento avanzado hace falta óptica específica.</p>
            </div>
          </div>
          <h3 className="font-semibold text-xl text-slate-900 mb-4 border-b pb-2">Vuestras Necesidades</h3>
          <ul className="space-y-3">
            <FeatureListItem icon={<CheckCircleIcon className="h-6 w-6 text-green-500" />}>Realizar videoconferencias con cualquier plataforma (Teams, Google Meet, Zoom, Webex, etc…)</FeatureListItem>
            <FeatureListItem icon={<CheckCircleIcon className="h-6 w-6 text-green-500" />}>Que teneis usuarios sin portatil y con portatil</FeatureListItem>
            <FeatureListItem icon={<CheckCircleIcon className="h-6 w-6 text-green-500" />}>Los usuarios con portátil quieren BYOM (usar cámara, micrófonos y altavoces de la sala de forma inalámbrica).</FeatureListItem>
            <FeatureListItem icon={<CheckCircleIcon className="h-6 w-6 text-green-500" />}>Los usuarios sin portátil necesitan un PC con Windows en la sala para ejecutar la plataforma que deseen.</FeatureListItem>
          </ul>
        </SectionCard>

        {/* APARTADO 2 */}
        <SectionCard title="Apartado 2: Solución Propuesta y Funcionalidades">
          <p className="text-slate-600 mb-6">
            Te cuento como la solución que os proponemos cumple con todos los requisitos y funcionalidades extras para que valoréis.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 text-indigo-800 p-4 rounded-r-lg mb-6">
            <p className="font-bold">Monitor All in One:</p>
            <p>Dispone de pantalla táctil, conjunto de cámaras 4K, array de 16 micrófonos, altavoces, dongle inalámbrico y PC con CPU Intel i5, 16Gb RAM y Windows 11.</p>
            <p className="mt-2 font-semibold">Ventajas operativas: tenemos un Hardware que incluye todo, menos elementos que puedan fallar, menos fuentes de alimentación, menos cables que se puedan desconectar accidentalmente, todo en un único fabricante, con un único firmware a la hora de actualizar la solución y con 3 años de garantía (ampliables).</p>
          </div>

          <h3 className="font-semibold text-xl text-slate-900 mt-8 mb-4">Uso para personal sin portátil</h3>
          <p className="text-slate-600 mb-6">Podrán realizar las videoconferencias desde el PC incluido, al que le podremos instalar cualquier de las aplicaciones que queramos, pero lo interesante de este PC a diferencia de cualquier otro que se instalase en la sala es que incluye dos cosas fundamentales:</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                    <SparklesIcon className="h-6 w-6 text-amber-500"/>
                    <h4 className="font-bold text-lg text-slate-900">LAUNCHER</h4>
                </div>
              <p className="text-slate-600">El usuario no ve el escritorio de Windows, sino un launcher intuitivo que facilita el uso y evita modificaciones accidentales, lo que reduce problemas para el departamento de IT. Atención: este launcher se ejecuta sobre Windows, a diferencia de otras pantallas interactivas del mercado, donde el launcher está en la capa de Android y, al cambiar a Windows, aparece el escritorio estándar.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                    <CalendarDaysIcon className="h-6 w-6 text-amber-500"/>
                    <h4 className="font-bold text-lg text-slate-900">CALENDARIO</h4>
                </div>
              <p className="text-slate-600">Los usuarios tienen múltiples formas de acceder a una sesión de videoconferencia, cada uno de ellos lo hará de la manera más fácil que le parezca, pero una de las formas más habituales será la de crear una convocatoria como hacen ahora habitualmente y lo único que tendrán que hacer será invitar a la cuenta que tiene el sistema de videoconferencia de la sala, donde tendremos un calendario de reuniones y el usuario simplemente al llegar a la sala tendrá que realizar un click en la reunion que le parece en el calendario de la pantalla.</p>
            </div>
          </div>
          
          <h4 className="font-semibold text-lg text-slate-900 mb-3">Funcionalidades adicionales durante la videoconferencia:</h4>
          <ul className="space-y-3">
            <FeatureListItem icon={<DevicePhoneMobileIcon className="h-6 w-6 text-sky-500" />}>Cualquier usuario que está en la sala podrá compartir el contenido de su portatil, Tablet o movil en la videoconferencia de manera muy sencilla.</FeatureListItem>
            <FeatureListItem icon={<PencilSquareIcon className="h-6 w-6 text-sky-500" />}>Podremos escribir en la pantalla sobre un lienzo en blanco o en cualquier documento o aplicación que abramos, esto se verá tanto en local como los usuarios que están en remoto.</FeatureListItem>
            <FeatureListItem icon={<PlayCircleIcon className="h-6 w-6 text-sky-500" />}>Podremos grabar todo lo que sucede en la pantalla, salvarlo en un fichero y reenviarlo donde queramos.</FeatureListItem>
          </ul>
        </SectionCard>

        {/* APARTADO 3 */}
        <SectionCard title="Apartado 3: Uso para Personal con Portátil (BYOM)">
            <div className="bg-amber-50 border-l-4 border-amber-400 text-amber-900 p-4 rounded-r-lg mb-6" role="alert">
                <div className="flex">
                    <div className="py-1"><ExclamationTriangleIcon className="h-6 w-6 text-amber-500 mr-4" /></div>
                    <div>
                        <p className="font-bold">Nota Importante</p>
                        <p className="text-sm">Antes de explicarte el proceso, recordarte el video que te mande ayer y que te vuelvo a adjuntar aquí, en el que te explicaba que en las barras All in One, no es compatible cuando tienen un PC conectada también a la barra.</p>
                    </div>
                </div>
            </div>
            <p className="text-slate-600 mb-6">Podrán realizar video las videoconferencias directamente desde su portatil, usando la cámara, micrófonos y altavoces del monitor MAXHUB V7 All in ONE de 3 maneras:</p>
            <ul className="space-y-4">
                <FeatureListItem icon={<DeviceLaptopIcon className="h-7 w-7 text-indigo-500" />}>
                    <span className="font-bold">A través de un dongle (suministrado por separado)</span> pinchando en el puerto USB-C, además el laptop NO es necesario que este en la misma RED que el monitor MAXHUB V7 All in One, esto es fundamental porque hay empresas que la red cableada y la de WIFI la tienen separada por seguridad (no se si es vuestro caso) o también sería interesante para usuarios de fuera de vuestra organización que van son su propia conectividad.
                </FeatureListItem>
                 <FeatureListItem icon={<WifiIcon className="h-7 w-7 text-indigo-500" />}>
                    <span className="font-bold">A través de una aplicación (gratuita)</span> que se instala en los portátiles, una vez instalada ya estará siempre disponible, y simplemente es llegar a la sala pinchar la aplicación y automáticamente la pantalla del portatil la vemos en el monitor y recibimos de manera inalámbrica la cámara, micrófonos y altavoces del monitor MAXHUB ALL in One, yo como usuario que soy de esta forma de hacerlo me resulta más cómodo aun que pinchar el dongle, el pequeño inconveniente es que en ese caso sí que tienes que estar en la misma RED que el monitor.
                </FeatureListItem>
                 <FeatureListItem icon={<CommandLineIcon className="h-7 w-7 text-indigo-500" />}>
                    <span className="font-bold">A través de cable.</span> Poco que explicar aquí.
                </FeatureListItem>
            </ul>
        </SectionCard>
        
        {/* APARTADO 4 */}
        <SectionCard title="Apartado 4: Beneficios Adicionales de la Solución">
            <p className="text-slate-600 mb-6">
                Hasta aquí cubrimos las necesidades que teneis, ¿Qué otras cosas te pueden aportar esta solución?
            </p>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                       <PresentationChartBarIcon className="h-8 w-8 text-teal-500 mt-1" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-slate-900">Reuniones Locales y Colaboración</h3>
                        <p className="text-slate-600">Lógicamente sin realizar videoconferencia los usuarios van a poder usar este sistema para tener una reunion local, en donde van a poder compartir el contenido de sus portátiles, tablets y móviles de múltiples maneras (Dongle inalambrico, aplicación, Miracast, Airplay, Web…) además dispones de touch-back, esto te permite compartir la pantalla de tu portatil y desde el monitor tocar la pantalla y controlar tu portatil, muy útil para hacer escribir sobre el contenido que estas emitiendo y hacer una presentación más interactiva.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                       <PaintBrushIcon className="h-8 w-8 text-teal-500 mt-1" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-slate-900">Pizarra Interactiva Digital</h3>
                        <p className="text-slate-600">También vais a disponer de una pizarra interactiva para sustituir las pizarras Velleda que teneis en las paredes, dispone de un lienzo en blanco con multitud de herramientas y que permite salvar todo lo escrito y compartirlo de múltiples formas.</p>
                    </div>
                </div>
            </div>
        </SectionCard>
      </main>
    </div>
  );
};

export default App;