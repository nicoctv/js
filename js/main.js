// Función para mostrar el menú y obtener la opción del usuario
function mostrarMenu() {
    let opcion = prompt(`Bienvenido al gestor de tareas. Seleccione una opción:
    1. Agregar tarea
    2. Ver tareas
    3. Marcar tarea como completada
    4. Salir`);
    return opcion;
}

// Array para almacenar los tipos de tareas
let tiposTareas = ["Trabajo", "Estudio", "Personal"];

// Array para almacenar las tareas
let tareas = [];

// Función para agregar una nueva tarea
function agregarTarea() {
    let tarea = prompt("Ingrese la nueva tarea:");
    let tipoIndex = parseInt(prompt(`Seleccione el tipo de tarea:
    ${tiposTareas.map((tipo, index) => `${index + 1}. ${tipo}`).join("\n")}`)) - 1;
    let tipo = tiposTareas[tipoIndex];
    tareas.push({ tarea: tarea, tipo: tipo, completada: false });
}

// Función para mostrar las tareas
function verTareas() {
    console.log("Lista de tareas:");
    for (let i = 0; i < tareas.length; i++) {
        console.log(`${i + 1}. ${tareas[i].tarea} - Tipo: ${tareas[i].tipo} - ${tareas[i].completada ? 'Completada' : 'Pendiente'}`);
    }
}

// Función para marcar una tarea como completada
function marcarTareaCompletada() {
    let indice = parseInt(prompt("Ingrese el número de la tarea que desea marcar como completada:")) - 1;
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].completada = true;
        console.log("Tarea marcada como completada.");
    } else {
        console.log("Número de tarea inválido.");
    }
}

// Función principal
function main() {
    let opcion;
    do {
        opcion = mostrarMenu();
        switch (opcion) {
            case "1":
                agregarTarea();
                break;
            case "2":
                verTareas();
                break;
            case "3":
                marcarTareaCompletada();
                break;
            case "4":
                console.log("¡Hasta luego!");
                break;
            default:
                console.log("Opción inválida. Por favor, seleccione una opción válida.");
        }
    } while (opcion !== "4");
}

main();
