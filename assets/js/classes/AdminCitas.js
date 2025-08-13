import { contenedorCitas } from '../selectores.js';
import { cargarEdicion } from '../funciones.js';

export default class AdminCitas {
  constructor() {
    this.citas = [];
  }

  agregar(cita) {
    this.citas = [...this.citas, cita];
    this.mostrar();
  }

  editar(citaActualizada) {
    this.citas = this.citas.map(cita => (cita.id === citaActualizada.id ? citaActualizada : cita));
    this.mostrar();
  }

  eliminar(id) {
    this.citas = this.citas.filter(cita => cita.id !== id);
    this.mostrar();
  }

  mostrar() {
    // Limpiar el HTML previo
    while (contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }

    // Si hay citas
    if (this.citas.length === 0) {
      contenedorCitas.innerHTML = '<p>No Hay Pacientes</p>';
      return;
    }

    // Generando las citas
    this.citas.forEach(cita => {
      const divCita = document.createElement('div');
      divCita.classList.add('divCita');

      const paciente = document.createElement('p');
      paciente.innerHTML = `<span>Paciente: </span> ${cita.paciente}`;

      const propietario = document.createElement('p');
      propietario.innerHTML = `<span>Propietario: </span> ${cita.propietario}`;

      const email = document.createElement('p');
      email.innerHTML = `<span>E-mail: </span> ${cita.email}`;

      const fecha = document.createElement('p');
      fecha.innerHTML = `<span>Fecha: </span> ${cita.fecha}`;

      const sintomas = document.createElement('p');
      sintomas.innerHTML = `<span>Síntomas: </span> ${cita.sintomas}`;

      // Botones de eliminar y editar
      const btnEditar = document.createElement('button');
      btnEditar.classList.add('btn-editar');
      btnEditar.textContent = 'Editar';

      const clone = structuredClone(cita);
      btnEditar.onclick = () => cargarEdicion(clone);

      const btnEliminar = document.createElement('button');
      btnEliminar.classList.add('btn-eliminar');
      btnEliminar.textContent = 'Eliminar';
      btnEliminar.onclick = () => {
        const confirmacion = confirm('¿Deseas eliminar esta cita?');
        if (confirmacion) {
          this.eliminar(cita.id);
        }
      };

      const contenedorBotones = document.createElement('div');
      contenedorBotones.classList.add('contenedorBotones');
      contenedorBotones.appendChild(btnEditar);
      contenedorBotones.appendChild(btnEliminar);

      // Agregar al HTML
      divCita.appendChild(paciente);
      divCita.appendChild(propietario);
      divCita.appendChild(email);
      divCita.appendChild(fecha);
      divCita.appendChild(sintomas);
      divCita.appendChild(contenedorBotones);
      contenedorCitas.appendChild(divCita);
    });
  }
}
