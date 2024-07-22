import { form } from '../selectores.js';

export default class Notificacion {
  constructor({ texto, tipo }) {
    this.texto = texto;
    this.tipo = tipo;

    this.mostrar();
  }

  mostrar() {
    // Crear la notificación
    const alerta = document.createElement('div');
    alerta.classList.add('alert');
    // Eliminar alertas duplicadas
    const alertaPrevia = document.querySelector('.alert');
    alertaPrevia?.remove();
    // Si es de tipo error, agrega una clase
    this.tipo === 'error' ? alerta.classList.add('alert') : alerta.classList.add('noti');
    // Mensaje de error
    alerta.textContent = this.texto;
    // Insertar en el DOM
    form.parentElement.insertBefore(alerta, form);
    // Quitar después de 5s
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}
