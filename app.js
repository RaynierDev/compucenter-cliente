
let caja = document.getElementById("selectCaja")
let reparacion = document.getElementById("selectReparacion")
let servicio = document.getElementById("selectServicio")
let producto = document.getElementById("selectProducto")
let copias = document.getElementById("selectCopias")

document.addEventListener

function selectService(service) {
    // Aquí podrías almacenar la selección en el almacenamiento local para usarlo en la otra página
    localStorage.setItem('selectedService', service);
    // Redireccionar a la página de la cola
    window.location.href = 'queue.html';
}
