const toggleBtn = document.getElementById('toggleBtn');
const infoBox = document.getElementById('infoBox');

toggleBtn.addEventListener('click', () => {
    infoBox.classList.toggle('hidden');

    // Cambiar el texto del botón según el estado
    if (infoBox.classList.contains('hidden')) {
        toggleBtn.textContent = 'Mostrar contenido';
    } else {
        toggleBtn.textContent = 'Ocultar contenido';
    }
});