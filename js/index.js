var productos = [
    {
        id: 1,
        nombre: "prueba1",
        img: "../img/fondo-header.png",
        descripcion: "lorem jajajaja hola jajaja prueba 1 ",
        precio: 15.69,
        fecha_publicacion: "26/9/2020 20:40:2",
        stock: 15
    },
    {
        id: 2,
        nombre: "prueba2",
        img: "../img/fondo-header.png",
        descripcion: "lorem jajajaja hola jajaja prueba 2 ",
        precio: 15.69,
        fecha_publicacion: "26/9/2020 20:40:2",
        stock: 25
    },
    {
        id: 3,
        nombre: "prueba3",
        img: "../img/fondo-header.png",
        descripcion: "lorem jajajaja hola jajaja prueba 3 ",
        precio: 15.69,
        fecha_publicacion: "26/9/2020 20:40:2",
        stock: 20
    },
    
]

// const count = productos.push({
//     id: 4,
//     nombre: "prueba3",
//     img: "../img/fondo-header.png",
//     descripcion: "lorem jajajaja hola jajaja prueba 4 ",
//     precio: 15.69,
//     fecha_publicacion: "26/9/2020 20:40:2",
//     stock: 20
// });

console.log(JSON.stringify(productos))
var contejecucion=0,div = document.getElementById('data1'),
    section = document.getElementById('content');


// modal de tabla & de registro
// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
// Get the button that opens the modal
var btn = document.getElementById("tabla");
var btnRegistro = document.getElementById("registro");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var cerrarModal2 = document.getElementsByClassName("cerrar")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btnRegistro.onclick=function(){
    modal2.style.display = "block"
    modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
cerrarModal2.onclick = function() {
    modal2.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal.style.display = "none";
  }
}



index()
viewAgregar(productos)

var time = new Date();
console.log(time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());






// funcion mostrar imagenes en el index
function index() {
    for (var i = 0; i < productos.length; i++) {
        section.innerHTML = section.innerHTML + `<div class="producto">
    <img src=${productos[i].img} alt="Productos">
    <p>${productos[i].descripcion}</p>
    <span>${productos[i].precio}</span>
    <hr>
    <footer>
        <p>Publicado:</p>
        <time datetime=${productos[i].fecha_publicacion}>${productos[i].fecha_publicacion}</time>
    </footer>
    </div>  `;
    }
}
// funcion eliminar productos
function drop(id){
   var confirmar=confirm("¿Esta seguro que desea eliminar este registro?")
   console.log(confirmar)

   if(confirmar){
    contejecucion= contejecucion+1;
       var id=id-1;
       console.log(id)
       productos.splice(id,1);
       div.innerHTML = ""
       section.innerHTML =""
       viewAgregar(productos)
       index()
   }

}
// funcion mostrar los  productos en una tabla
function viewAgregar(arr){
    cont=0;
    for (var i = 0; i < arr.length; i++) {
        cont= cont+1;
        div.innerHTML = div.innerHTML + `<tr>
    <td>${arr[i].id}.</td>
    <td>${arr[i].nombre}.</td>
    <td>${arr[i].descripcion}.</td>
    <td>${arr[i].precio}.</td>
    <td>${arr[i].fecha_publicacion}.</td>
    <td>${arr[i].stock}.</td>
    <td class="text-center"><a class="btn-warning" href=""><i class="fa fa-edit"></i></a></td>
    <td class="text-center"><a class="btn-danger" href="javascript:drop(${cont});" ><i class="fa fa-trash"></i></a></td>
    </tr>`;
    }
}
