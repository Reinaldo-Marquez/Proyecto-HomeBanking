//Declaración de variables
var nombreUsuario = "Reinaldo Marquez";

var saldoCuenta = 5000; 

var limiteExtraccion = 500;

var agua = 350;

var luz = 210;

var telefono = 425;

var internet = 570;

var cuentaAmiga1 = 1234567;

var cuentaAmiga2 = 7654321;

var clave = 1234;

// Funciones adicionales

function sumarDinero(monto){
    saldoCuenta += monto;
}

function restarDinero(monto){
    saldoCuenta -= monto;
}

function pagar(servicio) {
    if (saldoCuenta >= servicio) {
        var montoAnterior = saldoCuenta;
        restarDinero(servicio);
        if(servicio == agua){alert( "Has pagado el servicio: Agua" + "\n" + "Dinero descontado: " + servicio + "\n" + "Saldo anterior: " + montoAnterior + "\n" + "Saldo actual: " + saldoCuenta);
    }
         else if( servicio == luz){alert( "Has pagado el servicio: Luz " + "\n" + "Dinero descontado: " + servicio + "\n" + "Saldo anterior: " + montoAnterior + "\n" + "Saldo actual: " + saldoCuenta);
    }
         else if( servicio == telefono){alert( "Has pagado el servicio: Telefono " + "\n" + "Dinero descontado: " + servicio + "\n" + "Saldo anterior: " + montoAnterior + "\n" + "Saldo actual: " + saldoCuenta);
    }    
         else if( servicio == internet){alert( "Has pagado el servicio: Internet " + "\n" + "Dinero descontado: " + servicio + "\n" + "Saldo anterior: " + montoAnterior + "\n" + "Saldo actual: " + saldoCuenta);
    }
} 
        else{ alert("No hay suficiente saldo en tu cuenta para pagar este servicio.")}
        actualizarSaldoEnPantalla();
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar
function iniciarSesion() {
    var claveDeAcceso = prompt("Ingrese su clave para iniciar sesion.");

    if(claveDeAcceso == clave){
        alert("Bienvenido " + nombreUsuario + " ya puedes comenzar a realizar operaciones.")
        }
        else if(claveDeAcceso == null){
        }
        else{ alert("Codigo incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.")
        saldoCuenta = 0;
        }
        actualizarLimiteEnPantalla();
        actualizarSaldoEnPantalla();
        cargarNombreEnPantalla();
}   

function cambiarLimiteDeExtraccion() {
    var limiteEnNumero = parseInt(prompt ("Ingrese nuevo limite"));
    limiteExtraccion = limiteEnNumero;
        if(limiteEnNumero){
            alert("Nuevo limite de extraccion: " + limiteExtraccion);
    actualizarLimiteEnPantalla();
        }
}

function extraerDinero() {
    var montoAnterior = saldoCuenta;
    var montoAExtraer = prompt("Ingrese monto");
    var deposito = parseInt(montoAExtraer);

    if (saldoCuenta >= montoAExtraer && montoAExtraer <= limiteExtraccion &&  montoAExtraer >= 100 && montoAExtraer%100==0){
        restarDinero(deposito);
        alert( "Has retirado: " + montoAExtraer + "\n" + "Saldo anterior: " + montoAnterior + "\n" + "Saldo actual: " + saldoCuenta);
    }   
        else if (montoAExtraer > limiteExtraccion) { 
            alert("Monto excede el limite permitido") 
        }
        else if(montoAExtraer == null || montoAExtraer == 0){

        }
        else if(montoAExtraer%100 != 0) {
            alert("Solo puedes extraer billetes de 100.")
        }
        else { 
            alert("No tienes saldo suficiente en la cuenta.") 
        } 
    actualizarSaldoEnPantalla(); 
}

function depositarDinero() {
  var montoAnterior = saldoCuenta;
  var montoADepositar = prompt("Ingrese monto");
  var deposito = parseInt(montoADepositar);

  if(deposito){
    sumarDinero(deposito);
    alert( "Has depositado: " + montoADepositar + "\n" + "Saldo anterior: " + montoAnterior + "\n" + "Saldo actual: " + saldoCuenta);}
    actualizarSaldoEnPantalla();
}


function pagarServicio() {
    var montoAPagar = prompt("Ingrese el numero que corresponda con el servicio que quieres pagar:\n1 - Agua\n2 - Luz\n3 - Internet\n4 - Telefono");
   
    switch (montoAPagar){
        case "1": pagar(agua)();
        break;
        case "2": pagar(luz)();
        break; 
        case "3": pagar(internet)();
        break;
        case "4": pagar(telefono)();
        break;
        case null:;
        break;
        default: alert("No existe el servicio que se ha seleccionado.");
    }
}

function transferirDinero() {
    var transferencia = parseInt(prompt("Ingrese el monto que desea transferir."));

    if(transferencia <= saldoCuenta){

        var cuentaATransferir = prompt("Ingrese el numero de cuenta al cual desea transferir.");

    if(cuentaATransferir == cuentaAmiga1){
        restarDinero(transferencia);
        alert("Se han transferido: " + transferencia + "\n" + "Cuenta destino: " + cuentaAmiga1);
    } else if(cuentaATransferir == cuentaAmiga2){ 
        restarDinero(transferencia);
        alert("Se han transferido: " + transferencia + "\n" + "Cuenta destino: " + cuentaAmiga2);
    }
        else if(cuentaATransferir == null){

    }

        else{alert("Solo puede transferirse dinero a una cuenta amiga.")
}        
    actualizarSaldoEnPantalla();
} 

        else if(transferencia >= saldoCuenta){alert("No hay saldo suficiente para transferir.")
    }
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