const funcionesDeTareas=require('./funcionesDeTareas')
const accion = process.argv[2];

switch (accion) {
    case 'listar':
        funcionesDeTareas.listar();
        break;
    /*case 'listarPendientes':
        funcionesDeTareas.listarPendientes();
        break;*/
    case 'filtrar':
        let estado=process.argv[3];            
        funcionesDeTareas.filtrarPorEstado(estado);
        break;
    case 'crear':
        let nombre=process.argv[3];
        let nuevaTarea={titulo:nombre,estado:"pendiente"};
        funcionesDeTareas.guardarTarea(nuevaTarea);
        break;
    case undefined:
            console.log("Atención - Tienes que pasar una acción");
        break;
    default:
            console.log("No entiendo qué quieres hacer");
        break;
 }

