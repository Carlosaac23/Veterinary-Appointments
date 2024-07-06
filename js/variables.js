import { generarId } from './funciones.js';

let editando = {
  value: false,
};

// Appointment object
const citaObj = {
  id: generarId(),
  paciente: '',
  propietario: '',
  email: '',
  fecha: '',
  sintomas: '',
};

export { editando, citaObj };
