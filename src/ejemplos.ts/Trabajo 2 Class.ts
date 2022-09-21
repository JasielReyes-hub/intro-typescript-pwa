// //Class

import { NumericLiteral } from "typescript";

// class Persona{
//     nombre: string;
//     edad: number;

//     imprimir():void{
//         console.log(`El nombre es: ${this.nombre} \n 
//         la edad es: ${this.edad}`);
//     }
// }


// let personal = new Persona();
// personal.nombre = "Mario";
// personal.edad = 22;
// personal.imprimir();


//PEdir 3 numeros que nos permita calcular la formula general

// class Formula{
//     Numero1: number;
//     Numero2: Number;
//     Numero3: number;

//     Operacion():void{
//         console.log(`El primer numero para oprracion es: ${this.Numero1} \n
//         El segundo numero es: ${this.Numero2} \n
//         El tercer numero es: ${this.Numero3}`);
//     }

// }

// let FormulaF = new Formula():
// FormulaF.Numero1 = 22
// FormulaF.Operacion();


// function sumar(a:number, b:number, c:number): number {
//     return b * b - a * a * c;
//   }
  
//   console.log(sumar(4, 3, -1));

class FormulaG{
    num1: number; //a
    num2: number; //b
    num3: number; //c
    
    result: number;
    result2: number;

    mostrar(): void{
        this.result = ( - this.num2 - Math.sqrt(Math.pow(this.num2, 2) - (4 * this.num1 * this.num3))) / (2*this.num1); //Se realiza la operacion que esta dentro de la raiz y 
        this.result2 = ( - this.num2 + Math.sqrt(Math.pow(this.num2, 2) - (4 * this.num1 * this.num3))) / (2*this.num1);                                                                // arroja el primer resultado que se utiliza en la sig operacion
        // this.result = Math.sqrt(this.result); // Se realiza la raiz cuadra
        // this.result = (-(this.num2)) - (this.result); // se realiza la operqacion correspondiente dependiendo del numero asigando en 
        //                                              // nume2 (letra b)
        // this.result = this.result/(2*this.num1)// los resultados pasados se dividieran como indica la formula y se multiplicara por 2
     
        console.log(`El resultado es ${this.result}`);   
        console.log(`El resultado es: ${this.result2}`);
    }

}

let resultado = new FormulaG();
resultado.num1 = 6;
resultado.num2 = -19;
resultado.num3 = 7;
resultado.mostrar();
// console.log(`El resultado es ${this.result}`);



