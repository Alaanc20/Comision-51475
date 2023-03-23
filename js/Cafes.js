let listacafes = [
    {
        id: 1,
        nombre: "Café Kobe",
        descripcion: "Café solo, es habitual el uso de café de la variante arábiga. Habitualmente suele tener algo de espuma por encima.",
        precio: 1500,
        img: "../assets/cafekobe.png"
    },
    {
        id: 2,
        nombre: "Café Lebron",
        descripcion: "Café Lebron comúnmente conocido como café cortado o macchiato, este tipo de café es uno de los más demandados.",
        precio: 1250,
        img: "../assets/cafelebron.png"
    },
    {
        id: 3,
        nombre: "Café Ginobilli",
        descripcion: "El Ginobilli lungo o largo se trata de un tipo de café en el que la extracción de agua en contacto con los granos de café molidos se realiza de manera más prolongada, lo que conlleva más cantidad de infusión.",
        precio: 1000,
        img: "../assets/cafegino.png"
    },
    {
        id: 4,
        nombre: "Café Antetokounmpo",
        descripcion: "Café expreso como base un cuarto de nuestra taza de café o vaso alto. ",
        precio: 900,
        img: "../assets/cafeanteto.png"
    },
    {
        id: 5,
        nombre: "Café Luka",
        descripcion: "Café Luka, una proporción muy semejante de leche y café, 50%y  50%, aproximadamente.",
        precio: 800,
        img: "../assets/cafeluka.png"
    },
    {
        id: 6,
        nombre: "Café Bird",
        descripcion: "Un café Bird parecido al capuchino, café espresso y partes iguales de leche y crema o espuma de leche.",
        precio: 700,
        img: "../assets/cafebird.png"
    },
    {
        id: 7,
        nombre: "Café Shaq",
        descripcion: "Cafe Shaq, gran parte de Chocolate y cacao.",
        precio: 600,
        img: "../assets/cafeshaq.png"
    },
    {
        id: 8,
        nombre: "Café Morant",
        descripcion: "El café Morant es una bebida más dulce del café y  leche condensada.",
        precio: 550,
        img: "../assets/cafemorant.png"
    },
]

const formatoJSON = JSON.stringify(listacafes)

localStorage.setItem("listacafes", formatoJSON)