const apple = '[Política de privacidad de Apple](https://www.apple.com/legal/privacy/)';
const mail = '[dmitry8.work@gmail.com](mailto:dmitry8.work@gmail.com)';

export const es = {
  kicker: 'En vigor el 18 de noviembre de 2026',
  title: 'Política de privacidad de Odys Travel',
  meta: ['**Fecha de entrada en vigor:** 18 de noviembre de 2026', '**Desarrollador:** Dmitry Sinkevich', `**Contacto:** ${mail}`],
  blocks: [
    { p: [`Esta política describe cómo Odys Travel («la app») trata la información. El editor es Dmitry Sinkevich («nosotros»). Contacto: ${mail}.`] },
    { h: '1. Qué recibimos y qué no', p: [
      'La app construye un mapa de viajes en tu iPhone a partir de la fecha y el lugar de las fotos. No tenemos cuentas ni un servidor que reciba tus fotos, metadatos, viajes o notas.',
      'El tratamiento que permanece en el dispositivo lo realiza la app en ese dispositivo. No podemos verlo y no somos responsables de esa información. La borras en la app o al eliminar la app.',
      `Si activas la sincronización con iCloud o usas la copia de iCloud, Apple trata los datos correspondientes en tu propia cuenta de Apple. Apple es responsable independiente de iCloud, CloudKit, Fotos, Face ID y el uso compartido de diagnósticos. Consulta la ${apple}.`,
    ] },
    { h: '2. Sin publicidad y sin rastreo', p: ['La app no tiene publicidad, ni SDK de analítica de terceros, ni rastreo entre apps. No vendemos, alquilamos ni compartimos datos personales para publicidad o elaboración de perfiles.'] },
    { h: '3. Información que permanece en el dispositivo', p: ['Si permites el acceso a Fotos, la app lee en el dispositivo:'], ul: [
      'Fecha y hora de captura de fotos y vídeos.',
      'Coordenadas GPS guardadas en esas fotos y vídeos.',
      'Lugares derivados: países, regiones, ciudades, estancias y rutas.',
      'Viajes, notas, una lista de deseos y ajustes que creas.',
      'Un índice local de fotos (identificador del recurso, fecha, coordenadas y lugar). Si Fotos en iCloud puede aportar uno, el índice también puede guardar el identificador de foto en la nube de Apple para poder reparar el índice en este dispositivo. Ese índice no lo sincronizamos nosotros y queda excluido de las copias.',
    ] },
    { p: ['Las fotos se muestran a través de la fototeca. No copiamos píxeles de fotos ni de vídeos a nuestros servidores. No pedimos tu ubicación en tiempo real. No hay permiso de localización.'] },
    { h: '4. Permisos', body: [
      { ul: [
        '**Fotos.** Sirve para leer fechas y lugares, y para mostrar o adjuntar las fotos que eliges. Puedes elegir acceso completo, limitado o ninguno en **Ajustes > Privacidad y seguridad > Fotos > Odys Travel**. El acceso limitado puede dejar el mapa incompleto.',
        '**Face ID.** Solo se usa si activas el bloqueo de la app. La comprobación la hace iOS. La app no recibe tu rostro, huella ni código.',
      ] },
      { p: 'La app no pide permiso para mostrar notificaciones ni envía mensajes comerciales. No usa Salud, contactos, micrófono ni cámara como entrada.' },
    ] },
    { h: '5. Sincronización opcional con iCloud', p: [
      'La sincronización está desactivada hasta que actives **Sincronizar con iCloud** en la app y la reinicies. Tienes que haber iniciado sesión en iCloud.',
      'Cuando está activa, lugares, viajes, notas y la lista de deseos se guardan en tu base privada de CloudKit (**iCloud.com.disin8.odys-travel**) para que tus dispositivos los compartan. Las fotos y el índice permanecen en el dispositivo. Apple puede enviar actualizaciones silenciosas de sincronización a esos dispositivos. No recibimos una copia de tu base de iCloud.',
      'Si la copia de iCloud está activada en el iPhone, iOS puede incluir la base local de la app en esa copia. El índice de fotos está excluido. Las copias están en tu cuenta de Apple, no en la nuestra.',
    ] },
    { h: '6. Solo sale del dispositivo lo que tú envías', ul: [
      '**Exportar y compartir.** La copia (JSON), CSV, KML, GPX y las tarjetas se crean cuando lo pides y solo van adonde tú las envías. Las copias no incluyen archivos de fotos ni identificadores de fotos.',
      '**Widget.** Un resumen (recuentos, banderas, título y fechas del último viaje, distancia, días) se guarda en un grupo de apps del dispositivo para el widget. Nosotros no lo subimos.',
      '**Spotlight.** Los nombres de países y ciudades visitados pueden indexarse en el dispositivo para que la búsqueda de iOS los abra. No recibimos esas búsquedas.',
    ] },
    { h: '7. Diagnósticos de fallos', p: ['La app no incluye un informador de fallos propio. Si activas Compartir con desarrolladores en iOS (**Ajustes > Privacidad y seguridad > Análisis y mejoras**), Apple puede enviarnos diagnósticos como el modelo del dispositivo, la versión del sistema y una traza. Los usamos solo para corregir defectos. Puedes desactivar ese uso compartido en Ajustes.'] },
    { h: '8. Conservación y supresión', p: [
      'Los datos del dispositivo permanecen hasta que borres registros en la app, uses **Eliminar todos los datos** o elimines la app. Eliminar todos los datos borra los lugares visitados y el índice de fotos en ese iPhone. No borra las fotos de la fototeca.',
      'No tenemos una copia que restaurar. Los datos de iCloud, después de activar la sincronización, se eliminan a través de tu cuenta de Apple y al desactivar la sincronización. Los archivos exportados se quedan donde los guardaste.',
    ] },
    { h: '9. Menores', p: ['La app no está dirigida a menores. No debería usarla nadie por debajo de la edad exigida en su país. No recogemos a sabiendas datos personales de menores. Si crees que un menor nos ha enviado información, escríbenos y borraremos lo que realmente tengamos.'] },
    { h: '10. Tus derechos', p: [
      'El diario permanece en tu dispositivo y, si lo activas, en tu iCloud privado, así que el acceso, la rectificación, la exportación y la supresión se hacen allí. Según el RGPD y leyes similares, también puedes oponerte, limitar el tratamiento o presentar una reclamación.',
      `Las solicitudes sobre información que realmente tengamos (por ejemplo un correo de soporte o un diagnóstico de fallo recibido de Apple) pueden enviarse a ${mail}. Si tratamos diagnósticos de fallos, lo hacemos por el interés legítimo de mantener la app estable. Puedes detener ese uso compartido en Ajustes.`,
      'Puedes reclamar ante la autoridad de protección de datos de tu zona.',
    ] },
    { h: '11. California y otros estados de EE. UU.', p: ['No vendemos ni compartimos datos personales en el sentido de la CCPA/CPRA, ni los usamos para publicidad conductual entre contextos. No conservamos una copia del diario en un servidor.'] },
    { h: '12. Cambios', p: ['Si esta política cambia, cambiará la fecha de arriba. Los cambios importantes se publicarán en esta página. La práctica anterior queda descrita por la versión que estaba en vigor en ese momento.'] },
    { h: '13. Contacto', p: ['**Dmitry Sinkevich**', `Correo: ${mail}`, 'Consulta también las [Condiciones de uso](/odys/terms/) y el [Soporte](/odys/support/).'] },
  ],
};
