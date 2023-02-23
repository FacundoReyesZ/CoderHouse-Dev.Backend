
/**
* @param {Array} lista


HANDS ON LAB 1
*/
function mostrarLista(lista){
    if(lista.length===0){
        console.log("Lista vacia")
    }
    else{
        for (const elemnt of lista){
            console.log(elemnt)
        }
    console.log(`Longitud de la lista: ${lista.length}`)
    }
}

mostrarLista([])
mostrarLista([1,2,43])
mostrarLista('chaucito')
/* node --watch (reinicia cda vez q hay un cambio en el archivo buenardo)*/

/*
HANDS ON LAB 2 ------------------------------------------------
*/

class contador{
    static cant = 0

    constructor(responsable){
        this.responsable = responsable
        this.contador = 0
    }

    contar(){
        this.contador++;
        contador.cant++;
    }

    static getCantidadTotal(){
        `El contador total es ${contador.cant}`
    }
}

const c1=new contador('vir')
const c2=new contador('Facu')

c1.contar()
c1.contar()
c1.contar()
c1.contar()
c1.contar()
c2.contar()

console.log(c1)
console.log(c2)
console.log(contador.getCantidadTotal)