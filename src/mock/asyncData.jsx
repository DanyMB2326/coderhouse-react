import besoFrio from '../assets/img/beso-frio.png'
import galletaComeme from '../assets/img/galleta-comeme.png'
import sombrereroLoco from '../assets/img/sombrerero-loco.png'
import tazaSparrow from '../assets/img/taza-sparrow.png'

const productos=[
    {
        id:'01',
        name:'Beso Frío',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
        stock:20,
        price:85,
        category: 'nuevos',
        img: besoFrio
    },
     {
        id:'02',
        name:'Galleta Cómeme',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
        stock:50,
        price:38,
        category: 'mas vendidos',
        img:galletaComeme
    },
     {
        id:'03',
        name:'Sombrerero Loco',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
        stock:20,
        price:90,
        category: 'mas vendidos',
        img:sombrereroLoco
    },
    {
        id:'04',
        name:'Taza Jack Sparrow',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
        stock:40,
        price:450,
        category: 'ofertas',
        img:tazaSparrow
    }
]


let error= false

export const getProducts = ()=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                resolve(productos)
            }
        },3000)
    })
}