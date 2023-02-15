
/**
* @param {Array} lista
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