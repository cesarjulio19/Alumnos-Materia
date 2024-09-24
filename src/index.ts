import {Materia} from "./Materia"
import {Alumnos} from "./Alumnos"
import {MateriaInterface} from "./MateriaInterface"
import * as readline from 'readline-sync';
function main(){

    //Muestra las opciones
    const opciones = ['Crear alumno', 'asignar materia a alumno', 'lista de materias del alumno', 'lista de materias creadas',
      'Añadir o cambiar la nota de la materia de un alumno','Lista de alumnos y sus materias'
    ];
    let indice = readline.keyInSelect(opciones, 'Seleccione una operacion: ');
    let materiasC : string[] = [] 
    while(indice !== -1){

        //realiza la opccion elegida
       switch(indice){
        // crea al alumno
        case 0:
          try {
            let nombre: string = readline.question('Introduce el nombre del alumno: ')
            let id: number = readline.questionFloat('Introduce el id del alumno: ')
            let alumno = new Alumnos(nombre,id)
            Alumnos.addalumno(alumno)
            console.log("se ha creado correctamente")
          } catch (error) {
            console.log("error al crear el alumno")
          }
          break;
         //añade la materia con su nota al alumno
        case 1:
            try {
              let nombre: string = readline.question('Introduce el nombre del alumno: ')
              for(let alumno of Alumnos.getalumnos()){
                if(alumno.getname() == nombre){
                    var nombrem: string = readline.question('Introduce el nombre de la materia: ')
                    var id: number = readline.questionFloat('Introduce el id de la materia: ')
                    var nota: number = readline.questionFloat('Introduce la nota del alumno en la materia: ')
                    /*let materia: Materia = new Materia(nombrem, nota, id)*/
                    let materia: MateriaInterface = {name: nombrem, nota: nota, id: id}

                    alumno.addMateria(materia)
                    console.log("La materia se ha insertado correctamente")
                    if(!materiasC.includes(materia.name)){
                       materiasC.push(materia.name)
                    }
                    /*Materia.insertmateria(materia.getname())*/
                }
              }

            } catch (error) {
                console.log("error al insertar la materia al alumno")
            }
            break;
        //muestra las materias con su nota del alumno elegido
        case 2:
            try {
                var nombre: string = readline.question('Introduce el nombre del alumno: ')
                for(let alumno of Alumnos.getalumnos()){
                    if(alumno.getname() == nombre){
                        console.log(alumno.getmaterias())
                    }
                }
            } catch (error) {
                console.log("no se ha podido mostrar las materias del alumno")
            }
            break;
          // Muestra la lista de las materias creadas
          case 3:
            try {
              console.log("Esta son las materias que se han creado: ")
              console.log(materiasC)
              
            } catch (error) {
              console.log("no se ha podido realizar la operacion correctamente")
            }
            break;
          //añade o cambia la nota de la materia de un alumno
          case 4:
            try {
              let nombrea: string = readline.question('Introduce el nombre del alumno: ')
              let materiaa: string = readline.question('Introduce el nombre de la materia: ')
              let notaa: number = readline.questionFloat('Introduce la nota: ')
              for(let alumno of Alumnos.getalumnos()){
                if(alumno.getname() === nombrea){
                   alumno.changenota(materiaa, notaa)
                   console.log("la nota de la materia ha sido cambiada")
                }
              }
            } catch (error) {
              console.log("no se ha podido cambiar o añadir la nota de la materia")
            }
          // muestra todos los alumnos y sus materias
          case 5:
            try {
              for(let alumno of Alumnos.getalumnos()){
                console.log(alumno.getname())
                console.log(alumno.getmaterias())
              }
              
            } catch (error) {
              console.log("No se ha podido mostrar correctamente")
            }
       }

       indice = readline.keyInSelect(opciones, 'Seleccione una operacion: ');

    }

}
main();