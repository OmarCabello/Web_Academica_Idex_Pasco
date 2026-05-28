function mostrarRegistro(){

    document.getElementById("loginForm")
    .classList.add("oculto");

    document.getElementById("registerForm")
    .classList.remove("oculto");

}

function mostrarLogin(){

    document.getElementById("registerForm")
    .classList.add("oculto");

    document.getElementById("loginForm")
    .classList.remove("oculto");

}

/* REGISTRAR USUARIO */

const formularioRegistro =
document.querySelector("#registerForm form");

formularioRegistro.addEventListener("submit",
function(e){

    e.preventDefault();

    const nombre =
    formularioRegistro.querySelector(
    'input[type="text"]'
    ).value;

    const correo =
    formularioRegistro.querySelector(
    'input[type="email"]'
    ).value;

    const password =
    formularioRegistro.querySelector(
    'input[type="password"]'
    ).value;

    const rol =
    formularioRegistro.querySelector(
    'select'
    ).value;

    if(
        nombre === "" ||
        correo === "" ||
        password === "" ||
        rol === "Seleccionar Rol"
    ){

        alert("Completa todos los campos");

        return;

    }

    /* GUARDAR EN LOCAL STORAGE */

    const usuario = {

        nombre:nombre,
        correo:correo,
        password:password,
        rol:rol

    };

    localStorage.setItem(
        correo,
        JSON.stringify(usuario)
    );

    alert("Cuenta creada correctamente");

    formularioRegistro.reset();

    mostrarLogin();

});
const formularioLogin =
document.querySelector("#loginForm form");

formularioLogin.addEventListener("submit",
function(e){

    e.preventDefault();

    const correo =
    formularioLogin.querySelector(
    'input[type="email"]'
    ).value;

    const password =
    formularioLogin.querySelector(
    'input[type="password"]'
    ).value;

    const usuarioGuardado =
    localStorage.getItem(correo);

    if(usuarioGuardado == null){

        alert("Usuario no encontrado");

        return;

    }

    const usuario =
    JSON.parse(usuarioGuardado);

    if(usuario.password !== password){

        alert("Contraseña incorrecta");

        return;

    }

    alert("Bienvenido " + usuario.nombre);

    /* REDIRECCIONES */

    if(usuario.rol === "Docente"){

        window.location =
        "docente/panel.html";

    }

    if(usuario.rol === "Estudiante"){

        window.location =
        "estudiante/panel.html";

    }
    if(usuario.rol === "Coordinador"){

    window.location =
    "coordinador/panel.html";

}

});