
function totalp(arr) {
    let resultado = 0;
    arr.forEach(producto => {
        resultado = resultado + producto.precio * producto.cantidad

    })
    return resultado;

}
const carro = []
const listacafes = [{ id: 1, nombre: " Kobe ", precio: 1500, cantidad: 0, stock: 100 },
{ id: 2, nombre: " Lebron", precio: 1250, cantidad: 0, stock: 100 },
{ id: 3, nombre: " Ginobilli", precio: 1000, cantidad: 0, stock: 100 },
{ id: 4, nombre: " Antetokounmpo", precio: 900, cantidad: 0, stock: 100 },
{ id: 5, nombre: " Luka", precio: 800, cantidad: 0, stock: 100 },
{ id: 7, nombre: " Bird", precio: 700, cantidad: 0, stock: 100 },
{ id: 8, nombre: " Shaq", precio: 600, cantidad: 0, stock: 100 },
{ id: 9, nombre: " Morant", precio: 550, cantidad: 0, stock: 100 },
]

let i = 0;

console.log("Elija el cafe que usted quiera comprar")

let rta = ""


do {
    let descripcioncafes = ""
    listacafes.forEach(producto => {

        descripcioncafes += producto.id + " Cafe " + producto.nombre + " Precio:$ " + producto.precio + " Stock " + producto.stock +" u"+"\n"

    })
    alert(descripcioncafes)
    let id = prompt("Ingrese el ID del producto a comprar",)

    if (!isNaN(id)) {

        if (listacafes.some(producto => producto.id == id)) {

            let cantidad = prompt(" ¿Cuantos quieres?")
            let stock = 0
            const producto = listacafes.find(producto => producto.id == id)
            if (producto.stock > cantidad) {

                producto.cantidad = stock;
                producto.cantidad = cantidad;
                carro.push(producto)

            } else {
                alert("Lo sentimos no tenemos stock, vuelva a pedir nuevamente " + producto.stock + " unidades en stock restante")
            }

        } else {
            console.log("ID no valido")
        }


    }

    rta = prompt("Usted puede seguir comprando, en caso contrario, escriba no para finalizar")

} while (rta != "no")

alert("El total de su compra es: " + totalp(carro));