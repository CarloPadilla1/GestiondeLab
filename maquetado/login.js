// Obtener el formulario y sus elementos
const loginForm = document.getElementById('loginForm');
const nombreInput = document.getElementById('nombre');
const contrasenaInput = document.getElementById('contrasena');

// Agregar un evento de "submit" al formulario
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    // Obtener el valor de nombre y contraseña ingresados
    const nombreIngresado = nombreInput.value;
    const contrasenaIngresada = contrasenaInput.value;

    // Obtener los datos de registro almacenados en localStorage
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

    // Verificar si el usuario existe en la lista de usuarios registrados
    const usuarioEncontrado = usuariosRegistrados.find(usuario => usuario.nombre === nombreIngresado);

    if (!usuarioEncontrado) {
        alert('No tenemos una sesión con estas credenciales.');
    } else if (usuarioEncontrado.contrasena === contrasenaIngresada) {
        alert('Inició sesión de forma exitosa.');
         window.location.href = 'index  .html';
        // Aquí podrías redirigir al usuario a otra página o realizar otras acciones
    } else {
        alert('Contraseña incorrecta.');
    }

    // Limpiar los campos del formulario después del intento de inicio de sesión
    nombreInput.value = '';
    contrasenaInput.value = '';
});

// Para agregar un nuevo usuario (registro)
function registrarUsuario(nombre, contrasena) {
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
    const nuevoUsuario = { nombre, contrasena };
    usuariosRegistrados.push(nuevoUsuario);
    localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));
}

// Ejemplo de cómo registrar un usuario (esto debe hacerse en otra parte de tu código)
// registrarUsuario('nombreDeUsuario', 'contrasenaSegura');
if (usuarioEncontrado && usuarioEncontrado.contrasena === contrasenaIngresada) {
    alert('Inició sesión de forma exitosa.');
    // Redirigir al usuario a la página index.html
    window.location.href = 'index.html';
} else {
    alert('Contraseña incorrecta o usuario no encontrado.');
}