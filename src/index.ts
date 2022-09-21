//Class

class Persona{
    nombre: string;
    edad: number;

    imprimir():void{
        console.log(`El nombre es: ${this.nombre} \n 
        la edad es: ${this.edad}`);
    }
}


let personal = new Persona();
personal.nombre = "Mario";
personal.edad = 22;
personal.imprimir();


//PEdir 3 numeros que nos permita calcular la formula general

class Formula{
    Numero1: number;
    Numero2: Number;
    Numero3: number;

    Operacion():void{
        console.log(`El primer numero para oprracion es: ${this.Numero1} \n
        El segundo numero es: ${this.Numero2} \n
        El tercer numero es: ${this.Numero3}`);
    }

}

let FormulaF = new Formula():
FormulaF.Numero1 = 22
FormulaF.Operacion();

