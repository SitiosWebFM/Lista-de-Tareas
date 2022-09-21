/* Valor de Input */
const valorTarea= document.getElementById("valorTarea");
const btnAgregar = document.getElementById("btnAgregar");



btnAgregar.addEventListener("click",()=>{
    let inputValue = valorTarea.value;
    

    const containerAgregarTarea = document.getElementById("containerTareas");
    
    //Creacion de Elementos
    const containerH2Icon = document.createElement("DIV");
    const textoTarea = document.createElement("H2");
    const eliminarTarea = document.createElement("BUTTON");
    const tareaRealizada = document.createElement("BUTTON");
    
    //Se agreaga el valor al H2
    let valorH2 = textoTarea.textContent = inputValue;
    
    //Si no se agrega nada , avisar al usuario
    if(valorH2 == ""){
        textoTarea.textContent = "null!";
    }

    //Se agreagan los iconos
    let iconoEliminarHtml = `<i class="fa-solid fa-ban"></i>`
    let iconoRealizadaHtml = `<i class="fa-solid fa-circle-check"></i>`
    eliminarTarea.innerHTML= iconoEliminarHtml;
    tareaRealizada.innerHTML = iconoRealizadaHtml;
    eliminarTarea.classList.add("eliminar")
    tareaRealizada.classList.add("realizada")

    

    //Asigancion de Hijos
    containerAgregarTarea.prepend(containerH2Icon);//prepend , es un metodo para que cuadno agreguemos una de las tareas , este se agregue arriba de todo.
    containerH2Icon.appendChild(textoTarea)
    containerH2Icon.appendChild(eliminarTarea)
    containerH2Icon.appendChild(tareaRealizada)

    
    


    //Asignacion de clase/id Botones
    eliminarTarea.setAttribute("id","btnEliminar")
    tareaRealizada.setAttribute("id","btnRealizada")
    const btnEliminar = document.getElementById("btnEliminar")
    const btnRealizada = document.getElementById("btnRealizada")

    //Se elimina la tarea
    btnEliminar.addEventListener("click",()=>{

        containerAgregarTarea.removeChild(containerH2Icon);
        
    })


    //Se realiza la tarea
    btnRealizada.addEventListener("click",()=>{

        textoTarea.classList.toggle("tareaRealizada");

    })


    //Se resetea el Input
    const resetValue = (e) =>{
        e.value = "";
    }


    resetValue(valorTarea)
})


