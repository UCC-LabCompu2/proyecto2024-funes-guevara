/**
 * Permite dibujar la carta calculada
 * @param numero recibe el valor de la carta
 * @method dibujarCanvas
 * en esta funcion, genero 2 arreglos de datos, para que dependiendo del calculo de la funcion
 * anterior, salga la carta y descripcion correspondiente (asi llamo a
 * dos variables para mostrar, tmb reduzco tamaño en codigo a comparacion de antes en mi html)
 */
const dibujarCanvas = (numero) => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const imagenes = [ //arreglo de imagenes
        'imagenes/arcano1.jpg', 'imagenes/arcano2.jpg', 'imagenes/arcano3.jpg',
        'imagenes/arcano4.jpg', 'imagenes/arcano5.jpg', 'imagenes/arcano6.jpg',
        'imagenes/arcano7.jpg', 'imagenes/arcano8.jpg', 'imagenes/arcano9.jpg',
        'imagenes/arcano10.jpg', 'imagenes/arcano11.jpg', 'imagenes/arcano12.jpg',
        'imagenes/arcano13.jpg', 'imagenes/arcano14.jpg', 'imagenes/arcano15.jpg',
        'imagenes/arcano16.jpg', 'imagenes/arcano17.jpg', 'imagenes/arcano18.jpg',
        'imagenes/arcano19.jpg', 'imagenes/arcano20.jpg', 'imagenes/arcano21.jpg',
        'imagenes/arcano22.jpg'
    ]

    const descripciones = [ //arreglo para las descripciones
        "El Mago", "La Sacerdotisa", "La Emperatriz",
        "El Emperador", "El Sumo Sacerdote", "Los Enamorados",
        "El Carro", "La Justicia", "El Ermitaño",
        "La Rueda de la Fortuna", "La Fuerza", "El Colgado",
        "La Muerte", "La Templanza", "El Diablo",
        "La Torre", "La Estrella", "La Luna",
        "El Sol", "El Juicio", "El Mundo",
        "El Loco"
    ]
    const img = new Image();
    img.src = imagenes[numero - 1];
    img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.font = "16px Arial";
        ctx.fillText(descripciones[numero - 1], 10, canvas.height - 10);
    };
}

/**
 * blanquea los campos por si el usuario ingresó mal un valor
 * @method blanquearCampos
 * no recibe parametros de  ningun tipo
 */
const blanquearCampos = () => {
    document.getElementById('dia').value = '';
    document.getElementById('mes').value = '01'; //enero
    document.getElementById('anio').value = '';
}

/**
 * funcion principal, controla la carga de datos y hace llamada a las otras funciones
 * @method calcularFecha
 * no recibe parametros
 */
const calcularFecha = () =>{
    //toma los valores obtenidos x el usuario
    const dia = document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const anio = document.getElementById('anio').value;

    //controla que sea válido
    if (dia === '' || mes === '' || anio === '') {//pedir usuario que reingrese
        alert('Por favor, complete todos los campos correctamente.');
        blanquearCampos()
        return;
    }

    const fecha = dia + mes + anio; //como no quiero sumar los valores sino ordenarlos uno atras de otro esta bien asi
    let sumaDigitos = sumarDigitos(fecha); //envio fecha para que se realice el calculo en otra funcion

    dibujarCanvas(sumaDigitos);
    guardarLocalStorage(sumaDigitos);
}

/**
 * realiza la suma de la fecha ingresada
 * @method sumarDigitos
 * @param fecha
 */
const sumarDigitos = (fecha) => {
        let suma = fecha.split('').reduce((acc, curr) => acc + parseInt(curr), 0);

        while (suma >= 23) {
            suma = suma.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
        }

        return suma;
}

const guardarLocalStorage = (sumaDigitos) =>{
    let numero = sumaDigitos;
    localStorage.setItem("numeroLS", numero);
    //???
}

const cargarLocalStorage = () =>{
    let nro;
    nro = localStorage.getItem("numeroLS");

}


