//Configuración para que se despliegue el menú cuando la pantalla es mas chica

document.getElementById('menu').addEventListener('click', function(){
    let menu = document.getElementById("format-ul")
    if (menu.className === "show"){
        menu.className = menu.className.replace("show","")
    }else{
        menu.className = "show"
    }
    
})

