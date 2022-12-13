// --------------  Declaracion de constantes globales y funciones --------------  //
const placasAmbMax = 50; //valor maximo permitido para el promedio de tres placas ambientales.//
const enContSup = 25; // valor maximo permitido para el ensayo de contacto en superficie.//
const prom = function (m1, m2, m3) { return (m1 + m2 + m3) / 3 };
function mensajeEnsayo (cont, vMax ) {
    if (cont < vMax){
        console.log("el conteo de u.f.c es de " + cont + ", este valor es menor a " + vMax);
        alert ("Felicite a su equipo de trabajo, están realizando las tareas correctamente!. El resultado del ensayo se encuntra dentro de los parametros esperados.");
    } else {
        console.log("el conteo de u.f.c es de " + cont + ", este valor es mayor a " + vMax);
        alert ("El resultado del ensayo es mayor a " + vMax + " unidades formadoras de colonias por ml de solución. Vuelva a repetir el ensayo e informe a su equipo de trabajo para reforzar la limpieza del sector");
    }

};

// -------------- comienza mi programa -------------- //

for( let i = 1; i < 4; i++){ 
let ingresarUsario = prompt("Para ingresar el usuario debe ser 'covid'. Ingrese su usuario").toLowerCase();
if(ingresarUsario == "covid")
{
    let opcion = prompt("¿Quiere verificar un resultado de ensayo? (si, para cargar dato)").toLowerCase();

    while(opcion == "si" ){
        let tipoEnsayo = parseInt(prompt("¿Qué esnayo desea verificar?. 1 = Ensayo de contacto de superficie  2 = Placas ambientales.")); 
        switch (tipoEnsayo) {
            case 1 :
                let conteo = parseInt(prompt("¿Cuál fue el conteo de unidades formadoras de colonia que dio el ensayo por ml de solucion? "));
                mensajeEnsayo (conteo, enContSup);
                break;
            case 2 : 
                let muestra1 = parseInt(prompt("¿Cuál fue el conteo de unidades formadoras de colonia que dio el primer ensayo por ml de solucion? "));
                let muestra2 = parseInt(prompt("¿Cuál fue el conteo de unidades formadoras de colonia que dio el segundo ensayo por ml de solucion? "));
                let muestra3 = parseInt(prompt("¿Cuál fue el conteo de unidades formadoras de colonia que dio el tercer ensayo por ml de solucion? "));
                console.log ( prom(muestra1, muestra2, muestra3));
                mensajeEnsayo(prom(muestra1, muestra2, muestra3), placasAmbMax);
                break;
            default:
                alert ("la opción  ingresada no es valida. Ingrese 1 o 2 segun el ensayo que desea verificar");
                break;
        }
        opcion = prompt("¿Quiere verificar un resultado de ensayo?(si, para cargar dato)").toLowerCase();
    }
    alert ("Se ingreso una respuesta diferente a 'si'. Cuando necesite verificar otro ensayo por favor vuelva a logearse. Saludos!")
    break;
} else{
    if(i<3){
         alert("el usuario ingresado es incorrecto, le quedan" + (3-i) + " intento/s");
        }else{
            alert("verifique su usuario con su superior y vuelva a intentarlo");
        };

    }
}    