
            // Obtener el elemento donde se mostrará la fecha
            var fechaActualElement = document.getElementById("fecha-actual");

            // Obtener la fecha actual
            var fechaActual = new Date();

            // Configurar el formato de la fecha
            var opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

            // Mostrar la fecha en el elemento
            fechaActualElement.textContent = "Fecha: " + fechaActual.toLocaleDateString('es-ES', opcionesFecha);