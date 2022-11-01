document.addEventListener('DOMContentLoaded', () => {

    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Patata1:2 Helmet Austria 2022 Max Verstappen',
            precio: 159.95,
            imagen: 'https://www.verstappen.com/img/thumb/thumb.php?src=/img/product/793_fc878eb_Dutch_GP_1_2_helm_2022_01_Side_richt.png&w=260&f=png'
        },
        {
            id: 2,
            nombre: 'RED BULL RACING ELECTRON E PRO SNEAKER',
            precio: 84.95,
            imagen: 'https://www.verstappen.com/img/thumb/thumb.php?src=/img/product/926_604b59f_307013_03.png&w=700;&f=png'
        },
        {
            id: 3,
            nombre: 'HOODIE WORLD CHAMPION 2022',
            precio: 69.95,
            imagen: 'https://www.verstappen.com/img/thumb/thumb.php?src=/img/product/1128_1d22946_WC_Hoodie_2022_Side_Left.png&w=700;&f=png'
        },
        {
            id: 4,
            nombre: 'Mens Polo 2022',
            precio: 74.95,
            imagen: 'https://www.verstappen.com/img/thumb/thumb.php?src=/img/product/697_cdbdedb_red_bull_racing_team_polo_heren_teamline_2022_763265_01.png&w=700;&f=png'
        }

    ];

    let carrito = [];
    const divisa = '€';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;


    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'ADD TO THE CART';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    /**
 añadir un producto al carrito de la compra
    */
    function anyadirProductoAlCarrito(evento) {
        
        carrito.push(evento.target.getAttribute('marcador'))
        
        renderizarCarrito();
        
        guardarCarritoEnLocalStorage();
    }

 
    function renderizarCarrito() {
        
        DOMcarrito.textContent = '';
        
        const carritoSinDuplicados = [...new Set(carrito)];
        
        carritoSinDuplicados.forEach((item) => {
            
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                
                return itemBaseDatos.id === parseInt(item);
            });
            
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                
                return itemId === item ? total += 1 : total;
            }, 0);
            
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        
        DOMtotal.textContent = calcularTotal();
    }

    /**
   borrar un elemento del carrito
    */
    function borrarItemCarrito(evento) {
        
        const id = evento.target.dataset.item;
        // Borra todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
       
        renderizarCarrito();
        
        guardarCarritoEnLocalStorage();

    }

    /**
     * Calcula el precio total teniendo en cuenta los productos repetidos
     */
    function calcularTotal() {
         
        return carrito.reduce((total, item) => {
            
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            //  total
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

   
    function vaciarCarrito() {
        
        carrito = [];
        
        renderizarCarrito();
        
        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        
        if (miLocalStorage.getItem('carrito') !== null) {
            
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});
