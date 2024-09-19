import {Materia} from "./Materia"
import {Alumnos} from "./Alumnos"
import * as readline from 'readline-sync';
function main(){

    //Muestra las opciones
    const opciones = ['Crear alumno', 'asignar materia a alumno', 'lista de materias del alumno'];
    let indice = readline.keyInSelect(opciones, 'Seleccione una operacion: ');

    
    let alumnos: Alumnos[] = []
    while(indice !== -1){

        //realiza la opccion elegida
       switch(indice){
        case 0:
          try {
            let nombre: string = readline.question('Introduce el nombre del alumno: ')
            let alumno = new Alumnos(nombre)
            alumnos.push(alumno)
            console.log("se ha creado correctamente")
          } catch (error) {
            console.log("error al crear el alumno")
          }
          break;

        case 1:
            try {
              let nombre: string = readline.question('Introduce el nombre del alumnoa: ')
              for(let alumno of alumnos){
                if(alumno.getname() == nombre){
                    var nombrem: string = readline.question('Introduce el nombre de la materia: ')
                    var nota: number = readline.questionFloat('Introduce la nota del alumno en la materia: ')
                    let materia: Materia = new Materia(nombrem, nota)
                    alumno.addMateria(materia)
                    console.log("La materia se ha insertado correctamente")
                }
              }

            } catch (error) {
                console.log("error al insertar la materia al alumno")
            }
            break;

        case 2:
            try {
                var nombre: string = readline.question('Introduce el nombre del alumno: ')
                for(let alumno of alumnos){
                    if(alumno.getname() == nombre){
                        console.log(alumno.getmaterias())
                    }
                }
            } catch (error) {
                console.log("no se ha podido mostrar las materias del alumno")
            }
            break;
       }

       indice = readline.keyInSelect(opciones, 'Seleccione una operacion: ');

    }

}
main();