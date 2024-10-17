let tiempoTerminado;
let intervaloDeTiempo;

// Función para mostrar las reglas del juego
function mostrarReglas() {
    document.getElementById("reglas").style.display = "block";
}

// Función para ocultar las reglas del juego
function ocultarReglas() {
    document.getElementById("reglas").style.display = "none";
}



// Función para comenzar la cuenta regresiva
function comenzarCuentaRegresiva() {
    tiempoTerminado = setTimeout(tiempoCumplido, 30000);
    intervaloDeTiempo = setInterval(ticTac, 1000);

    document.getElementById("cuentaRegresiva").textContent = 30;
}

// Función para disminuir el tiempo en el contador
function ticTac() {
    let tiempo = document.getElementById("cuentaRegresiva").textContent;
    document.getElementById("cuentaRegresiva").textContent = tiempo - 1;
}

// Función que se ejecuta cuando se acaba el tiempo
function tiempoCumplido() {
    clearInterval(intervaloDeTiempo);
    document.getElementById("cuentaRegresiva").textContent = 0;
    document.getElementById("audioFinal").play();
    alert("GAME OVER: Se acabó el tiempo. Intenta nuevamente.");
}

// Función que verifica las respuestas
function finalizado() {
    clearTimeout(tiempoTerminado);
    clearInterval(intervaloDeTiempo);

    // Respuestas correctas
    const respuestasCorrectas = {
        respuesta1: "Negro", // Ejemplo: tu color favorito
        respuesta2: "19",   // Ejemplo: tu edad
        respuesta3: "Fanta", // Ejemplo: tu bebida favorita
        respuesta4: "Flor, Vane, Rebe" // Ejemplo: nombres de tus hermanas
    };

    // Captura las respuestas del usuario
    let respuesta1 = document.getElementById("respuesta1").value.toLowerCase();
    let respuesta2 = document.getElementById("respuesta2").value;
    let respuesta3 = document.getElementById("respuesta3").value.toLowerCase();
    let respuesta4 = document.getElementById("respuesta4").value;

    // Mensajes de resultado
    let resultado = "";

    // Verificar respuestas y mostrar si son correctas o incorrectas
    if (respuesta1 === respuestasCorrectas.respuesta1) {
        resultado += "1. ¡Correcto!\n";
    } else {
        resultado += "1. Incorrecto, la respuesta es 'azul'.\n";
    }

    if (respuesta2 === respuestasCorrectas.respuesta2) {
        resultado += "2. ¡Correcto!\n";
    } else {
        resultado += "2. Incorrecto, la respuesta es '25'.\n";
    }

    if (respuesta3 === respuestasCorrectas.respuesta3) {
        resultado += "3. ¡Correcto!\n";
    } else {
        resultado += "3. Incorrecto, la respuesta es 'coca-cola'.\n";
    }

    if (respuesta4 === respuestasCorrectas.respuesta4) {
        resultado += "4. ¡Correcto!\n";
    } else {
        resultado += "4. Incorrecto, la respuesta es 'Marti, Mati, Ana'.\n";
    }

    // Mostrar el resultado final
    alert(resultado);
}

// Función para reiniciar el juego
function volverAIntentar() {
    location.reload();
}
