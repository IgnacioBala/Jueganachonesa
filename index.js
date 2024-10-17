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
// Función que verifica las respuestas
function finalizado() {
    clearTimeout(tiempoTerminado);
    clearInterval(intervaloDeTiempo);

    // Respuestas correctas
    const respuestasCorrectas = {
        respuesta1: "negro", // Ejemplo: tu color favorito
        respuesta2: "19",   // Ejemplo: tu edad
        respuesta3: "fanta", // Ejemplo: tu bebida favorita
        respuesta4: "flor, vane, rebe" // Ejemplo: nombres de tus hermanas (asegúrate de que coincida con lo que ingresas)
    };

    // Captura las respuestas del usuario y asegúrate de que están en minúsculas
    let respuesta1 = document.getElementById("respuesta1").value.toLowerCase();
    let respuesta2 = document.getElementById("respuesta2").value;
    let respuesta3 = document.getElementById("respuesta3").value.toLowerCase();
    let respuesta4 = document.getElementById("respuesta4").value.toLowerCase();

    // Mensajes de resultado
    let resultado = "";

    // Verificar respuestas y mostrar si son correctas o incorrectas
    if (respuesta1 === respuestasCorrectas.respuesta1) {
        resultado += "1. ¡Correcto! Mi color favorito es 'Negro'.\n";
    } else {
        resultado += `1. Incorrecto, tú dijiste '${respuesta1}' pero la respuesta correcta es 'Negro'.\n`;
    }

    if (respuesta2 === respuestasCorrectas.respuesta2) {
        resultado += "2. ¡Correcto! Tengo 19 años.\n";
    } else {
        resultado += `2. Incorrecto, tú dijiste '${respuesta2}' pero la respuesta correcta es '19'.\n`;
    }

    if (respuesta3 === respuestasCorrectas.respuesta3) {
        resultado += "3. ¡Correcto! Mi bebida favorita es 'Fanta'.\n";
    } else {
        resultado += `3. Incorrecto, tú dijiste '${respuesta3}' pero la respuesta correcta es 'Fanta'.\n`;
    }

    if (respuesta4 === respuestasCorrectas.respuesta4) {
        resultado += "4. ¡Correcto! Mis hermanas son 'Flor, Vane, Rebe'.\n";
    } else {
        resultado += `4. Incorrecto, tú dijiste '${respuesta4}' pero la respuesta correcta es 'Flor, Vane, Rebe'.\n`;
    }

    // Mostrar el resultado final
    alert(resultado);
}

// Función para reiniciar el juego
function volverAIntentar() {
    location.reload();
}
