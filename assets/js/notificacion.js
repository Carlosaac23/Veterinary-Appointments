import { notificacionContainer } from './selectores.js';

export default function mostrarNotificacion(mensaje, tipo) {
  const notififacion = document.createElement('div');

  notififacion.classList.add(`noti-${tipo}`);
  notififacion.textContent = mensaje;

  notificacionContainer.appendChild(notififacion);
  setTimeout(() => notififacion.remove(), 2500);
}
