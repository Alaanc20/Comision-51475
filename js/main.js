suma=0
let cant = Number(prompt("Ingrese la cantidad de partidos jugados"));
if(cant<=0){
    console.log("0 y letras no son un numero valido de partidos")
}
for ( i=1; i <= cant; i++) {

let part= Number(prompt("Digite la cantidad de goles en el partido " + i))
suma=suma+part;}

let prom = suma/ cant;

console.log ("Usted tiene en promedio " + prom +" goles por partido")

function promesa_o_fracaso(prom){
    if(prom>1){
        return("Sos una promesa futbolistica")
    } else{
        return("Segui participando")
    }
}
console.log (promesa_o_fracaso(prom))