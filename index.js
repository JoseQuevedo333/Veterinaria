const { crearCita, leerCitas } = require('./operaciones');

const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);

if (operacion === 'registrar') {
  if (!nombre || !edad || !tipo || !color || !enfermedad) {
    console.log('❗ Faltan argumentos. Usa: node index.js registrar <nombre> <edad> <tipo> <color> <enfermedad>');
    process.exit(1);
  }
  crearCita(nombre, edad, tipo, color, enfermedad);
}

if (operacion === 'leer') {
  const citas = leerCitas();
  console.log('📋 Citas registradas:');
  citas.forEach((cita, i) => {
    console.log(`${i + 1}. ${cita.nombre} (${cita.edad}) - ${cita.tipo_de_animal}, ${cita.color} - ${cita.enfermedad}`);
  });
}
