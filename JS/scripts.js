//Configuración para que se despliegue el menú cuando la pantalla es mas chica

document.getElementById('menu').addEventListener('click', function(){
    let menu = document.getElementById("format-ul")
    if (menu.className === "show"){
        menu.className = menu.className.replace("show","")
    }else{
        menu.className = "show"
    }
    
})


// Enviar mensaje de contacto


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