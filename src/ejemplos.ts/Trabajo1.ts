interface DatoUni {
    nombre: string;
    edad: number;
    direccionE:{
        calle: string;
        pais: string;
        estado: string;
    };
    mostrardireccion: () => void;
}


const AlumnoUtl:DatoUni={

    nombre:  "Jasiel",
    edad: 22,
    direccionE:{
        calle: "Leon",
        pais: "MX",
        estado: "GTO",
    },

    mostrardireccion(){
        return this.nombre + ',' + ',' + this.direccionE.estado + ',' + this.direccionE.pais;
    }
};

const direccionE = AlumnoUtl.mostrardireccion();
console.log(direccionE);


// const nuevaMascota: mascotas = {
//     nombre: 'Miau',
//     edad:2, 
//     mostraredad() {
//         console.log('La edad es: ', this.edad);
//     },
// }
// Calcular(nuevaMascota,3);


//todos los objetos deben tener tipado de datos pra el objeto alumno utl
