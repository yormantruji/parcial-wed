document.getElementById("registerBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validación con expresiones regulares
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{6,}$/;

    if (!usernameRegex.test(username)) {
        alert("El usuario solo puede contener letras y números.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    // Mostrar la información ingresada en un mensaje de alerta
    alert(`Usuario: ${username}\nCorreo Electrónico: ${email}\nContraseña: ${password}`);
});

document.getElementById("cancelBtn").addEventListener("click", () => {
    // Redirigir al menú de inicio de sesión
    window.location.href = "index.html";
});
