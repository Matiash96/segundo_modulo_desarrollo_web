// Creamos las variables para almacenar una referencia a un elemento HTML
const listaMarca = document.getElementById("marca");
const listaModelo = document.getElementById("modelo");
const listaVersiones = document.getElementById("version");
const listaAnio = document.getElementById("anio");
const listaColor = document.getElementById("color");
const gncSi = document.getElementById("inlineRadio1");
const gncNo = document.getElementById("inlineRadio2");
const resultadosDiv = document.getElementById("resultados");
const marcaSeleccionada = document.getElementById("marcaSeleccionada");
const modeloSeleccionado = document.getElementById("modeloSeleccionado");
const versionSeleccionada = document.getElementById("versionSeleccionada");
const anioSeleccionado = document.getElementById("anioSeleccionado");
const colorSeleccionado = document.getElementById("colorSeleccionado");
const gncSeleccionado = document.getElementById("gncSeleccionado");
const precioCompra = document.getElementById("dolarCompra")
const precioVenta = document.getElementById("dolarVenta")
const fechaActualizacion = document.getElementById("fechaActualizacion")
const precioA = document.getElementById("precioCoberturaA")
const precioB = document.getElementById("precioCoberturaB")
const precioC = document.getElementById("precioCoberturaC")
const precioD = document.getElementById("precioCoberturaD")
const mensajeValidacion = document.getElementById("mensajeValidacion");
const mensajeValidacionCoberturas = document.getElementById("mensajeValidacionCoberturas");
const radioButtonA = document.getElementById("coberturaA")
const radioButtonB = document.getElementById("coberturaB")
const radioButtonC = document.getElementById("coberturaC")
const radioButtonD = document.getElementById("coberturaD")

const precioBaseA = 500
const precioBaseB = 600
const precioBaseC = 700
const precioBaseD = 900

let precioMarcaCoberturaA = 0;
let precioColorCoberturaA = 0;
let precioMarcaCoberturaB = 0;
let precioColorCoberturaB = 0;
let precioMarcaCoberturaC = 0;
let precioColorCoberturaC = 0;
let precioMarcaCoberturaD = 0;
let precioColorCoberturaD = 0;





// Creamos un objeto con los datos de cada marca y sus modelos
const modelosPorMarca = {
    Chevrolet: ["Seleccioná una opción", "Cruze", "Onix", "Joy", "S10 cabina simple", "S10 cabina doble"],
    Ford: ["Seleccioná una opción", "Fiesta", "Ka", "Focus", "EcoSport", "Ranger"],
    Honda: ["Seleccioná una opción", "City", "Civic", "Accord", "HR-V", "CR-V"],
    Toyota: ["Seleccioná una opción", "Etios Aibo", "Corolla Cross", "Etios Sedán", "SW4", "Hilux"],
    Volkswagen: ["Seleccioná una opción", "Taos", "T-Cross", "Polo", "Saveiro", "Amarok"],
};

// Array con las opciones a elegir
const versiones = [
    "Nivel estándar",
    "Edición especial",
    "Sport",
    "Limitado",
    "Extra",
];
const anios = [
    2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
    2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
];
const colores = ["Blanco", "Negro", "Rojo", "Azul", "Gris", "Plata"];

// Definimos la clase Seguro para crear objetos con los datos que se seleccionan
class Seguro {
    constructor(marca, modelo, version, anio, color, gnc) {
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.anio = anio;
        this.color = color;
        this.gnc = gnc;
    }
}

// Listamos todas las marcas
Object.keys(modelosPorMarca).forEach((marca) => {
    const optionMarca = document.createElement("option");
    optionMarca.value = marca
    optionMarca.textContent = marca;
    listaMarca.appendChild(optionMarca);
    
});


// Agregar un evento de cambio a la lista de marcas
listaMarca.addEventListener("change", function () {
    const marcaSeleccionada = listaMarca.value;

    // Obtenemos los modelos correspondiente a la marca seleccionada
    const modelos = modelosPorMarca[marcaSeleccionada];
    
    listaModelo.innerHTML = ''
    // Llenar la lista de modelos
    modelos.forEach((modelo) => {
        const optionModelo = document.createElement("option");
        optionModelo.textContent = modelo;
        listaModelo.appendChild(optionModelo);
    });
});

