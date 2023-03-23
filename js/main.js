class ProductoController {
    constructor() {
        this.listacafes = []
    }
    levantar() {
        let obtenerListaJSON = localStorage.getItem("listacafes")

        if (obtenerListaJSON) {
            this.listacafes = JSON.parse(obtenerListaJSON)
        }
    }

    mostrarEnDOM(contenedor_productos) {

        contenedor_productos.innerHTML = ""

        this.listacafes.forEach(producto => {
            contenedor_productos.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <img src="${producto.img}" alt="Cafes">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">${producto.descripcion}</p>
                                <p>Precio: <strong>$${producto.precio}</p></strong>
                                <a href="#" class="btn btn-primary d-flex justify-content-center" id="cof${producto.id}">Añadir al carrito</a>
                            </div>
                    </div>
            `
        })
    }
}

class CarritoController {
    constructor() {
        this.listaCarrito = []
    }

    levantar() {
        let obtenerListaJSON = localStorage.getItem("listaCarrito")
        if (obtenerListaJSON) {
            this.listaCarrito = JSON.parse(obtenerListaJSON)
        }
    }

    anadir(producto) {
        this.listaCarrito.push(producto)

        let formatoJSON = JSON.stringify(this.listaCarrito)

        localStorage.setItem("listaCarrito", formatoJSON)
    }

    mostrarEnDOM(contenedor_carrito) {

        contenedor_carrito.innerHTML = ""

        this.listaCarrito.forEach(producto => {
            contenedor_carrito.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
            <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.nombre}">
            </div>
            <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
                        <p class="card-text"><small class="text-muted">$${producto.precio}</small></p>
                        </div>
                    </div>
                    </div>
                    </div>
                    `
        })
    }

    limpiar() {
        this.listaCarrito = []
        localStorage.removeItem("listaCarrito")
    }
}


const controladorProductos = new ProductoController()
const controladorCarrito = new CarritoController()


controladorProductos.levantar()
controladorCarrito.levantar()


const contenedor_productos = document.getElementById("contenedor_productos")
const contenedor_carrito = document.getElementById("contenedor_carrito")
const finalizar_compra = document.getElementById("finalizar_compra")


controladorProductos.mostrarEnDOM(contenedor_productos)
controladorCarrito.mostrarEnDOM(contenedor_carrito)


controladorProductos.listacafes.forEach(producto => {
    const productoEnCarrito = document.getElementById(`cof${producto.id}`)

    productoEnCarrito.addEventListener("click", () => {

        controladorCarrito.anadir(producto)

        controladorCarrito.levantar()

        controladorCarrito.mostrarEnDOM(contenedor_carrito)
        Toastify({
            text: "Agregado al pedido!",
            duration: 2000,
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(to right, #ffafbd , #ffc3a0)",
                color: "Black"

            },
        }).showToast();
    })
})
finalizar_compra.addEventListener("click", () => {
    if (controladorCarrito.listaCarrito.length > 0) {

        controladorCarrito.limpiar()
        controladorCarrito.mostrarEnDOM(contenedor_carrito)

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Compra realizada!',
            showConfirmButton: false,
            timer: 2000
        })
    } else {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Pedido Vacio',
            showConfirmButton: false,
            timer: 2000
        })
    }
})