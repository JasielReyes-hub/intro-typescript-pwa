//funciones

import { NumericLiteral } from "typescript";

//Sumo 2 Objetos, COmo ndos nombres
function sumar(a,b):void{
    console.log(a + b);
}

const resultado = sumar ('Roberto','Cardiel');
console.log(resultado)

//Sumo dos numeros
function  sumar2(n1: number, n2: number):number{
    return n1 + n2;
}
console.log(sumar2(6,3))



//Multiplicar dos numeros
//Signo ? es para señalar un numero opcioal
function multiplicacion(n1: number, otronumero: number, base: number = 3): number{

    let tem = n1 * base;
    return tem;
}
console.log(multiplicacion(3,5));

//Crear Interface
interface mascotas{
    nombre: string;
    edad: number;
    mostraredad:()=> void;
}

//PAsar objetos añadiendo una interface
function Calcular(mascotas: mascotas, edad: number): void{
    mascotas.edad += edad;
    console.log(mascotas);

}
const nuevaMascota: mascotas = {
    nombre: 'Miau',
    edad:2, 
    mostraredad() {
        console.log('La edad es: ', this.edad);
    },
}
Calcular(nuevaMascota,3);