// Listamos las versiones de los automóviles
versiones.forEach((version) => {
    // Creamos los nuevos elementos HTML option y se almacenan en variables en JavaScript
    const optionVersion = document.createElement("option");
    optionVersion.textContent = version;
    listaVersiones.appendChild(optionVersion);
});

// Listamos los años
anios.forEach((anio) => {
    // Creamos los nuevos elementos HTML option y se almacenan en variables en JavaScript
    const optionAnio = document.createElement("option");
    optionAnio.textContent = anio;
    listaAnio.appendChild(optionAnio);
});

// Listamos los colores de los automóviles
colores.forEach((color) => {
    // Creamos los nuevos elementos HTML option y se almacenan en variables en JavaScript
    const optionColor = document.createElement("option");
    optionColor.textContent = color;
    listaColor.appendChild(optionColor);
});





// Limpiamos el mensaje de validación luego de que se selecciona la opción faltante
listaMarca.addEventListener("change", function () {   
    // Creamos un array con todas las marcas
    const marcas = Object.keys(modelosPorMarca);
    // Buscamos el indice de la marca seleccionada y le sumamos 1 para no multiplicar por 0 el primer valor de la marca
    const indice = marcas.indexOf(listaMarca.value) + 1;
    
    // Tenemos un precio base el cual es el valor de la cobertura y se lo multiplicamos por el indice
    precioMarcaCoberturaA = precioBaseA * indice; 
    precioMarcaCoberturaB = precioBaseB * indice;
    precioMarcaCoberturaC = precioBaseC * indice;
    precioMarcaCoberturaD = precioBaseD * indice;
    mostrarPrecios ();
    console.log(precioMarcaCoberturaA);

    mensajeValidacion.innerHTML = ""; 
});
listaModelo.addEventListener("change", function () {
    mensajeValidacion.innerHTML = "";
});
listaVersiones.addEventListener("change", function () {
    mensajeValidacion.innerHTML = "";
});
listaAnio.addEventListener("change", function () {
    const digitos = listaAnio.value % 100;
    
    console.log(listaAnio.value % 100);
    mensajeValidacion.innerHTML = "";
});
listaColor.addEventListener("change", function () {
    // Tomamos el indice del color elegido y le sumamos 1
    const indice = colores.indexOf(listaColor.value) + 1;
    // Multiplicamos el valor del precio base por el indice
    precioColorCoberturaA = precioBaseA * indice; 
    precioColorCoberturaB = precioBaseB * indice;
    precioColorCoberturaC = precioBaseC * indice;
    precioColorCoberturaD = precioBaseD * indice;
    mostrarPrecios (); 

    mensajeValidacion.innerHTML = "";
});
gncSi.addEventListener("change", function () {
    mensajeValidacion.innerHTML = "";
});
gncNo.addEventListener("change", function () {
    mensajeValidacion.innerHTML = "";
});
radioButtonA.addEventListener("change", function () {
    mensajeValidacionCoberturas.innerHTML = "";
});
radioButtonB.addEventListener("change", function () {
    mensajeValidacionCoberturas.innerHTML = "";
});
radioButtonC.addEventListener("change", function () {
    mensajeValidacionCoberturas.innerHTML = "";
});
radioButtonD.addEventListener("change", function () {
    mensajeValidacionCoberturas.innerHTML = "";
});



// Agregar un evento de clic al botón "cotizar"
document.querySelector("button").addEventListener("click", function (e) {
    // Obtener los valores seleccionados
    const marca = listaMarca.value;
    const modelo = listaModelo.value;
    const version = listaVersiones.value;
    const anio = listaAnio.value;
    const color = listaColor.value;
    const gnc = valorGnc ();

    // Validamos que se seleccionen todas las opciones
    const cond = "Seleccioná una opción";
    
    if ( marca === cond || modelo === cond || version === cond || anio === cond || color === cond || gnc === cond
    ) {
        e.preventDefault(); // Evita el envío si no se ha realizado una selección válida
        mensajeValidacion.textContent = "Por favor, seleccioná todas las opciones.";
    }  
    else{
        if (! cobertura ()) {
            e.preventDefault(); // Evita el envío si no se ha realizado una selección válida
            mensajeValidacionCoberturas.textContent = "Por favor, seleccioná una cobertura.";
        }
        else {
            // Creamos el objeto seguro1
            const seguro1 = new Seguro(marca, modelo, version, anio, color, gnc);

            setTimeout(() => {
                const cotizacionInfo = document.getElementById("cotizacionInfo");
                cotizacionInfo.innerHTML = `<h3>Cotizando...</h3>`;
                showModal();
            }, 500);

            //Simular una espera asincrónica de 2 segundos
            setTimeout(() => {
                const cotizacionInfo = document.getElementById("cotizacionInfo");
                cotizacionInfo.innerHTML = `
                        <p>Marca: ${seguro1.marca}</p>
                        <p>Modelo: ${seguro1.modelo}</p>
                        <p>Versión: ${seguro1.version}</p>
                        <p>Año: ${seguro1.anio}</p>
                        <p>Color: ${seguro1.color}</p>
                        <p>GNC: ${seguro1.gnc}</p>
                `;
                showModal();
            }, 3000);
        }
    }
});

