document.addEventListener('DOMContentLoaded', function() {
    const serviceMapping = {
        'cajaBanrural': 'Caja Banrural',
        'areaTecnica': 'Área Técnica',
        'porProducto': 'Por Producto',
        'servicio': 'Servicio'
    };
  
    // Obtener el servicio seleccionado desde el almacenamiento local
    const selectedService = localStorage.getItem('selectedService');
    const serviceTitle = document.getElementById('serviceTitle');
    const queueCount = document.getElementById('queueCount');

    // Configurar el título y la cola inicial basados en el servicio seleccionado
    serviceTitle.textContent = serviceMapping[selectedService] || 'Servicio';
    queueCount.textContent = localStorage.getItem(`${selectedService}Count`) || 0;

    window.increaseCount = function() {
        let count = parseInt(queueCount.textContent, 10);
        count++;
        localStorage.setItem(`${selectedService}Count`, count);
        queueCount.textContent = count;
    };

    window.decreaseCount = function() {
        let count = parseInt(queueCount.textContent, 10);
        if (count > 0) {
            count--;
            localStorage.setItem(`${selectedService}Count`, count);
            queueCount.textContent = count;
        }
    };
});
