var productos = [
  {
    id:1,
    nombre: "prueba1",
    img: "../img/fondo-header.png",
    descripcion: "lorem jajajaja hola jajaja prueba 1 ",
    precio: 15.69,
    fecha_publicacion: "26/9/2020 20:40:2",
    stock: 15,
    categoria: "Celulares"
  },
  {
    id:2,
    nombre: "prueba2",
    img: "../img/fondo-header.png",
    descripcion: "lorem jajajaja hola jajaja prueba 2 ",
    precio: 15.69,
    fecha_publicacion: "26/9/2020 20:40:2",
    stock: 5,
    categoria: "Motos"
  },
  {
    id:3,
    nombre: "prueba3",
    img: "../img/fondo-header.png",
    descripcion: "lorem jajajaja hola jajaja prueba 3 ",
    precio: 15.69,
    fecha_publicacion: "26/9/2020 20:40:2",
    stock: 20,
    categoria: "Bolsas"
  },

]

var carrito = [];


var contejecucion = 0, div = document.getElementById('data1'),
  section = document.getElementById('content'),
  carroId = document.getElementById('carro');


// modal de tabla & de registro
// Obtener el modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
// Obtén el botón que abre el modal
var btn = document.getElementById("tabla");
var btnRegistro =document.getElementsByClassName("registro")
// var btnRegistro = document.getElementById("registro");
// var btnRegistro1 = document.getElementById("registro1");
// var btnRegistro1=document.getElementsByClassName("registro1")
// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];
var cerrarModal2 = document.getElementsByClassName("cerrar")[0];
var cerrarModal3 = document.getElementsByClassName("cerrar1")[0];
var cerrarModal4 = document.getElementsByClassName("cerrar2")[0];
// Cuando el usuario haga clic en el botón, abra el modal
function registroNew(){
  modal3.style.display = "block"
  modal.style.display = "none";
}
function modalCarro(){
  // carroId.innerHTML ='';
  modal4.style.display = "block"
  if(carrito.length==0 ){
    carroId.innerHTML ='';
    carroId.innerHTML = carroId.innerHTML +`
      <h1>No hay agregado ningun producto</h1>
    `
  } 
  
 
}
btn.onclick = function () {
  modal.style.display = "block";
}

