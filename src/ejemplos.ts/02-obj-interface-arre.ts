
//Definicion de Interfaces

interface Alumno{
    matricula: number;
    nombre: string;
    email: string;
}

//Objeto en Ts
let alumno: Alumno = {
    nombre:'Jasiel', 
    matricula:1234, 
    email: "leonartdreyes@gmail.com" 
}


let mascotas = ['perro', 'gato', 'perico']

mascotas [1] ='shshs', 
mascotas.push()

let tem:(number | string)[]=[]
tem.push('Nombre');
tem.push(222);




console.log(mascotas)
console.table(alumno)

