import mostrarNotificacion from './notificacion.js';
import AdminCitas from './classes/AdminCitas.js';
import { citaObj, editando } from './variables.js';
import { form, formInput, pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput } from './selectores.js';

const citas = new AdminCitas();

export function datosCita(e) {
  citaObj[e.target.name] = e.target.value;
}

export function submitCita(e) {
  e.preventDefault();

  if (Object.values(citaObj).some(valor => valor.trim() === '')) {
    mostrarNotificacion('Todos los campos son obligatorios', 'error');
    return;
  }

  if (editando.value) {
    citas.editar({ ...citaObj });
    mostrarNotificacion('Guardado Correctamente', 'info');
  } else {
    citas.agregar({ ...citaObj });
    mostrarNotificacion('Paciente Registrado', 'success');
  }

  form.reset();
  reiniciarObjetoCita();
  formInput.value = 'Registrar paciente';
  editando.value = false;
}

export function reiniciarObjetoCita() {
  // Reiniciar el objeto
  (citaObj.id = generarId()), (citaObj.paciente = ''), (citaObj.propietario = ''), (citaObj.email = ''), (citaObj.fecha = ''), (citaObj.sintomas = '');
}

export function generarId() {
  return Math.random().toString(36).substring(2) + Date.now();
}

export function cargarEdicion(cita) {
  Object.assign(citaObj, cita);

  pacienteInput.value = cita.paciente;
  propietarioInput.value = cita.propietario;
  emailInput.value = cita.email;
  fechaInput.value = cita.fecha;
  sintomasInput.value = cita.sintomas;

  editando.value = true;

  formInput.value = 'Guardar cambios';
}