btnRegistro.onclick = function () {
  modal2.style.display = "block"
  modal.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
cerrarModal2.onclick = function () {
  modal2.style.display = "none";
}
cerrarModal3.onclick = function () {
  modal3.style.display = "none";
}
cerrarModal4.onclick = function () {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}



index()
viewAgregar(productos)

var time = new Date();



// funciones de carrito

function carro(po){
  for(let i=0; i<productos.length;i++){
    if(po==productos[i].id){
      console.log(JSON.stringify(productos[i]))
       carrito.push(productos[i]);
    }
  }
  showCarro()
}
function drop1(id) {
  var confirmar = confirm("¿Esta seguro que desea eliminar este Producto?")
  if (confirmar) {
    console.log("si entra " + id) 
    for(let i=0;i<carrito.length;i++){
      if(carrito[i].id==id){
        console.log('di entra'+carrito[i].id+"=="+id+"--"+i)
        productos.splice(i, 1);
        
        console.log(JSON.stringify(productos)) 
        carroId.innerHTML ='';
        showCarro() 
      }
    }
  }
  
}
function showCarro(){
  carroId.innerHTML ='';
  console.log('si entra' + carrito.length)
  for(let j=0; j< carrito.length;j++){
    carroId.innerHTML = carroId.innerHTML +`
    <div class="table-productos">
      <div class="header-carrito">${carrito[j].nombre}</div>
  
      <table cellspacing="0">
          <tr>
              <th>Imagen</th>
              <th>Precio</th>
              <th>Categoria</th>
              <th>Eliminar</th>
          </tr>
          <tr>
            <td><img src="${carrito[j].img}" alt="" /></td>
            <td>${carrito[j].precio}</td>
            <td>${carrito[j].categoria} </td>
            <td style="text-align: center;"><a class="btn-danger" href="javascript:drop1(${carrito[j].id});" ><i class="fa fa-trash"></i></a></td>
          </tr>
      </table>
    </div>
    `
  }
}
// funcion mostrar imagenes en el index
function index() {
  for (var i = 0; i < productos.length; i++) {
    // console.log(productos.length)
    section.innerHTML = section.innerHTML + `<div class="producto">
    <h1>${productos[i].nombre}</h1>  
    <img src=${productos[i].img} alt="Productos">
      <p>${productos[i].descripcion}</p>
      <span>${productos[i].precio}</span>
      <hr>
      <footer>
          <p>Publicado:</p>
          <time datetime=${productos[i].fecha_publicacion}>${productos[i].fecha_publicacion}</time>
          <a class="btn-warning" href="javascript:carro(${productos[i].id});">holaaaa</a>
      </footer>
      </div>  `;
  }
}
// funcion eliminar productos
function drop(id) {
  var confirmar = confirm("¿Esta seguro que desea eliminar este registro?")
  if (confirmar) {
    contejecucion = contejecucion + 1;
    var id = id - 1;
    productos.splice(id, 1);
    div.innerHTML = ""
    section.innerHTML = ""
    viewAgregar()
    // console.log(productos.length)
    index()
    if (productos.length == 0)
      notFound()
  }

}

//funcion de mensaje no hay registro
function notFound() {
  // console.log("si entro")
  section.innerHTML = section.innerHTML + `
        <div><h1>No hay ningun producto</h1></div>
      `
}

// funcion de llenado de datos del formulario dependiendo el producto
function formFilling(nombre) {
  
  
  var indice = nombre - 1
  const result = productos[indice]
  console.log(result);
  modal2.style.display = "block"
  modal.style.display = "none";
  document.getElementById("id").value = indice;
  document.getElementById("nombre").value = result.nombre;
  document.getElementById('img').value = result.img;
  document.getElementById('descripcion').value = result.descripcion;
  document.getElementById('precio').value = result.precio;
  document.getElementById('stock').value = result.stock;
  document.getElementById('categoria').value = result.categoria;
}
// funcion de actualizar datos
function Update() {

  
  var mod = confirm("Desea modificar:")

  if (mod) {
    let indice = document.getElementById("id").value;
    let nombre1 = document.getElementById("nombre").value;
    let img = document.getElementById('img').value;
    let descripcion = document.getElementById('descripcion').value;
    let precio = parseInt(document.getElementById('precio').value);
    let stock = document.getElementById('stock').value;
    let categoria = document.getElementById('categoria').value;
    let actializar = {
      nombre: nombre1,
      img: img,
      descripcion: descripcion,
      precio: precio,
      stock: stock,
      categoria: categoria
    }
    console.log(actializar)
    console.log(productos[indice])
    productos[indice] = actializar;
    div.innerHTML = ""
    section.innerHTML = ""
    viewAgregar()
    // console.log(productos.length)
    index()
    clearForm()
    modal2.style.display = "none";
    alert('Tu actualización se realizo satisfactoriamente')
  }

}
// funcion mostrar los  productos en una tabla
function viewAgregar() {
  cont = 0;
  for (var i = 0; i < productos.length; i++) {
    cont = cont + 1;
    div.innerHTML = div.innerHTML + `<tr>
    <td>${productos[i].nombre}.</td>
    <td>${productos[i].descripcion}.</td>
    <td>${productos[i].precio}.</td>
    <td>${productos[i].fecha_publicacion}.</td>
    <td>${productos[i].stock}.</td>
    <td>${productos[i].categoria}.</td>
    <td class="text-center"><a class="btn-warning" href="javascript:formFilling(${cont});"><i class="fa fa-edit"></i></a></td>
    <td class="text-center"><a class="btn-danger" href="javascript:drop(${cont});" ><i class="fa fa-trash"></i></a></td>
    </tr>`;
  }
}
// limpiar campos de formulario 
function clearForm() {
  document.getElementById("id").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById('img').value = "";
  document.getElementById('descripcion').value = "";
  document.getElementById('precio').value = "";
  document.getElementById('stock').value = "";
  document.getElementById('categoria').value = "";

}
// Funcion de crear nuevo producto 
function create(){
  let nombre=document.getElementById("nombre1").value;
  let img=document.getElementById('img1').value;
  let descripcion=document.getElementById('descripcion1').value;
  let precio=document.getElementById('precio1').value ;
  let stock=document.getElementById('stock1').value;
  let categoria=document.getElementById('categoria1').value;
  console.log(nombre + img+ descripcion+ precio+ stock+categoria);
  let id= (productos[productos.length - 1].id)+1;
  if (nombre != '' && img != '' && descripcion != '' && precio != 0 && stock != '' && categoria!='') {
    productos.push({
          id:id,
          nombre: nombre,
          img: img,
          descripcion: descripcion,
          precio: precio,
          fecha_publicacion: time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds(),
          stock: stock,
          categoria: categoria,
      });
      div.innerHTML = ""
      section.innerHTML = ""
  // console.log(JSON.stringify(productos))
    index()
    viewAgregar();
    modal3.style.display = "none";
      alert('Tu actualización se realizo satisfactoriamente')
  }else{
    alert('llena todos los campos')
  }    

}

