import { notificacionContainer } from '../selectores.js';

export default class Notificacion {
  constructor({ mensaje, tipo }) {
    this.mensaje = mensaje;
    this.tipo = tipo;

    this.mostrar();
  }

  mostrar() {
    const alerta = document.createElement('div');
    document.querySelector('.noti-success, .noti-error, .noti-info')?.remove();

    const tipos = {
      error: 'noti-error',
      success: 'noti-success',
      info: 'noti-info',
    };

    alerta.classList.add(tipos[this.tipo]);
    alerta.innerHTML = `
      <h1>${this.tipo}</h1>
      <p>${this.mensaje}</p>
    `;

    notificacionContainer.appendChild(alerta);
    setTimeout(() => {
      alerta.classList.add('hide');

      alerta.addEventListener('animationend', () => {
        alerta.remove();
      });
    }, 3000);
  }
}
