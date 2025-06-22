const fs = require("fs");

// Crea una nueva cita y se guarda
const crearCita = (nombre, edad, tipo_de_animal, color, enfermedad) => {
  let citas = [];

  // Si existe, lo leemos
  if (fs.existsSync("citas.json")) {
    citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  }

  const nuevaCita = { nombre, edad, tipo_de_animal, color, enfermedad };
  citas.push(nuevaCita);

  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));
  console.log(`✅ Cita creada para ${nombre}`);
};

// Leer citas
const leerCitas = () => {
  if (!fs.existsSync("citas.json")) {
    return [];
  }
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  return citas;
};

module.exports = {
  crearCita,
  leerCitas,
};

