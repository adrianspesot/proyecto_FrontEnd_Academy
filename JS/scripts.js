
//Configuración para que se despliegue el menú cuando la pantalla es mas chica
document.getElementById('menu').addEventListener('click', function(){
    let menu = document.getElementById("format-ul")
    if (menu.className === "show"){
        menu.className = menu.className.replace("show","")
    }else{
        menu.className = "show"
    }
    
})



// Enviar mensaje de contacto usando una libreria llamada emailjs
const btn = document.getElementById('btnEnviar');

document.getElementById('form').addEventListener('submit', function(event) {
   
    event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_nz8fgyc';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Mensaje Enviado correctamente!');
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});



// Accedemos al boton cerrar de la ventana emergente que aparece al incio, es decir el popup
const btnCerrarPopup = document.getElementById("btn-cerrar-popup");
const overlay = document.getElementById("overlay");
const parrafo = document.getElementById("parrafo");

parrafo.classList.add('animar') //agrega una clase que hace que aparezca un saludo en la pagina de perfil

btnCerrarPopup.addEventListener('click', function(){
  overlay.classList.remove('animar');
  overlay.classList.add('desactivar')
})

