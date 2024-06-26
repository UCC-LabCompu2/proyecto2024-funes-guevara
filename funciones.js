/**
 * funcion principal, controla la carga de datos y hace llamada a las otras funciones
 * @method calcularFecha
 * no recibe parametros
 */
const calcularFecha = () => {
    // toma los valores obtenidos por el usuario y los convierte en un entero para trabajar con el
    const dia = document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const anio = document.getElementById('anio').value;

    // controla que los valores sean válidos
    if (dia === '' || mes === '' || anio === '') {
        alert('Por favor, complete todos los campos correctamente.');
        blanquearCampos();
        return;
    }
    if (dia > 31) {
        alert('Complete los campos correctamente');
        blanquearCampos();
        return;
    }

    if (mes === 2) { //febrero bisiesto o no
        if (dia > 29) {
            alert('Complete los campos correctamente');
            blanquearCampos();
            return;
        }
        if (dia > 28 && anio % 4 !== 0) {
            alert('Complete los campos correctamente');
            blanquearCampos();
            return;
        }
    }

    if (mes === 4 && dia > 30 || mes === 6 && dia > 30 || mes === 9 && dia > 30 || mes === 11 && dia > 30) {
        alert('Complete los campos correctamente');
        blanquearCampos();
        return;
    }

    // verificamos si el año está dentro del rango permitido
    if (anio < 1950 || anio > 2024) {
        alert('Por favor, ingrese un año válido entre 1950 y 2024.');
        blanquearCampos();
        return;
    }


    const fecha = dia + mes + anio; //como no quiero sumar los valores sino ordenarlos uno atras de otro esta bien asi
    let sumaDigitos = sumarDigitos(fecha); //envio fecha para que se realice el calculo en otra funcion
    dibujarCanvas(sumaDigitos); //llama al dibujo de canva
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
 * realiza la suma de la fecha ingresada
 * @method sumarDigitos
 * @param fecha
 * @return suma
 */
const sumarDigitos = (fecha) => {
    let suma = fecha.split('').reduce((acc, curr) => acc + parseInt(curr), 0); //split divide los elementos del array
    //reduce es un metodo para los arrays en java para crear un acumulador (valores acumulados hasta ese punto)
    //curr es el valor actual que toma el array, le aplico parseInt para que sea un entero, y se sume a acc y se acumule
    //0, es el valor inicial que tomo en la posicion del array para calcular

    while (suma >= 23) {
        suma = suma.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    }

    return suma;
}

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
    const descripcionCarta = document.getElementById('descripcionCarta');
    const imagenes = [ //arreglo de imagenes, para que esten todas en el mismo lugar
        'imagenes/arcano1.jpg', 'imagenes/arcano2.jpg', 'imagenes/arcano3.jpg',
        'imagenes/arcano4.jpg', 'imagenes/arcano5.jpg', 'imagenes/arcano6.jpg',
        'imagenes/arcano7.jpg', 'imagenes/arcano8.jpg', 'imagenes/arcano9.jpg',
        'imagenes/arcano10.jpg', 'imagenes/arcano11.jpg', 'imagenes/arcano12.jpg',
        'imagenes/arcano13.jpg', 'imagenes/arcano14.jpg', 'imagenes/arcano15.jpg',
        'imagenes/arcano16.jpg', 'imagenes/arcano17.jpg', 'imagenes/arcano18.jpg',
        'imagenes/arcano19.jpg', 'imagenes/arcano20.jpg', 'imagenes/arcano21.jpg',
        'imagenes/arcano22.jpg'
    ]
    const descripciones = [ //arreglo para las descripciones, igual que las imagenes
        "El Mago", "La Sacerdotisa", "La Emperatriz",
        "El Emperador", "El Sumo Sacerdote", "Los Enamorados",
        "El Carro", "La Fuerza", "El Ermitaño",
        "La Rueda de la Fortuna", "La Justicia", "El Colgado",
        "La Muerte", "La Templanza", "El Diablo",
        "La Torre", "La Estrella", "La Luna",
        "El Sol", "El Juicio", "El Mundo",
        "El Loco"
    ]
    const textos = [ //array para las descripciones extendidas,igual que img y desc quiero que esten todos en el mismo lugar
        "Representa el poder de la voluntad y la manifestación. Es el iniciador de acciones creativas y posee habilidades para canalizar energías y convertir ideas en realidad.",
        "Simboliza la intuición profunda, el conocimiento interior y la conexión con lo divino femenino. Es la guardiana de los secretos y la sabiduría oculta.",
        "Representa la feminidad, la fertilidad y la creatividad. Es símbolo de abundancia, belleza y poder creativo en todas sus formas.",
        "Simboliza la autoridad, la estabilidad y el poder estructurado. Representa el control consciente y la capacidad de liderazgo.",
        "Representa la enseñanza, la tradición y la búsqueda de conocimiento espiritual. Es el puente entre lo divino y lo humano, y representa la sabiduría recibida a través de la educación formal.",
        "Simboliza la unión, el amor y las decisiones importantes. Representa la armonía y las relaciones equilibradas.",
        "Simboliza la victoria, el control y la autoconfianza. Representa el éxito a través de la determinación y el esfuerzo.",
        "Representa la justicia, la verdad y la equidad. Simboliza el equilibrio y la imparcialidad.",
        "Simboliza la introspección, la búsqueda de la verdad y la guía espiritual. Representa la sabiduría adquirida a través de la soledad y la reflexión.",
        "Representa el cambio, la fortuna y los ciclos de la vida. Simboliza la inevitabilidad del destino y la rueda del tiempo.",
        "Simboliza la fuerza interior, el coraje y la compasión. Representa el dominio sobre uno mismo y la superación de obstáculos.",
        "Simboliza la pausa, el sacrificio y la necesidad de ver las cosas desde una perspectiva diferente. Representa la renuncia temporal para obtener una comprensión más profunda.",
        "Simboliza la transformación, el cambio y el renacimiento. Representa el final de un ciclo y el comienzo de otro.",
        "Simboliza el equilibrio, la moderación y la armonía. Representa la paciencia y la capacidad de encontrar el punto medio.",
        "Simboliza la tentación, el materialismo y los desafíos internos. Representa la lucha contra las adicciones y los comportamientos autodestructivos.",
        "Simboliza la destrucción, el cambio abrupto y la revelación. Representa la necesidad de deshacerse de lo viejo para dar paso a lo nuevo.",
        "Simboliza la esperanza, la inspiración y la guía divina. Representa la conexión con el universo y la búsqueda de la verdad.",
        "Simboliza la intuición, los sueños y el misterio. Representa el subconsciente y la necesidad de explorar lo desconocido.",
        "Simboliza la felicidad, la alegría y la realización. Representa el éxito y la prosperidad en todas las áreas de la vida.",
        "Simboliza el juicio, la reflexión y la renovación. Representa la evaluación de nuestras acciones y la búsqueda de redención.",
        "Simboliza la culminación, el logro y la integración. Representa la realización de nuestros objetivos y la armonía completa.",
        "Simboliza el comienzo, la aventura y la libertad. Representa la espontaneidad y el viaje hacia lo desconocido."
    ]
    const img = new Image(); //creo un objeto
    img.src = imagenes[numero - 1]; //-1 para que tenga bien la direccion de memoria segun la imagen
    img.onload = () => { //crea una funcion tipo flecha para dibujar tanto la imagen como los textos
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.font = "20px Serif";
        ctx.fillStyle = "black";
        ctx.fillText(descripciones[numero - 1], 10, canvas.height - 10);
        descripcionCarta.innerHTML = `<p>${textos[numero - 1]}</p>`; //genere un arreglo para que me muestre los textos,como si fueran un parrafo, en el div :)
    };
}