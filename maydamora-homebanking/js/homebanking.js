//Declaración de variables
var nombreUsuario = "Mayda Mora";
var saldoCuenta = 10000;
var limiteExtraccion = 8000;
function sumar(numero) {
    console.log(saldoCuenta + numero);
}
function restar(numero) {
    console.log(saldoCuenta - numero);
}
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

var codigoSeguridad = 1765;

var usuarioBloqueado = false;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    if (usuarioBloqueado) return;
    var stringIngresado = prompt("Ingrese nuevo limite de extracción:")
    if (stringIngresado == null) return;
    var nuevoLimite = parseInt(stringIngresado);
    if (isNaN(nuevoLimite)) {
        alert("Por favor ingrese un número")
        return;
    }
    limiteExtraccion = stringIngresado
    actualizarLimiteEnPantalla() 
    alert("El nuevo límite de extraccion es: " + stringIngresado)
}

function extraerDinero() { 
    if (usuarioBloqueado) return;

    // Pregunta
    var stringIngresado = prompt("Ingrese el monto a extraer:");

    //Si el usuario no escribe nada
    if (stringIngresado == null) return;

    // Cambiar valor de string a numero
    var extraccion = parseInt(stringIngresado);

    //Validar que el valor ingresado sea un numero 
    if (isNaN(extraccion)) {
        alert("Por favor ingrese un número")
        return;
    }

    // Solo se extraen billetes de 100
    var saldoAnterior = saldoCuenta; 
    if (extraccion % 100 != 0) {
       alert("Solo puedes extraer billetes de 100")
       } else {
    if (extraccion > saldoCuenta) {
        alert("No hay saldo disponible en su cuenta para extraer esa cantidad de dinero")
    } else if(extraccion > limiteExtraccion) {
        alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extracción.")
    } else { 
    saldoCuenta = saldoCuenta - extraccion ;
    console.log(saldoCuenta)
    actualizarSaldoEnPantalla();

    // Mensaje de alerta
    alert("Has extraido: " + extraccion + "\nSaldo anterior: " + saldoAnterior + "\nSaldo Actual: " + saldoCuenta)
       }    
} 
}


function depositarDinero() {
    if (usuarioBloqueado) return;

    // Pregunta
    var stringIngresado = prompt("Ingrese el monto a depositar:");

    // Si no escribe nada se cancela
    if (stringIngresado == null) return;

    //Si no se escribe un numero se cancela
    if (isNaN(stringIngresado)) {
        alert("Por favor ingrese un numero")
        return;
    } 
    var saldoAnterior = saldoCuenta;

    // Paso de string a numero
    var deposito = parseInt(stringIngresado);

    // Si no es un billete de 100
    if (deposito % 100 != 0) {
        alert("Solo puedes extraer billetes de 100")
        } else {
    saldoCuenta = saldoCuenta + deposito ;
    console.log(saldoCuenta)
    actualizarSaldoEnPantalla();
    alert("Has depositado: " + deposito + "\nSaldo anterior: " +saldoAnterior + "\nSaldo Actual: " + saldoCuenta)
}
}

function pagarServicio() {
    if (usuarioBloqueado) return;

     //Pregunta
    var pagarServicio = prompt("Ingrese el numero que corresponda con el servicio que quieres pagar: \n1- Agua \n2- Luz \n3-Internet \n4-Teléfono")
    var saldoAnterior = saldoCuenta;

    //Si no ingresa nada
    if (pagarServicio == null) return;

    //Si no se escribe un numero se cancela
    if (isNaN(pagarServicio)) {
        alert("Por favor ingrese un numero")
        return;
    } 

    // Identificar el servicio y el costo
    switch (pagarServicio) {
        case "1": 
            if (agua > saldoCuenta) {
                alert("No hay saldo disponible en su cuenta para pagar este servicio")
            } else {
            saldoCuenta = saldoCuenta - agua;
            alert("Pagaste el servicio: 'Agua'\nValor del servicio: 350\nSaldo anterior: "+ saldoAnterior+ "\nSaldo Actual: " + saldoCuenta )}
        break;
        case "2":
            if (telefono > saldoCuenta) {
                alert("No hay saldo disponible en su cuenta para pagar este servicio")
            } else {
            saldoCuenta = saldoCuenta - telefono;
                alert("Pagaste el servicio: 'Teléfono'\nValor del servicio: 425\nSaldo anterior: "+ saldoAnterior+ "\nSaldo Actual: " + saldoCuenta )}
        break;
        case "3":
            if (luz > saldoCuenta) {
                alert("No hay saldo disponible en su cuenta para pagar este servicio")
            } else {
            saldoCuenta = saldoCuenta - luz;
                alert("Pagaste el servicio: 'Luz'\nValor del servicio: 210\nSaldo anterior: "+ saldoAnterior+ "\nSaldo Actual: " + saldoCuenta )}
        break;
        case "4":
            if (internet > saldoCuenta) {
                alert("No hay saldo disponible en su cuenta para pagar este servicio")
            } else {
            saldoCuenta = saldoCuenta - internet;
                alert("Pagaste el servicio: 'Internet'\nValor del servicio: 570\nSaldo anterior: "+ saldoAnterior+ "\nSaldo Actual: " + saldoCuenta )}
        break;
        default:
                alert("No existe el servicio seleccionado")
        break; 
        }
    actualizarSaldoEnPantalla()
    } 


function transferirDinero() {
    if (usuarioBloqueado) return;
    
    // Guardamos el dato que ingresa el usuario
    var stringIngresado = prompt("Ingrese el monto que desea transferir:");
    console.log(stringIngresado)
    
    // Si presiona cancelar detenemos la funcion
    if (stringIngresado == null || stringIngresado == "") return;

    // Pasar string a numero 
    var transferencia = parseInt(stringIngresado);
    console.log(transferencia)

    //Validar que el valor ingresado sea un numero 
    if (isNaN(transferencia)) {
        alert("Por favor ingrese un numero")
        return;
    }
    var saldoAnterior = saldoCuenta;
    if (transferencia > saldoCuenta) {
        alert("No hay saldo disponible en su cuenta para transferir esa cantidad de dinero")
    } else { 
        var numeroCuenta = prompt("Ingrese el número de cuenta al que desea transferir el dinero")
    switch (numeroCuenta) {
        case "1234567":
            saldoCuenta = saldoCuenta - transferencia;
            alert("Se han trasnferido:" +transferencia+ "\nCuenta destino: " + numeroCuenta)
        break;
        case "7654321":
            saldoCuenta = saldoCuenta - transferencia;
            alert("Se han trasnferido:" +transferencia+ "\nCuenta destino: " + numeroCuenta)
        break;
        default:
            alert("Solo se puede transferir dinero a cuentas amigas")
        break;
    }
    actualizarSaldoEnPantalla()
    }
}

function iniciarSesion() {
    var codigoCuenta = prompt("Ingrese el código de su cuenta:")
    if (codigoCuenta == null) return;
    if (codigoCuenta != codigoSeguridad) {
        alert("Codigo Incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.")
        saldoCuenta= saldoCuenta - saldoCuenta;  
        usuarioBloqueado = true;
    } else { (codigoCuenta == codigoSeguridad)
        alert("Bienvenida/o "+ nombreUsuario + ". Ya puedes comenzar a realizar operaciones.")
    }
    actualizarSaldoEnPantalla()
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}