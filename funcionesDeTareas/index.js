const fs =  require ('fs');
const pathArchivoTarea=__dirname + '/../tareas.json';

function filtrarPorEstado(estado){
    let ts=leerJSON();
    let tareasFiltradas=ts.filter(function(elem){
                                  return elem.estado===estado;
                                });
    imprimirArrayDeTareas("====TAREAS====",tareasFiltradas);
}

function listar(){
    imprimirArrayDeTareas("------LISTADO DE TAREAS------",tareas);
}

/*function listarPendientes(){
    let tareasPendientes=tareas.filter((tarea)=>tarea.estado==='pendiente');
    imprimirArrayDeTareas("------LISTAR TAREAS PENDIENTES------",tareasPendientes);
}*/    

function imprimirArrayDeTareas(titulo,array){ 
    console.log(titulo);
    for (let i = 0; i < array.length; i++){
        console.log((i+1) + "- Titulo " + array[i].titulo + " - Estado " + array[i].estado);
    }
}

function leerJSON(){
    const archivoDeTareas = fs.readFileSync(pathArchivoTarea, 'utf8');
    const tareas = JSON.parse(archivoDeTareas);
    return tareas;
}

function escribirJSON(tareas){
    let datosConvertidos=JSON.stringify(tareas);
    fs.writeFileSync(pathArchivoTarea,datosConvertidos);
}

function guardarTarea(tarea){
    let ts=leerJSON();
    ts.push(tarea);
    escribirJSON(ts);
}

module.exports={listar,guardarTarea,filtrarPorEstado}
                