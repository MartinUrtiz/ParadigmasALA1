const prompt = require('prompt-sync')({sigint: true});


let tareas = [];

// Función principal: menú
function mostrarMenu() {
    console.log('\n--- TO-DO LIST ---');
    console.log('1. Crear tarea');
    console.log('2. Listar tareas');
    console.log('3. Cambiar estado de tarea');
    console.log('4. Eliminar tarea');
    console.log('5. Salir');

    const opcion = prompt('Elige una opción: ');

    switch(opcion) {
        case '1': crearTarea(); break;
        case '2': listarTareas(); break;
        case '3': cambiarEstado(); break;
        case '4': eliminarTarea(); break;
        case '5': console.log('Adiós!'); process.exit(0);
        default: console.log('Opción no válida');
    }

    mostrarMenu();
}

// Crear tarea
function crearTarea() {
    const titulo = prompt('Título de la tarea: ');
    const descripcion = prompt('Descripción (opcional): ');
    const vencimiento = prompt('Vencimiento (YYYY-MM-DD HH:MM, opcional): ');
    const dificultad = prompt('Dificultad (1=Fácil, 2=Medio, 3=Difícil, default=1): ');

    const tarea = {
        id: tareas.length + 1,
        titulo,
        descripcion: descripcion || '',
        estado: 'pendiente',
        fechaCreacion: new Date(),
        vencimiento: vencimiento ? new Date(vencimiento) : null,
        dificultad: dificultad ? parseInt(dificultad) : 1
    };

    tareas.push(tarea);
    console.log('✅ Tarea creada correctamente!');
}

// Listar tareas
function listarTareas() {
    console.log('\n--- LISTA DE TAREAS ---');
    if (tareas.length === 0) {
        console.log('No hay tareas cargadas.');
        return;
    }

    tareas.forEach(t => {
        const estrellas = '⭐'.repeat(t.dificultad);
        console.log(`ID: ${t.id} | ${t.titulo} [${t.estado}] | Dificultad: ${estrellas}`);
        if(t.descripcion) console.log(`   Descripción: ${t.descripcion}`);
        console.log(`   Creación: ${t.fechaCreacion.toLocaleString()}`);
        if(t.vencimiento) console.log(`   Vencimiento: ${t.vencimiento.toLocaleString()}`);
    });
}

// Cambiar estado
function cambiarEstado() {
    const id = parseInt(prompt('Ingresa el ID de la tarea: '));
    const tarea = tareas.find(t => t.id === id);

    if(!tarea) {
        console.log('❌ ID no encontrado');
        return;
    }

    console.log('Estados posibles: pendiente, en curso, terminada, cancelada');
    const estado = prompt('Nuevo estado: ');

    const estadosValidos = ['pendiente', 'en curso', 'terminada', 'cancelada'];
    if(estadosValidos.includes(estado)) {
        tarea.estado = estado;
        console.log('✅ Estado actualizado!');
    } else {
        console.log('❌ Estado no válido');
    }
}

// Eliminar tarea
function eliminarTarea() {
    const id = parseInt(prompt('Ingresa el ID de la tarea a eliminar: '));
    const index = tareas.findIndex(t => t.id === id);

    if(index !== -1) {
        tareas.splice(index, 1);
        console.log('🗑️ Tarea eliminada!');
    } else {
        console.log('❌ ID no encontrado');
    }
}

// Iniciar la app
mostrarMenu();
