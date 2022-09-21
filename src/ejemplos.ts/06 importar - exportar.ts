import{Producto, calcularIVA2} from './05 - Destrcturacion de Funciones'

const carrito : Producto[] = [{
    desc: "Telefono",
    precio: 100
},
{
    desc: "Telefono",
    precio: 100
},
{
    desc: "Telefono",
    precio: 100
},
{
    desc: "Telefono",
    precio: 100
},
];
const [Total, iva2] = calcularIVA2(carrito);
console.log(`Total: `)