document.addEventListener("DOMContentLoaded", () => {
    verificarSesion(); // Verifica si el usuario sigue autenticado al cargar la página
});

// Función para mostrar el formulario de registro
function mostrarRegistro() {
    //document.getElementById("login").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("registro").style.display = "block";
}

// Función para mostrar el formulario de inicio de sesión
function mostrarLogin() {
    //document.getElementById("registro").style.display = "none";
    document.getElementById("registro").style.display = "block";
    document.getElementById("login").style.display = "block";
}

// Función para verificar si el usuario sigue autenticado
function verificarSesion() {
    fetch("/verificar-sesion")
        .then(response => response.json())
        .then(data => {
            if (data.autenticado) {
                mostrarContenido();
            }
        })
        .catch(error => console.error("Error al verificar sesión:", error));
}

// Función para iniciar sesión
function verificarCodigo() {
    const usuario = document.getElementById("usuarioLogin").value;
    const codigo = document.getElementById("codigoLogin").value;

    fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, codigo })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            mostrarContenido();
        } else {
            document.getElementById("mensajeLogin").innerText = data.message;
        }
    })
    .catch(error => console.error("Error al iniciar sesión:", error));
}

// Función para registrar un nuevo usuario
function registrarUsuario() {
    const usuario = document.getElementById("usuarioRegistro").value;
    const codigo = document.getElementById("codigoRegistro").value;

    fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, codigo })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("mensajeRegistro").innerText = data.message;
        if (data.success) {
            mostrarLogin();
        }
    })
    .catch(error => console.error("Error al registrar usuario:", error));
}

// Función para mostrar el menú de juegos después del inicio de sesión
function mostrarContenido() {
    document.getElementById("login").style.display = "none";
    document.getElementById("registro").style.display = "none";
    document.getElementById("contenido").style.display = "block";
}

// Función para cargar los juegos dentro del iframe
function cargarJuego(juego) {
    console.log("Cargando juego:", juego); // Para ver si la función se ejecuta
    document.getElementById("juegoFrame").src = "/" + juego;
}

// Función para cerrar sesión
function cerrarSesion() {
    fetch("/logout", { method: "POST" })
        .then(() => location.reload())
        .catch(error => console.error("Error al cerrar sesión:", error));
}
