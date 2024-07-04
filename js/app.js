// Selectors
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const form = document.querySelector('#formulario-cita');

// Events
pacienteInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);

form.addEventListener('submit', submitCita);

// Appointment object
const citaObj = {
  paciente: '',
  propietario: '',
  email: '',
  fecha: '',
  sintomas: '',
};

// Classes
class Notificacion {
  constructor({ texto, tipo }) {
    this.texto = texto;
    this.tipo = tipo;

    this.mostrar();
  }

  mostrar() {
    // Crear la notificación
    const alerta = document.createElement('div');
    alerta.classList.add(
      'text-center',
      'w-full',
      'p-3',
      'text-white',
      'my-5',
      'alert',
      'uppercase',
      'font-bold',
      'text-sm'
    );
    // Eliminar alertas duplicadas
    const alertaPrevia = document.querySelector('.alert');
    alertaPrevia?.remove();
    // Si es de tipo error, agrega una clase
    this.tipo === 'error'
      ? alerta.classList.add('bg-red-500')
      : alerta.classList.add('bg-green-500');
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

class AdminCitas {
  constructor() {
    this.citas = [];
  }
  agregar(cita) {
    this.citas = [...this.citas, cita];
  }
  mostrar() {}
}

function datosCita(e) {
  citaObj[e.target.name] = e.target.value;
}

const citas = new AdminCitas();
function submitCita(e) {
  e.preventDefault();

  if (Object.values(citaObj).some((valor) => valor.trim() === '')) {
    new Notificacion({
      texto: 'Todos los campos son obligatorios',
      tipo: 'error',
    });
    return;
  }
  citas.agregar(citaObj);
}