//Mostrar el modal
const showModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";

    //Cerrar el modal cuando hacemos click en la "x" o en cualquier lugar

    const closeBtn = document.querySelector(".close");

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        // Restablecer los valores de las listas desplegables
        listaMarca.selectedIndex = 0;
        listaModelo.selectedIndex = 0;
        listaVersiones.selectedIndex = 0;
        listaAnio.selectedIndex = 0;
        listaColor.selectedIndex = 0;
        gncSi.checked = false; // Deseleccione el botón "SI"
        gncNo.checked = false; // Deseleccione el botón "NO"
        mensajeValidacion.innerHTML = "";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            // Restablecer los valores de las listas desplegables
            listaMarca.selectedIndex = 0;
            listaModelo.selectedIndex = 0;
            listaVersiones.selectedIndex = 0;
            listaAnio.selectedIndex = 0;
            listaColor.selectedIndex = 0;
            gncSi.checked = false; // Deseleccione el botón "SI"
            gncNo.checked = false; // Deseleccione el botón "NO"
            mensajeValidacion.innerHTML = "";
        }
    });
};

// URL de la API del dólar blue
// const apiUrl = "https://dolarapi.com/v1/dolares/blue";

// // Función para obtener la cotización del dólar blue
// const getDolarBlue = () => {
//     // Realizar una solicitud GET a la API
//     fetch(apiUrl)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(
//                     `No se pudo obtener la cotización del dólar blue. Código de estado: ${response.status}`
//                     );
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 precioCompra.textContent = `$${data.compra}`
//                 precioVenta.textContent = `$${data.venta}`
//                 var fecha = new Date(data.fechaActualizacion);
//                 // Obtenemos los componentes de la fecha
//                 const dia = fecha.getDate();
//                 const mes = fecha.getMonth() + 1; // Los meses comienzan desde 0, entonces sumamos 1
//                 const anio = fecha.getFullYear();
//                 const hora = fecha.getHours();
//                 const minutos = fecha.getMinutes();

//                 const fechaFormateada = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')} ${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${anio}`;

//                 console.log(fechaFormateada);
//                 fechaActualizacion.textContent = fechaFormateada
                
//             })
//         .catch((error) => {
//             console.error("Error: " + error);
//         });
//     }
    
// // Llamar a la función para obtener la cotización del dólar blue
// getDolarBlue();


// Función para obtener el valor seleccionado del gnc

const valorGnc = () =>{ return gncSi.checked ? "Si" : gncNo.checked ? "No" : "Seleccioná una opción";}

const cobertura = () =>{
    // Obtén todos los radio buttons con el nombre 'flexRadioDefault'
    const radioButtons = document.querySelectorAll('input[name="flexRadioDefault"]');
    
    let seleccionado = false;
    
    // Verifica si al menos uno está seleccionado y obtenemos el indice de cual se encuentra activo
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            indiceActivo = i;
            seleccionado = true;
            break; 
        }
    }
    return seleccionado;
}

// Mostrar los datos 
const mostrarPrecios = () =>{
    let precioCoberturaA = precioMarcaCoberturaA + precioColorCoberturaA;
    let precioCoberturaB = precioMarcaCoberturaB + precioColorCoberturaB;
    let precioCoberturaC = precioMarcaCoberturaC + precioColorCoberturaC;
    let precioCoberturaD = precioMarcaCoberturaD + precioColorCoberturaD;

    precioA.textContent = `$${precioCoberturaA}`
    precioB.textContent = `$${precioCoberturaB}`
    precioC.textContent = `$${precioCoberturaC}`
    precioD.textContent = `$${precioCoberturaD}`
}