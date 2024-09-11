let menuVisible = false;

// Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById('nav').classList ="";
        menuVisible = false;
    }else{
        document.getElementById('nav').classList ="responsive";
        menuVisible = true;
    }
}

// Funcion oculta el menu una vez que selecciono una opcion
function seleccionar() {
    document.getElementById('nav').classList ="";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las skills
function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");         //Tener en cuenta el nombre que se coloco en el skill en el html
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("bootstrap");
        habilidades[3].classList.add("php");
        habilidades[4].classList.add("gitgithub");
        habilidades[5].classList.add("laravel");
        habilidades[6].classList.add("react");
        habilidades[7].classList.add("mysql");
        habilidades[8].classList.add("seo");
        habilidades[9].classList.add("comunicacion");
        habilidades[10].classList.add("trabajoenequipo");
        habilidades[11].classList.add("creatividad");
        habilidades[12].classList.add("dedicacion");
        habilidades[13].classList.add("empatia");
        habilidades[14].classList.add("liderazgo");
        habilidades[15].classList.add("capacidad");
        habilidades[16].classList.add("pensamiento");
        habilidades[17].classList.add("actitud");
        habilidades[18].classList.add("gestion");
        habilidades[19].classList.add("adaptabilidad");
    }
}

//Detecto el scrolling para aplicar la animacion de la barra de skills
window.onscroll = function() {
    efectoHabilidades();
}

// Variable para rastrear si la pestaña está abierta
 let fichaTecnicaAbierta = false;
 let fichaTecnicaVentana;
 
 document.getElementById('abrir-pdf').addEventListener('click', function() {
     if (!fichaTecnicaAbierta) {
         // Si la pestaña no está abierta, abre el archivo PDF en una nueva pestaña
         fichaTecnicaVentana = window.open('CV Paterno Maximiliano Fernando Oscar.pdf', '_blank');
         fichaTecnicaAbierta = true;
     } else {
         // Si la pestaña ya está abierta, enfoca la pestaña existente
         fichaTecnicaVentana.focus();
     }
 });

// Funcion para abrir la ventana emergente del certificado e inactivar pantalla de atras
 function abrir(id) {
    document.getElementById(id).style.display = 'block';
    document.getElementById('overlayCertificado').style.display = 'block';
}

// Funcion para cerrar la ventana emergente del certificado y activar pantalla de atras
function cerrar(id) {
    document.getElementById(id).style.display = 'none';
    document.getElementById('overlayCertificado').style.display = 'none';
}