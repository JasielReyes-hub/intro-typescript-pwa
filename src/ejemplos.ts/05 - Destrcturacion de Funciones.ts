//Destructuracion de funciones

export interface Producto{
    desc: string;
    precio: number;
}

const telefono:Producto = {
    desc: 'Moto E40',
    precio: 3500,

}

const tablet: Producto = {
    desc: 'iPad',
    precio: 50000
}

function CalcularIVA(productos:Producto[]):number{
    let total = 0;
    productos.forEach((productos) =>{
        total +=productos.precio;
})
    return total*0.16;

}

const articulos = [telefono, tablet];
const iva = CalcularIVA(articulos);
console.log(`IVA: ${iva}`);


export function calcularIVA2(productos: Producto[]): [number,number]{
    let total = 0;
    productos.forEach(({precio}) => {
        total += precio;
    })
    return [total,total*0.16];
}

const articulos2 = [telefono, tablet];
const [total,iva2] = calcularIVA2(articulos2);
console.log(`Total: ${total}`);
console.log(`IVA: ${iva}`);