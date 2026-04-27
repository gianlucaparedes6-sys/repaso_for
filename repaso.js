// FUNCIÓN PRINCIPAL
function mostrar(opcion) {
    switch (opcion) {
        case 1:
            ejercicio1();
            break;
            case 2:
            centenasAsendentes();
            break;
            case 3:
            centenasDesendentes();
            break;
            case 4:
            mostrarMensaje1();
            break;
            case 5:
            mostrarMensaje2();
            break;
            case 6:
            mostrarMensaje3();
            break;
            case 7:
            mostrarMensaje4();
            break;
            case 8:
            mostrarTabla();
            break;

        default:
            console.log("Opción no válida");
            break;
    }
}

// EJERCICIO 1
function ejercicio1() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
// EJERCICIO 2
function centenasAsendentes() {
    for (let i = 100; i <= 1000; i+= 100) {
        console.log(i);
    }
}
// EJERCICIO 3
function centenasDesendentes() {
    for (let i = 1000; i >= 800; i-= 100) {
        console.log(i);
    }
}
function mostrarMensaje1() {
    for (let i = 5; i < 8; i++) {
        console.log(  i);
    }
}
function mostrarMensaje2() {
    for (let i = 10; i >= 8; i--) {
        console.log( i);
    }
}
function mostrarMensaje3() {
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
}
function mostrarMensaje4() {
    for (let i = 8; i > 5; i--) {
        console.log(i);
    }
}
function mostrarTabla() {
    for (let i = 1; i <= 10; i++) {
        console.log("3*" + i + "=" + i*3);
    }
}