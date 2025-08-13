import {
  pacienteInput,
  propietarioInput,
  emailInput,
  fechaInput,
  sintomasInput,
  form,
} from './selectores.js';
import { datosCita, submitCita } from './funciones.js';

// Events
pacienteInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);
form.addEventListener('submit', submitCita);
