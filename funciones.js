/**
 *esta funcion debe captar los datos de la fecha ingresada, de no reconocer valores, muestra un alert para que el usuario
  ingrese los datos correctamente.
 * @method calcularFecha()
 */

function calcularFecha(){
    const day = Number(document.getElementById("dia")[0].value);
    const month = Number(document.getElementById("mes").value);
    const year = Number(document.getElementById("anio")[0].value);


    if (dia === '' || mes === '' || anio === '') { //alert para que el usuario ingrese correctamente los datos
        alert('Por favor, complete todos los campos.');
        return false;
    }

}

/*
function calculaNumero() {
    const dia = document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const anio = document.getElementById('anio').value;

    if (dia === '' || mes === '' || anio === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const fecha = dia + mes + anio;
    let suma = sumarDigitos(fecha);

    while (suma > 23) {
        suma = sumarDigitos(suma.toString());
    }

    document.getElementById('resultado').innerText = `El resultado es: ${suma}`;
}

function sumarDigitos(numero) {
    return numero.split('').reduce((acc, curr) => acc + parseInt(curr), 0);
}

function dibujarCarta(numero) {
    const canvas = document.getElementById('tarotCanvas');
    const ctx = canvas.getContext('2d');
    const image = new Image();

    image.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el lienzo
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height); // Dibujar la imagen
    };

    image.src = `imagenes/arcano${numero}.jpg`; // Asignar la fuente de la imagen según el número
}
 */