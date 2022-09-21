//destruccion de objetos y arrays
interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;

    detalles: Detalles;

}

interface Detalles{
    autor: string;
    year: number;
}

const reproducto: Reproductor = {
    volumen: 90,
    segundo: 66,
    cancion: 'Tusa',
    detalles: {
        autor: 'Karol G',
        year: 2019,
    }
}

const{volumen, segundo, cancion,} = reproducto;
const{autor} = reproducto.detalles

console.log(`El volumen actual es: ${reproducto.volumen}`)
console.log(`El segundo actual es: ${reproducto.segundo}`)
console.log(`La cancion actual es: ${reproducto.cancion}`)
console.log(`El autor es: ${autor}`)


const dbz: string [] = ['Goku', 'Vegetta', 'Trunks', 'Gohan'];
console.log(`Protagonista: ${dbz[0]};`);
console.log(`Secundario: ${dbz[1]};`);
console.log(`Hijo Secundario: ${dbz[2]};`);
console.log(`Hijo Prota: ${dbz[3]};`);

const[a,,,d] = dbz;
console.log(`Protagonista: ${a};`);
// console.log(`PSecundarip: ${b};`);
// console.log(`Hijo Secun: ${c};`);
console.log(`Hijo Prota: ${d};`);